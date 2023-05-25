alert("Bem Vindo ao meu primeiro projeto, espero que goste!");

// Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao'); //Lista dos botões
const imagens = document.querySelectorAll('.imagem'); //Lista de imagem
//Passo 2 - Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        // passo 3 -  desmarcar o botão selecionado anterior 
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // Passo 4 - Marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem de fundo anterior 
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // Passo 6 - Fazer aparecer a imagem de fundo correspodende ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})
