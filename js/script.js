function adicionar() {
    var select = document.getElementById("listaSelect");
    var textoSelect = select.options[select.selectedIndex].value;
    var ul = document.querySelector("ul"); //pega o primeiro elemento ul e armazena na variavel ul
    var li = document.createElement("li"); //cria um elemento li e armazena na variavel li
    var label = document.createElement("label");
    var lipreco = document.createElement("p");
    label.textContent = textoSelect; //adiciona o valor da variavel texto ao elemento p
    ul.appendChild(li); //adiciona o elemento li ao elemento ul
    li.appendChild(label);
    li.appendChild(lipreco);
    var preco = document.getElementById("preco");
    var precoValor = parseFloat(preco.value);
    var precoNovo = isNaN(precoValor)
      ? 0
      : precoValor.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });

    lipreco.textContent = precoNovo;
    preco.value = "";

    if (precoNovo === 0) {
      alert("Digite o valor do produto");
      li.remove();
    }

    var itens = document.querySelectorAll("li");
    var total = 0;

    itens.forEach(function (item) {
      var valor = item.querySelector("p").textContent;
      valor = valor.replace("R$", "");
      valor = valor.replace(",", ".");
      valor = parseFloat(valor);
      total += valor; //total = total + valor
      var totalfinal = document.querySelector(".totalfinal");
      totalfinal.textContent = total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    });
  }
