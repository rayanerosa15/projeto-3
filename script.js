const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  
    {
        enunciado: "Hoje é dia e levar seu cachorro ao petshop, você prefere ir e manhã ou a tarde?",
        alternativas: [
            "manhã",
            "tarde"
        ]
    },
    {
        enunciado: "Qual banho você prefere?,banho e tosa tradicional ou banho higiênico?",
        alternativas: [
            "banho e tosa tradicional.",
            "banho higiênico."
        ]
    },
    {
        enunciado: "Deseja algum acessório?
    ",
        alternativas: [
            "Não,obrigada!",
            "Sim,obrigada!."
        ]
    },
    {
        enunciado: "Ao final do procedimento podemos tirar foto!",
        alternativas: [
            "simm!.",
            "Não!."
        ]
    },
    
]
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
  
}

mostraPergunta();

