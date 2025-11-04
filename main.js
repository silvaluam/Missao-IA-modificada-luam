const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você prefere atividades em grupo ou sozinho?",
        alternativas: [
            {
                texto: " Em grupo ",
                afirmacao: [
                    " Você gosta de se conectar com as pessoas e se sente energizado em interações sociais.",
                    "Você se sente mais motivado quando trabalha em equipe e compartilha ideias com outras pessoas.",
                    "Você encontra prazer em ambientes dinâmicos e no intercâmbio de experiências e opiniões."
                ]
            },
            {
                texto: " Sozinho",
                afirmacao: [
                    "Você valoriza momentos de introspecção e recarrega suas energias no silêncio.",
                    "Você se concentra melhor e sente maior produtividade quando está sozinho, sem distrações",
                    "Você prefere trabalhar de forma independente, tomando suas próprias decisões e seguindo seu ritmo."
                ]
            }
        ]
    },
    {
        enunciado: " Quando você precisa tomar uma decisão, você costuma ser mais:",
        alternativas: [
            {
                texto: " Racional ",
                afirmacao: [
                    " Você confia na lógica e na análise para encontrar a melhor solução.   ",
                    "Você prefere avaliar prós e contras antes de agir, buscando sempre decisões bem fundamentadas",
                    "Você tende a separar emoções dos fatos para manter clareza e objetividade em suas escolhas"
                ]
            },
            {
                texto: " Emocional ",
                afirmacao: [
                    "Você leva em conta os sentimentos e a empatia antes de decidir. ",
                    "Você acredita que as emoções são uma bússola importante para orientar suas escolhas",
                    "Você se guia pela intuição e procura agir de acordo com o que sente ser o mais certo"
                ]
            }
        ]
    },
    {
        enunciado: "  Em situaçoẽs novas, você tende a ser mais:",
        alternativas: [
            {
                texto: " Cauteloso (a) ",
                afirmacao: [
                    "Você pensa antes de agir e prefere segurança e planejamento.  ",
                    "Você analisa riscos com cuidado antes de tomar qualquer decisão",
                    "Você se sente mais confortável quando pode prever resultados e evitar surpresas"
                ]
            },
            {
                texto: "Aventureiro (a) ",
                afirmacao: [
                    "Você gosta de explorar o desconhecido e abraça desafios com entusiasmo. ",
                    "Você vê novas experiências como oportunidades de crescimento e aprendizado",
                    "Você se sente motivado(a) pela descoberta e pela emoção do inesperado"
                ]
            }
        ]
    },
    {
        enunciado: "  No seu tempo livre, você prefere:",
        alternativas: [
            {
                texto: " Estar em movimento ( passeios, esportes, festas )  ",
                afirmacao: [
                    "Você é dinâmico, gosta de novidades e aproveita a vida ativamente.  ",
                    "Você se sente revigorado quando está em ambientes cheios de energia e movimento",
                    "Você prefere experiências que tragam emoção, interação e novas histórias para contar"
                ]
            },
            {
                texto: "  Relaxar em casa (ler, ver filmes, descansar)   ",
                afirmacao: [
                    "Você valoriza tranquilidade e aprecia momentos de calma e descanso.",
                    "Você encontra prazer nas pequenas coisas e gosta de recarregar as energias no conforto do lar",
                    "Você prefere atividades que proporcionem introspecção, bem-estar e serenidade"
                ]
            }
        ]
    },
    {
        enunciado: " Quando alguém discorda de você, você normalmente:  ",
        alternativas: [
            {
                texto: "  Argumenta e defende seu ponto  ",
                afirmacao: [
                    "Você é firme em suas opiniões e gosta de se expressar com clareza.",
                    "Você acredita na importância do diálogo e gosta de sustentar suas ideias com argumentos sólidos",
                    "Você encara divergências como oportunidades para trocar perspectivas e fortalecer seu ponto de vista"
                ]
            },
            {
                texto: "  Prefere evitar conflitos ",
                afirmacao: [
                    "Você busca harmonia nos relacionamentos e evita desgastes desnecessários.",
                    "Você acredita que manter a paz vale mais do que vencer uma discussão",
                    "Você tende a ceder quando percebe que o conflito pode afetar o equilíbrio das relações"
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Para começar ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}






mostraPerguntas();