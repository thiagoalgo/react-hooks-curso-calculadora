import './Calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'

function Calculadora() {

  const [txtNumero, setTxtNumero] = useState('0')

  function adicionarNumero(numero) {
    if (txtNumero === '0') {
      setTxtNumero(numero)
    } else {
      setTxtNumero(txtNumero + numero)
    }
  }

  function definirOperacao(op) {
    setTxtNumero(op)
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '280px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumero"
              className="text-right"
              readOnly="readOnly"
              value={txtNumero} />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('7')}>7</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('8')}>8</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('9')}>9</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning"
              onClick={() => definirOperacao('/')}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('4')}>4</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('5')}>5</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('6')}>6</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning"
              onClick={() => definirOperacao('*')}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('1')}>1</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('2')}>2</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('3')}>3</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning"
              onClick={() => definirOperacao('-')}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('0')}>0</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">.</Button>
          </Col>
          <Col xs="3">
            <Button variant="success">=</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning"
              onClick={() => definirOperacao('+')}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
