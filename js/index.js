let botao = document.querySelector("#cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-item")
    let item = carregarItem(formulario)
    //console.log("Clicou")
    if (item) {
        montarTr(item);
        formulario.reset();
    }
});

function montarTr(item) {
    let table = document.querySelector("#tabela-item");
    let tr = document.createElement("tr");
    tr.classList.add("item")

    tr.appendChild(montarTd("X", "button-delete"));
    tr.appendChild(montarTd("✓","button-confirm"));
    tr.appendChild(montarTd(item.item, "item"));
    tr.appendChild(montarTd(item.quantidade, "quant"));
    tr.appendChild(montarTd(item.moeda, "moeda"));
    tr.appendChild(montarTd(item.pUnitario, "pUnitario"));
    tr.appendChild(montarTd(item.moeda, "moeda"));
    tr.appendChild(montarTd(calcPTotal(item), "pTotal"));

    table.appendChild(tr);
}

function montarTd(valor, classe) {
    let td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}

function carregarItem(form) {
    let item = {
        item: form.item.value,
        moeda: "R$",
        quantidade: form.quantidade.value,
        pUnitario: form.pUnitario.value
    }
    return item
}