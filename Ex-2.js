// Questao 2 -
// Funcoes: vencer membros da GP ou entrar na surdina

function vencerEduardo(presida) {
    if (presida["paoDeQueijo"]) {
        return true
    } 
    else {
        return false
    }
}

function vencerGabriel(presida) {
    if (presida["pet"]) {
        return true
    } 
    else {
        return false
    }
}

const vencerFelipe = (presida) => {
    if (presida["carteiraDeTrabalho"]) {
        return true
    } 
    else {
        return false
    }
} 

const entrarNaSurdina = (presida) => {
    if (presida["relogio"] == 18) {
        return true
    } 
    else {
        return false
    }
}

// arthur (objeto)

const arthur = {
    "paoDeQueijo": true,
    "pet": true,
    "carteiraDeTrabalho": false,
    "relogio": 17
}

// execucao

if (entrarNaSurdina(arthur)) {
    console.log("Arthur entrou na surdina e venceu a GP.")
}
else {
    if (vencerEduardo(arthur)) {
        if (vencerGabriel(arthur)) {
            if (vencerFelipe(arthur)) {
                console.log("Arthur ganhou de todos os membros e venceu a GP.")
            }
            else {
                console.log("Arthur foi impedido por Felipe, e nao venceu a GP.")
            }
        }
        else {
            console.log("Arthur foi impedido por Gabriel, e nao venceu a GP.")
        }
    }
    else {
        console.log("Arthur foi impedido por Eduardo, e nao venceu a GP.")
    }
}