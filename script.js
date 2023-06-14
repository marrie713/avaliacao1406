var ListaNomes = [];
function ListaAlunos() {
    var Alunos = document.querySelector('#colegio');
    if (Alunos.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var card = document.createElement('article');
        var texto = document.createTextNode(Alunos.value);
        li.appendChild(card);
        card.appendChild(texto);
        lista.appendChild(li);
        ListaNomes.push(Alunos.value);
        console.log(ListaNomes);
    }
    Alunos.value = "";
}
