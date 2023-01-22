console.log('mostrar o document', document);

//passo 1 - dar um jeito de pegar o elemnto que representa o botão na tela usando o js.
const botaoTrailer = document.querySelector(".botao-trailer");

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () =>{
    // passo 4 - abrir o modal no tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

// passo 3 - dar um jeito de pegar o elemnto da modal no js.
const modal = document.querySelector(".modal");

// objetivo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

// objetivo 2 - dar um jeito de identificar quando o usuário clicar no x
botaoFecharModal.addEventListener("click", () =>{
    //objetivo 3 - fechar o modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

const video = document.getElementById("video");
const linkDoVideo = video.src;


