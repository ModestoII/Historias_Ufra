
function chamaDIV(id){
    let conteudo = document.querySelector(id);
    conteudo.classList.toggle('div_aberta');
}

function fechaDIV(id){
    let conteudo = document.querySelector(id);
    conteudo.classList.toggle('div_fechada');
}