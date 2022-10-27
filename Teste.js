
//Questão (1)
console.log("-------------------------Questão 1-------------------------------")
console.log("")

const i = 13;
let somatorio = 0;

for (let k = 0; k < i; k++) {

    somatorio = k + somatorio;

    console.log(`Para k igual a ${k}, o somatorio é ${somatorio}`);
}


//-------------------------------------------------------------

//Questão (2)
console.log("-------------------------Questão 2-------------------------------")
console.log("")

let fibonacci = [0, 1];
var soma = 0;

function calculaFibonacci() {
    for (let i = 0; i < 50; i++) {

        soma += fibonacci[i];
        fibonacci.push(soma);


    }
    fibonacci.splice(0, 2);
    //console.log(fibonacci);
}
calculaFibonacci(); //calcula a sequencia para o sistema verificar
function verificaFibonacci(i) {
    if (fibonacci.find(element => element == i)) {

        console.log(`O número ${i} pertence à sequencia de Fibonacci`)

    } else {
        console.log(`O número ${i} não pertence à sequencia de Fibonacci`)
    }
}


verificaFibonacci(2); //Pertence
verificaFibonacci(5); //Pertence
verificaFibonacci(4); //Não Pertence
verificaFibonacci(3); //Pertence


//-------------------------------------------------------------

//Questão (3)
console.log("-------------------------Questão 3-------------------------------")
console.log("")
//chamando arquivo JSON
const faturamentos = require('./dados.json');

//Achar menor dia de Faturamento
function menorFaturamentoMes() {
    let menorFaturamento = [{ "dia": 0, "valor": Infinity }]
    for (let i = 0; i < faturamentos.length; i++) {
        if (faturamentos[i].valor > 0 && menorFaturamento[0].valor > faturamentos[i].valor) {
            menorFaturamento.pop();
            menorFaturamento.push(faturamentos[i]);
        }
    }
    console.log(`O menor faturamento do mês foi no dia ${menorFaturamento[0].dia} e foi de R$${menorFaturamento[0].valor.toFixed(2)}.`)
}
menorFaturamentoMes();


//Achar maior dia de faturamento
function maiorFaturamentoMes() {
    let maiorFaturamento = [{ "dia": 0, "valor": 0 }]
    for (let i = 0; i < faturamentos.length; i++) {
        if (faturamentos[i].valor > 0 && maiorFaturamento[0].valor < faturamentos[i].valor) {
            maiorFaturamento.pop();
            maiorFaturamento.push(faturamentos[i]);
        }
    }
    console.log(`O maior faturamento do mês foi no dia ${maiorFaturamento[0].dia} e foi de R$${maiorFaturamento[0].valor.toFixed(2)}.`)
}
maiorFaturamentoMes();


//Calculando média de faturamento
function calcularMediaFaturamento() {
    let somaFaturamento = 0;

    for (let i = 0; i < faturamentos.length; i++) {
        somaFaturamento += faturamentos[i].valor;
    }
    let mediaFaturamento = somaFaturamento / faturamentos.length;
    console.log("R$" + mediaFaturamento.toFixed(2));

}

calcularMediaFaturamento();

//-------------------------------------------------------------
//Questão (4)
console.log("-------------------------Questão 4-------------------------------")
console.log("")

let ganhos = [{ "Estado": "SP", "Ganho": 67836.43, "Percentual de Representacao": 0 }, { "Estado": "RJ", "Ganho": 36678.66, "Percentual de Representacao": 0 }, { "Estado": "MG", "Ganho": 29229.88, "Percentual de Representacao": 0 }, { "Estado": "ES", "Ganho": 7165.48, "Percentual de Representacao": 0 }, { "Estado": "Outros", "Ganho": 19849.53, "Percentual de Representacao": 0 }]
let somaGanhos = 0
function somaGanhosEmpresa() {

    for (let i = 0; i < ganhos.length; i++) {
        somaGanhos += ganhos[i].Ganho;
    };

    return somaGanhos;
}
somaGanhosEmpresa();

function calcularPercentual() {

    for (let i = 0; i < ganhos.length; i++) {
        let porcentagem = (ganhos[i].Ganho / somaGanhos).toFixed(4);

        ganhos[i]['Percentual de Representacao'] = porcentagem;

        console.log(`O percentual de representação de ${ganhos[i].Estado} é de ${ganhos[i]['Percentual de Representacao'] * 100.}%`);
    }

}

calcularPercentual();

//-------------------------------------------------------------
//Questão (5)
console.log("-------------------------Questão 5-------------------------------")
console.log("")

function inverterCaracteres(string) {
    const textoOriginal = string.split('');
    const textoInvertido = [];


    for (let i = string.length - 1; i >= 0; i--) {

        textoInvertido.push(textoOriginal[i]);
    }
    console.log(textoInvertido.join(''));


}
inverterCaracteres('Ola, me chamo Carlos e esse é o teste para a target');
