
let ListaNomes: string[] = [];

function ListaAlunos(){
    let Alunos: HTMLInputElement | null = document.querySelector('#colegio')!;

    if(Alunos.value !== ""){
        let lista: HTMLUListElement | null = document.querySelector('ul')!;
        let li: HTMLLIElement = document.createElement('li');
        let card: HTMLElement = document.createElement('article');
        let texto = document.createTextNode(Alunos.value);

        li.appendChild(card);
        card.appendChild(texto);
        lista.appendChild(li);

        ListaNomes.push(Alunos.value);
        console.log(ListaNomes);
    }
    Alunos.value = "";
}