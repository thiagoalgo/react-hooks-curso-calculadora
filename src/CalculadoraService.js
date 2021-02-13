function CalculadoraService() {
    const ADICAO = '+'
    const SUBTRACAO = '-'
    const MULTIPLICACAO = '*'
    const DIVISAO = '/'

    function calcular(num1, num2, op) {
        switch (op) {
            case ADICAO:
                return num1 + num2
            case SUBTRACAO:
                return num1 - num2
            case MULTIPLICACAO:
                return num1 * num2
            case DIVISAO:
                return num1 / num2
            default:
                return 0
        }
    }

    function concatenar(numAtual, numConcat) {
        if (numAtual === '0' || numAtual === null) {
            return numConcat
        }
        
        if (numConcat === '.' && numAtual === '') {
            return '0.'
        }

        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual
        }

        return numAtual + numConcat
    }

    return [
        calcular,
        concatenar,
        ADICAO,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO
    ]
}

export default CalculadoraService