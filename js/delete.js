var apagar = document.querySelector(".button-delete");
apagar.addEventListener("click", evento=>{
    apagar.target.parentNode.classList.add("fadeOut");
    //setTimeout(() => evento.target.parentNode.remove(), 500)
    console.log("clicou")
});