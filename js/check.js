var tabela = document.querySelector("#tabela-item")
tabela.addEventListener("click", evento =>{
    evento.target.parendNode.classList("check")
});