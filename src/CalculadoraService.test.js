import CalculadoraService from './CalculadoraService'

describe('Teste do Calculadora Service', () => {
    const [
        calcular,
        concatenar,
        ADICAO,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO
    ] = CalculadoraService()

    it('Deve garantir que 1+4=5.', () => {
        let result = calcular(1, 4, ADICAO)
        expect(result).toEqual(5)
    })

    it('Deve garantir que 1-4=-3', () => {
        let result = calcular(1, 4, SUBTRACAO)
        expect(result).toEqual(-3)
    })

    it('Deve garantir que 3+4=12.', () => {
        let result = calcular(3, 4, MULTIPLICACAO)
        expect(result).toEqual(12)
    })

    it('Deve garantir que 10-4=2.5', () => {
        let result = calcular(10, 4, DIVISAO)
        expect(result).toEqual(2.5)
    })

    it('Deve garantir que 10#7=0', () => {
        let result = calcular(10, 7, '#')
        expect(result).toEqual(0)
    })

    it('Deva garantir que se numAtual = 0 retorna somente número a ser concatenado', () => {
        let result = concatenar('0', '645')
        expect(result).toEqual('645')
    })

    it('Deva garantir que se numAtual = null retorna somente número a ser concatenado', () => {
        let result = concatenar(null, '645')
        expect(result).toEqual('645')
    })

    it('Deva garantir que se numAtual for vazio e o numConcat for ponto retorna 0.', () => {
        let result = concatenar('', '.')
        expect(result).toEqual('0.')
    })

    it('Deva garantir que numConcat=. e numAtual já tenha um ponto returna numero atual.', () => {
        let result = concatenar('7.3', '.')
        expect(result).toEqual('7.3')
    })

    it('Deva garantir que 9.4 concatenado com 7 seja 9.47', () => {
        let result = concatenar('9.4', '7')
        expect(result).toEqual('9.47')
    })
    
})