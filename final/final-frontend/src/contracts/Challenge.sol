// SPDX-License-Identifier: MIT
pragma solidity 0.8.18 ;

import "usingtellor/contracts/UsingTellor.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Challenge is UsingTellor, ReentrancyGuard{

    
    IERC20 public usdcContract ;

    constructor(address payable _tellorAddress, address usdContract) UsingTellor(_tellorAddress) {
        usdcContract = IERC20(usdContract);
    }

    uint public counter;
   
    enum Side {GreaterThan, LessThan}
   
    
    struct Contest {
        string numeratorCurrency;
        string denominatorCurrency;
        uint challengeId;
        uint challengePrice;
        uint endTime;
        Side challengeSide;        
        uint amount;
        address challenger; 
        address acceptor;
        
    }

  

     event NewChallenge(
        address indexed challenger,
        uint indexed challengeId,
        string numeratorCurrency,
        string denominatorCurrency,
        uint validity,
        uint price,
        uint amount,
        Side cSide

    );


     event ChallengeAccepted(
        address indexed challenger,
        address indexed acceptor,
        uint indexed challengeId,
        string numeratorCurrency,
        string denominatorCurrency,
        uint validity,
        uint price,
        uint amount,
        Side cSide

    );

    mapping (uint => Contest) public Challenges;

    mapping(address =>Contest[]) public userChallenges;
    Contest[] public allChallenges;
    function addChallenge( string memory nCurrency, 
                            string memory dCurrency, 
                            uint cPrice , 
                            uint validity, 
                            Side cSide,
                            uint cAmount) public {
        
        
        require(usdcContract.balanceOf(msg.sender) >= cAmount, "Insufficient USDC");
        counter = counter + 1;
        usdcContract.transferFrom(msg.sender, address(this), cAmount);
        Challenges[counter] = Contest(nCurrency,
                                      dCurrency,
                                      counter,
                                      cPrice,
                                      validity,
                                      cSide,
                                      cAmount,
                                      msg.sender,
                                      address(0));

        userChallenges[msg.sender].push(Challenges[counter]);
        allChallenges.push(Challenges[counter]);
        emit NewChallenge( msg.sender, counter, nCurrency, dCurrency,  validity  ,cPrice,cAmount,cSide);

                            }
    function acceptChallenge( uint _challengeId) public payable {
        
        require(Challenges[_challengeId].acceptor == address(0), "Challenge Already Accepted");
        require(msg.sender != Challenges[_challengeId].challenger, "Challenger cannot accept");
        require(usdcContract.balanceOf(msg.sender) >= Challenges[_challengeId].amount, "Insufficient USDC");
        require(Challenges[_challengeId].endTime >= block.timestamp, "Time's Up");

        Challenges[_challengeId].acceptor = msg.sender;
        usdcContract.transferFrom(msg.sender, address(this), Challenges[_challengeId].amount);
        userChallenges[msg.sender].push(Challenges[_challengeId]);
        emit ChallengeAccepted(Challenges[_challengeId].challenger ,msg.sender, _challengeId,Challenges[_challengeId].numeratorCurrency, Challenges[_challengeId].denominatorCurrency,Challenges[_challengeId].endTime ,Challenges[_challengeId].challengePrice,Challenges[_challengeId].amount,Challenges[_challengeId].challengeSide);


    }

    function challengeWinner ( uint _challengeId) public view returns(address) {
        
        require(Challenges[_challengeId].acceptor != address(0), "Challenge Not Accepted");
        require(Challenges[_challengeId].endTime < block.timestamp, "Not yet closed");

        uint currentPrice = getSpotPrice(Challenges[_challengeId].numeratorCurrency,
                                        Challenges[_challengeId].denominatorCurrency,
                                        Challenges[_challengeId].endTime);

        if (Challenges[_challengeId].challengeSide == Side.GreaterThan) {
            if(currentPrice > Challenges[_challengeId].challengePrice) {
                
                return Challenges[_challengeId].challenger;
            } else {
                
                return Challenges[_challengeId].acceptor;
            }
        } else {
            if(currentPrice < Challenges[_challengeId].challengePrice) {
                
                return Challenges[_challengeId].challenger;

            } else {

                return Challenges[_challengeId].acceptor;

            }

        }

    }

    function withdrawWinnings(uint _challengeId) public nonReentrant {

        require(Challenges[_challengeId].amount > 0, "Rewards Claimed Already");
        address winner = challengeWinner(_challengeId);
        require( winner == msg.sender , "User is not winner");
        uint winningAmount =  190 * Challenges[_challengeId].amount / 100;
        require(usdcContract.balanceOf(address(this)) > winningAmount , "Not enough balance in contract");
        usdcContract.transfer(msg.sender, winningAmount);
        Challenges[_challengeId].amount = 0;

    }

    function getSpotPrice(string memory fst, string memory snd, uint ctimestamp) public view returns(uint256) {


    
      bytes memory _queryData = abi.encode("SpotPrice", abi.encode(fst, snd));
      bytes32 _queryId = keccak256(_queryData);
      
      (bytes memory _value, uint256 _timestampRetrieved) =
          getDataBefore(_queryId, ctimestamp);
      if (_timestampRetrieved == 0) return 0;
      return abi.decode(_value, (uint256));
    }
        
  function getAllChallenges() public view returns ( Contest[] memory){
      return allChallenges;
  }

  function getUserChallenges() public view returns ( Contest[] memory){
      return userChallenges[msg.sender];
  }

}
