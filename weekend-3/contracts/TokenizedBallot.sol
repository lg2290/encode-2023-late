// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface IMyToken {
    function getPastVotes(address account, uint256 blockNumber) external view returns (uint256);
}

contract TokenizedBallot {

    IMyToken public tokenContract;
    uint256 public blockTarget;

    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    Proposal[] public proposals;
    mapping(address => uint256) public votingPowerSpent;

    constructor(bytes32[] memory proposalNames, address _tokenContract, uint256 _blockTarget) {
        tokenContract = IMyToken(_tokenContract);
        blockTarget = _blockTarget;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint proposal, uint256 amount) external {
        require(votePower(msg.sender) >= amount, "Voting power smaller than amount");
        proposals[proposal].voteCount += amount;
        votingPowerSpent[msg.sender] += amount;
    }

    function votePower(address account) public view returns (uint256) {
        return tokenContract.getPastVotes(account, blockTarget) - votingPowerSpent[account];
    }

    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        bool draw = false;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
                draw = false;
            } else if(proposals[p].voteCount == winningVoteCount) {
                draw = true;
            }
        }

        require(winningVoteCount > 0, "Zero votes for all proposals");
        require(draw == false, "There are proposals tied with most votes");
    }

    function winnerName() external view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}