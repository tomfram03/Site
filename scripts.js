function calcularCorrecao() {
    const pesoBruto = document.getElementById('pesoBruto').value;
    const pesoLiquido = document.getElementById('pesoLiquido').value;
    const fatorCorrecao = (pesoBruto / pesoLiquido).toFixed(2);
    document.getElementById('resultadoCorrecao').innerText = `Fator de Correção: ${fatorCorrecao}`;
}

function calcularCoccao() {
    const pesoCru = document.getElementById('pesoCru').value;
    const pesoCozido = document.getElementById('pesoCozido').value;
    const fatorCoccao = (pesoCozido / pesoCru).toFixed(2);
    document.getElementById('resultadoCoccao').innerText = `Fator de Cocção: ${fatorCoccao}`;
}
