import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

import { Account } from '../components'
import { Connected } from '../components'
import { Disconnected } from '../components'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Page() {
  const { address, isConnected } = useAccount()

  return (
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <h1>Challenge</h1>
            {!isConnected && <h5>Connect to create your predictions, and challenge other's predictions</h5>}
          </Col>
          <Col xs={3}>
            <Web3Button/>
          </Col>
        </Row>
        <Row>
          {isConnected && <Col>
            <h3>Hello {address}</h3>
          </Col>}
        </Row>
        <Row>
          {isConnected && <Account />}
          {isConnected && <Connected />}
          {!isConnected && <Disconnected />}
        </Row>

      </Container>


    </>
  )
}

export default Page
