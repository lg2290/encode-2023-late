import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function Disconnected() {

    const challenges = [
        {
            "currency": "BTC",
            "target_value": 30000.00,
            "bet": "GREATER_THAN",
            "target_date": "2023-04-31T00:00:00Z",
            "bet_value": 234.11,
            "accept_challenge_before": "2023-04-03T00:00:00Z"
        },
        {
            "currency": "BTC",
            "target_value": 25000.00,
            "bet": "LESS_THEN",
            "target_date": "2023-04-31T00:00:00Z",
            "bet_value": 234.11,
            "accept_challenge_before": "2023-04-03T00:00:00Z"
        }
    ]

    const cards = [];

    for(let i = 0; i < challenges.length; i++) {
        let challenge = challenges[i];
        cards.push(
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{challenge.currency} {challenge.bet === "GREATER_THAN" ? ">" : "<"} {challenge.target_value} by {challenge.target_date}</Card.Title>
                        <Card.Text>
                            Deadline to challenge: {challenge.accept_challenge_before}
                        </Card.Text>
                        <Button variant="primary" disabled>{challenge.bet_value} USD</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

  return (
    <Row xs={1} md={2} className="g-4">
            {cards}
    </Row>
  );
}
