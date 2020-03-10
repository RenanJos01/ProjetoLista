function calcPTotal(item) {
    let pTotal = item.quantidade * item.pUnitario;
    return pTotal.toFixed(2);
}
