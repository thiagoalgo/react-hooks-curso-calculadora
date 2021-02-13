import './Calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import CalculadoraService from './CalculadoraService'

function Calculadora() {

  const [txtNumero, setTxtNumero] = useState('0')
  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState(null)
  const [operacao, setOperacao] = useState(null)
  const [
    calcular,
    concatenar,
    ADICAO,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO
  ] = CalculadoraService()

  function limpar() {
    setTxtNumero('0')
    setNum1('0')
    setNum2(null)
    setOperacao(null)
  }

  function adicionarNumero(numero) {
    let result

    if (operacao === null) {
      result = concatenar(num1, numero)
      setNum1(result)
    } else {
      result = concatenar(num2, numero)
      setNum2(result)
    }

    setTxtNumero(result)
  }

  function definirOperacao(op) {
    if (operacao === null) {
      setNum1(txtNumero)
      setOperacao(op)
      return
    }

    if (num2 !== null) {
      const result = calcular(parseFloat(num1), parseFloat(num2), operacao)
      setTxtNumero(result.toString())
      setOperacao(op)
      setNum1(result.toString())
      setNum2(null)
    }
  }

  function igual() {
    if (num2 !== null) {
      const result = calcular(parseFloat(num1), parseFloat(num2), operacao)
      setTxtNumero(result.toString())
      setOperacao(null)
      setNum1(result.toString())
      setNum2(null)
    }
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
            <Button variant="danger"
              onClick={() => limpar()}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumero"
              className="text-right"
              readOnly="readOnly"
              value={txtNumero} 
              data-testid="txtNumero"/>
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
              onClick={() => definirOperacao(DIVISAO)}>/</Button>
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
              onClick={() => definirOperacao(MULTIPLICACAO)}>*</Button>
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
              onClick={() => definirOperacao(SUBTRACAO)}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('0')}>0</Button>
          </Col>
          <Col xs="3">
            <Button variant="light"
              onClick={() => adicionarNumero('.')}>.</Button>
          </Col>
          <Col xs="3">
            <Button variant="success"
              onClick={() => igual()}>=</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning"
              onClick={() => definirOperacao(ADICAO)}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
