import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Row';

export function Connected() {

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
                      <Button variant="primary">{challenge.bet_value} USD</Button>
                  </Card.Body>
              </Card>
          </Col>
      )
  }


  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3">
      <Tab eventKey="challenges" title="Challenges">
        <Row xs={1} md={2} className="g-4">
          {cards}
        </Row>
      </Tab>
      <Tab eventKey="create" title="Create Challenge">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Tab>
      <Tab eventKey="my-challenges" title="My Challenges">
        Bliblibibilbi
      </Tab>
    </Tabs>
  );
}

export default Connected;