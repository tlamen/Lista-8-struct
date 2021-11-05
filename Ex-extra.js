function acharQuadradosPerfeitos(numero) {
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)) {
        let sucessor = raiz + 1
        let antecessor = raiz -1
        sucessor = sucessor * sucessor
        antecessor = antecessor * antecessor

        const quadrados = {
            "anterior": antecessor,
            "atual": numero,
            "posterior": sucessor
        }

        return quadrados
    } 
    else {
        return -1
    }
}

