const form = document.getElementById('form-contatos');
const nomeContato = [];
const numeroTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('telefone');
    
    let nomeContatoAlreadyExists = nomeContato.includes(inputNomeContato.value);
    let numeroTelefoneAlreadyExists = numeroTelefone.includes(inputNumeroTelefone.value);

    if (nomeContatoAlreadyExists && numeroTelefoneAlreadyExists) {
        alert(`O contato ${inputNomeContato.value} e o telefone ${inputNumeroTelefone.value} já foram inseridos`);
    } else if (nomeContatoAlreadyExists) {
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else if (numeroTelefoneAlreadyExists) {
        alert(`O telefone ${inputNumeroTelefone.value} já foi inserido`);
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroTelefone.push(inputNumeroTelefone.value);
      
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
