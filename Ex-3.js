// Questao 3 (eu coloquei um programa dentro de um script de uma pagina
// html vazia pra testar os pop-ups, nao sei se era o certo mas funcionou desse jeito)


// funcoes de conversao e elaboracao da string
function celsius(temp) {
    const fahrenheit = (temp * 1.8) + 32
    const kelvin = (temp / 1) + 273
    const frase = temp + " graus celsius é equivalente a " + fahrenheit + " graus fahrenheit e " + kelvin + " graus kelvin."
    return frase
}

function fahrenheit(temp) {
    const celsius = (temp - 32) / 1.8
    const kelvin = celsius + 273
    const frase = temp + " graus fahrenheit é equivalente a " + Math.floor(celsius) + " graus celsius e " + Math.floor(kelvin) + " graus kelvin."
    return frase
}

function kelvin(temp) {
    const celsius = temp - 273
    const fahrenheit = (celsius * 1.8) + 32
    const frase = temp + " graus kelvin é equivalente a " + celsius + " graus celsius e " + fahrenheit + " graus fahrenheit."
    return frase
}

const unidades = prompt("Unidade:")
unidade = unidades.toLowerCase()
if (unidade != "celsius" && unidade != "fahrenheit" && unidade != "kelvin") {
    alert("Impossivel fazer uma conversao")
} else {
    const temperatura = prompt("Temperatura:")

    switch (unidade) {
        case "celsius":
            alert(celsius(temperatura))
            break;
        case "fahrenheit":
            alert(fahrenheit(temperatura))
            break;
        case "kelvin":
            alert(kelvin(temperatura))
            break;
        default:
            alert("Impossivel fazer uma conversao")
            break;
    }
} 