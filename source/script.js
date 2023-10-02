const input = document.getElementById("input");
const hamburguer = document.querySelector(".hamburguer");
const personagens = document.querySelectorAll(".personagens");

// Evento que tira o icon de dentro da Barra de Pesquisa
document.addEventListener('click', (e) => {
    const navegacao = document.querySelector(".fa-magnifying-glass");
    const inputClicado = input.contains(e.target)

    if (inputClicado) {
        if (navegacao) {
            navegacao.style.display = 'none';
        }
    }else {
        if (navegacao) {
            navegacao.style.display = 'block';
        }
    }
});

// Evento do menu hamburguer
hamburguer.addEventListener('click', () => {
    let ul = document.getElementById("ul-animation");

    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'flex';
    }else {
        ul.style.display = 'none';
    }
    
});

// Evento que mostra mais o paragrafo 
document.getElementById("verMais").addEventListener('click', () => {
    let verMais = document.getElementById("verMais");
    let verParagrafo = document.getElementById("verParagrafo");

    if (verParagrafo.style.display == 'none' || verParagrafo.style.display == '') {
        verParagrafo.style.display = 'block';
        verMais.style.display = 'none';
    }
})

let personagemAtivo = null;
let primeiroPersonagemMarcado = false;
const primeiroPersonagem = personagens[0];

function desmarcarPrimeiroPersonagem() {
    primeiroPersonagem.style.background = 'transparent';
    primeiroPersonagem.style.borderRadius = '0';
    primeiroPersonagemMarcado = false;
}

personagens.forEach(function(e, personagem) {
const imagem = document.createElement('img');
const subTitulo = document.getElementById("sub-titulo");
const descricao = document.getElementById("descricao");
const img = document.getElementById("personagens-aparece");

function personagemRost() {
    subTitulo.innerHTML = "Rost";
    descricao.innerHTML = "Um exilado que criou Aloy longe da tribo, Rost é um homem honrado cuja vida teve uma série de reviravoltas trágicas. Apenas as Matriarcas sabem por que ele foi exilado, mas ninguém que o conhecia acreditaria que ele cometeria um crime contra a tribo...";
    img.src = 'imagens/horizon zero dawn rost.png';

    if (!primeiroPersonagemMarcado) {
        e.style.background = 'blue';
        e.style.borderRadius = '5px';
        primeiroPersonagemMarcado = true;
    }
}

personagemRost();

    e.addEventListener('click', () => {
        
        if (primeiroPersonagemMarcado) {
            desmarcarPrimeiroPersonagem();
        }

        if (personagemAtivo !== null) {
            personagemAtivo.style.background = 'transparent';
            personagemAtivo.style.borderRadius = '0';
        }
        personagemAtivo = e;

        e.style.background = 'blue';
        e.style.borderRadius = '5px';
        switch (personagem) {
            case 0:
                personagemRost();
                break;
            case 1:
                subTitulo.innerHTML = "Varl";
                descricao.innerHTML = "Um valente com fala mansa da tribo Nora, Varl teve que se contentar em ser o filho de Sona, a chefe de guerra da tribo e uma das maiores heroínas já vistas. Junto com sua irmã Vala, Varl raramente recebeu elogios de sua mãe, que considerava excelência sua própria recompensa... acessível a poucos.";
                img.src = 'imagens/horizon zero dawn varl.png';
                break;
            case 2:
                subTitulo.innerHTML = "Avad";
                descricao.innerHTML = "O Rei Sol Avad é o 14º monarca da tribo Carja e, paradoxalmente para uma alma tão gentil, o único a ascender ao trono através do regicídio. Avad nunca achou que seria rei, e achava que seu irmão mais velho era um herdeiro mais adequado. Mas o irmão mais novo descobriu que sua inteligência.";
                img.src = 'imagens/games horizon zero dawn avad.png';
                break;
            case 3:
                subTitulo.innerHTML = "Erend";
                descricao.innerHTML = "Assombrado pela liderança ruim e alcoolismo terminal de seu pai, Erend viu o clã Oseram ser destruído por lutas violentas internas. E enquanto este fim levou sua irmã, Ersa, lutar por uma vida melhor, os sentimentos de Erend culminaram em um forte ódio pelos erros de seu pai...";
                img.src = 'imagens/horizon zero dawn erend.png';
                break;
            case 4:
                subTitulo.innerHTML = "vanasha";
                descricao.innerHTML = "Com a missão de convencer a rainha viúva Nasadi a desertar, a meridiana Vanasha trabalhou como espiã infiltrada nos Carja da Sombra nos últimos dois anos. Essa missão teria dado certo, se não fosse pela Cidadela sendo bloqueada sob circunstâncias misteriosas.";
                img.src = 'imagens/horizon zero dawn vanasha.png';
                break;
        }
    });
});
