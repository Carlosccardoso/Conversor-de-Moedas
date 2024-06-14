
function somar() {
    let url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MS6jKtrrk8bsTrYE4KaDJROPmLu0ElHuTTfRk2ee";
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            let data = JSON.parse(xmlHttp.responseText).data;

            let moeda1 = document.getElementById("coin1").value;
            let moeda2 = document.getElementById("coin2").value;
            let valor1 = document.getElementById("valor1").value;

            if (moeda1 === "" || moeda2 === "" || valor1 === "") {
                alert("Por favor, preencha todos os campos");
                return;
            }

            valor1 = parseFloat(valor1);
            if (isNaN(valor1)) {
                alert("Por favor, insira um valor numérico válido");
                return;
            }

            let taxaMoeda1 = data[moeda1];
            let taxaMoeda2 = data[moeda2];
            let valor2 = (valor1 / taxaMoeda1) * taxaMoeda2;

            document.getElementById("valor2").value = valor2.toFixed(2);
        }
    };

    xmlHttp.send(null);
}
