import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export function CreateChallenge() {
    const [currency, setCurrency] = useState("BTC");
    const [bet, setBet] = useState("GREATER_THAN");
    const [targePrice, setTargePrice] = useState(0);
    const [betAmount, setBetAmount] = useState(0);
    const [targetDate, setTargetDate] = useState("");
    const [expirationDate, setExpirationDate] = useState("");


    return (
        <Form onSubmit={e => {
            e.preventDefault();
            let challenge = {
                "currency": currency,
                "target_value": targePrice,
                "bet": bet,
                "target_date": new Date(targetDate),
                "bet_value": betAmount,
                "accept_challenge_before": new Date(expirationDate)
            };
        
            console.log(challenge);
            setCurrency("BTC");
            setBet("GREATER_THAN");
            setTargePrice(0);
            setBetAmount(0);
            setTargetDate("");
            setExpirationDate("");
          }}>
            <Row>
                <Col xs={2}>
                    <Form.Group className="mb-3" controlId="formCurrency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Select value={currency}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setCurrency(e.target.value);
                                }}>
                            <option key="BTC" value="BTC">BTC</option>
                            <option key="ETH" value="ETH">ETH</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={1}></Col>
                <Col xs={2}>
                    <Form.Group className="mb-3" controlId="formBet">
                        <Form.Label>Bet</Form.Label>
                        <Form.Select value={bet}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setBet(e.target.value);
                                }}>
                            <option key="GREATER_THAN" value="GREATER_THAN">Greater Than ({'>'})</option>
                            <option key="LESS_THAN" value="LESS_THAN">Less Than ({'<'})</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Label>Currency Target Price (USD)</Form.Label>
                    <Form.Group className="mb-3" controlId="formTargetPrice">
                        <Form.Control type="number" placeholder="Price USD" value={targePrice}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setTargePrice(Number.parseFloat(e.target.value));
                                }}/>
                    </Form.Group>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                    <Form.Label>Challenge Amount (USD)</Form.Label>
                    <Form.Group className="mb-3" controlId="formBetAmount">
                        <Form.Control type="number" placeholder="Amount USD" value={betAmount}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setBetAmount(Number.parseFloat(e.target.value));
                                }}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={3}></Col>
                <Col xs={3}>
                    <Form.Label>Target Date</Form.Label>
                    <Form.Group className="mb-3" controlId="formTargetDate">
                        <Form.Control type="datetime-local" value={targetDate}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setTargetDate(e.target.value);
                                }}/>
                    </Form.Group>
                </Col>
                <Col xs={3}></Col>
                <Col xs={3}>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Group className="mb-3" controlId="formExpirationDate">
                        <Form.Control type="datetime-local"  value={expirationDate}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setExpirationDate(e.target.value);
                                }}/>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CreateChallenge;