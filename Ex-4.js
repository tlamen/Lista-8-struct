// Questao 4 -

// a) Estatisticas dos alunos:

function classStatistics(turma) {
    const notas = [];
    // valores necessarios pros calculos
    let soma = 0;
    let quantidade = 0;
    let aprovados = 0;
    let reprovados = 0;

    // primeiro loop: organizar as notas em array e guardar os valores
    for (const aluno in turma) {
        if (Object.hasOwnProperty.call(turma, aluno)) {
            const element = turma[aluno];
            const nota = element["mediaFinal"];
            notas.push(nota);
            soma += nota;
            quantidade += 1;
            if (nota < 5) {
                reprovados += 1;
            }
            else {
                aprovados += 1;
            }
        }      
    }

    const media = soma / quantidade;
    let varianca = 0;

    // segundo loop: calcular a varianca atraves da lista 
    for (const _nota in notas) {
        if (Object.hasOwnProperty.call(notas, _nota)) {
            const element = notas[_nota];
            varianca += (media - element) * (media - element);
        }
    }

    // calculo do desvio padrao
    varianca = varianca / quantidade;
    desvioPadrao = Math.sqrt(varianca)

    // output
    console.log("media da turma: " + media.toFixed(2))
    console.log("desvio padrao da turma: " + desvioPadrao.toFixed(2))
    console.log("alunos aprovados: " + aprovados)
    console.log("alunos reprovados: " + reprovados)
}

// b) adicionar mencao:

function addMencao(alunos) {
    for (const aluno in alunos) {
        if (Object.hasOwnProperty.call(alunos, aluno)) {
            const objeto = alunos[aluno];
            const nota = objeto["mediaFinal"]

            let mencao = "RR"
            
            if (nota >= 5) {
                mencao = "MM"
            }
            if (nota >= 7) {
                mencao = "MS"
            }
            if (nota >= 9) {
                mencao = "SS" 
            }

            objeto["mencao"] = mencao
        }
    }

    return alunos
}

