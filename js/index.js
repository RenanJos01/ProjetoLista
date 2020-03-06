let botao = document.querySelector("#cadastrar");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    let item = carregarItem()
    //console.log("Clicou")
});

function montarTd(valor,classe){
    let td = document.createElement("td");

}

function carregarItem(form){
    let item ={
        item: form.item.alue,
        quantidade: form.quantidade.value,
        pUnitario: form.pUnitario.value
    }
}