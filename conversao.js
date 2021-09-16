const celsius = 1
const kelvin = 2
const fahrenheit = 3

var tempOrigem = fahrenheit
var tempDestino = celsius
var temperatura = 36
var resultado = temperatura

if (tempOrigem == celsius) {
    if (tempDestino == kelvin) {
        resultado = temperatura + 273
    } else if (tempDestino == fahrenheit) {
        resultado = temperatura * 9 / 5 + 32
    }

} else if (tempOrigem == kelvin) {
    if (tempDestino == celsius) {
        resultado = temperatura - 273
    } else if (tempDestino == fahrenheit) {
        resultado = (temperatura - 273) * 9 / 5 + 32
    }
} else {
    if (tempDestino == celsius) {
        resultado = (temperatura - 32) * 5
    } else if (tempDestino == kelvin) {
        resultado = (temperatura - 32) * 5 / 9 +273
    }
}

console.log(resultado)