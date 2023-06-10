const form = document.getElementById('form-contato');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário

    const inputNomedoContato = document.getElementById('nome-do-contato');
    const inputNumerodoContato = document.getElementById('numero-do-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomedoContato.value}</td>`;
    linha += `<td>${inputNumerodoContato.value}</td>`;
    linha += `<td>${inputNumerodoContato.value.length === 11 ? 'cadastrado' : 'não cadastrado'}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    inputNomedoContato.value = ''; // Limpa o campo do nome do contato
    inputNumerodoContato.value = ''; // Limpa o campo do número do contato
});