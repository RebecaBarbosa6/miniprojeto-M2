  // Função para redirecionar o usuário
  //function redirecionar() {
    // Substitua 'caminho/do/arquivo-ou-pasta' pelo caminho desejado
  //  window.location.href("index.html");
//}

// Adiciona um event listener ao botão
//document.getElementById('inicio').addEventListener('click', redirecionar);





class Dado {
    constructor(Planta, Espécie) {
        this.Planta = Planta;
        this.Espécie = Espécie;
    }
}

let dados = [];

function cadastrarDado() {
    const Planta = document.getElementById('Planta').value;
    const Espécie = document.getElementById('Espécie').value;

    if (Planta && Espécie) {
        const novoDado = new Dado(Planta, Espécie);
        dados.push(novoDado);
        limparFormulario();
        atualizarLista();
    } else {
        alert('Ei!Você não preencheu todos os campos!');
    }
}

function limparFormulario() {
    document.getElementById('Planta').value = '';
    document.getElementById('Espécie').value = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaDados');
    lista.innerHTML = '';

    dados.forEach((dado, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${dado.Planta}</strong> - ${dado.Espécie}
                        <button onclick="editarDado(${index})">Editar</button>
                        <button onclick="deletarDado(${index})">Deletar</button>`;
        lista.appendChild(li);
    });
}

function editarDado(index) {
    const dado = dados[index];
    document.getElementById('Planta').value = dado.Planta;
    document.getElementById('Espécie').value = dado.Espécie;

    dados.splice(index, 1);
    atualizarLista();
}

function deletarDado(index) {
    dados.splice(index, 1);
    atualizarLista();
}
