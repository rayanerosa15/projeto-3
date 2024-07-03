const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hoje é dia de levar seu petshop, você prefere ir de manhã ou a tarde?",
        alternativas: [
            {
                texto: "manhã!",
                afirmacao: "afirmacao"
            },
            {
                texto: "tarde!",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual banho você prefere? banho e tosa tradicional ou apenas higiênico?",
        alternativas: [
            {
                texto: "tradicional",
                afirmacao: "afirmacao"
            },
            {
                texto: "apenas higiênico",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "deseja algum acessório?",
        alternativas: [
            {
                texto: "sim, obrigado!",
                afirmacao: "afirmacao"
            },
            {
                texto: "não, obrigado!",
                afirmacao: "afirmacao"
            }
          
        ]
      
},
    {
        enunciado: "Ao final do procedimento podemos tirar foto?",
        alternativas: [
            {
                texto: "simm!",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            }
          
        ]    
}, 
  
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historia += afirmacoes + "";
    atual++;
    mostraPergunta();
}
   
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
