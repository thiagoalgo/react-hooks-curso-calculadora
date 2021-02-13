import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './Calculadora'
import { render, fireEvent } from '@testing-library/react'

describe('Teste da Calculadora', () => {
    it('deve renderizar componente principal sem erros', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Calculadora />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('deve limpar o campo de número', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('C'))
        expect(getByTestId('txtNumero')).toHaveValue('0')
    })

    it('deve somar 23 + 2 e obter 25', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumero')).toHaveValue('25')
    })

    it('deve diminuir 23 - 2 e obter 21', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('-'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumero')).toHaveValue('21')
    })

    it('deve multiplicar 23 * 2 e obter 46', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('*'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumero')).toHaveValue('46')
    })

    it('deve dividir 23 / 2 e obter 11.5', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('/'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumero')).toHaveValue('11.5')
    })

    it('deve calcular 23 * 2 - 23 e obter 23', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('*'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('-'))
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('txtNumero')).toHaveValue('23')
    })
})
