// Questao 1 -
// a)
const calculateIMC = (peso, altura) => { return peso /  (altura * altura) }

// b)
function generateUser(nome, idade, email) {
    const objeto = {
        "nome": nome,
        "idade": idade,
        "email": email
    }
    return objeto
}

// c)
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function pares(numeros) {
    const numeros_pares = []
    for (const numero of numeros) {
        if (numero % 2 == 0) {
            numeros_pares.push(numero)
        }
    } 
    return numeros_pares
}

