//todo: hacer el front de la calculadora
const process = require('process');
const restar = require('./restar')
const {argv} = process;
const sumar = require('./sumar')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')

function calculadora(comando,a,b){

switch (comando) {
    case "sumar":
         return sumar(a,b)
        break;
        case "restar":
        return restar(a,b)
        
        case "multiplicar":
        return multiplicar(a,b)
        break;
        case "dividir":
        return dividir(a,b)
        break;

    default:
        return "comando no valido"
        break;
}
}

console.log(calculadora(argv[2],+argv[3],+argv[4]));