//Lista inicial de estudantes armazenadas em um Array
const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniela Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinicius"
];

//Obtendo as Referências dos elementos do HTML pelo identificador
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente(){
    //Limpar o conteudo atual da lista para evitar duplicações indesejadas
    elementoLista.innerHTML = "";

    // Percorre cada posição do Array usando o laço For 
    for(let i = 0;  i < listaDeEstudantes.length; i++){

    //Cria um elemento <li> novo em memória
    const itemLi = document.createElement("li");

    //<li class = "item-nome"></li>
    itemLi.className = "item-nome"; 

    //Define o conteudo interno do item com o nome e sua respectiva ordem visual
    itemLi.innerHTML = ` <span>${listaDeEstudantes[i]}</span>
                         <span class = "posicao-tag">${i + 1}</span>
                        `;
    
    //Anexa o item criado no dentro da tag <ul>  da pagina
    elementoLista.appendChild(itemLi);
    }

    //Atualiza a barra de status com o total de registros lidos pelo laço
    elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados`;

    elementoContador.style.color = "#16a34a";

    console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length}`);
}

function limparLista(){
    elementoLista.innerHTML = "";
    elementoContador.innerText = `Lista limpa pelo usuario. Nenhum nome na tela`; 
    elementoContador.style.color = "#475569";
    console.log("Tela limpa");


}

//Dispara a exibição automaticamente assim que o script for carregado
exibirListaAutomaticamente();

let nomeExiste = false;

for (let i = 0; i < listaDeEstudantes.length; i++) {
    if (nomeDigitado.toLowerCase() === listaDeEstudantes[i].toLowerCase()) {
        nomeExiste = true;
    }
}

if (nomeExiste == true) {
    elementoContador.innerHTML = "Erro: nome já cadastrado!";
    elementoContador.style.color = "#dc2626";
} else {
    listaDeEstudantes.push(nomeDigitado);
    elementoContador.innerHTML = "Nome cadastrado com sucesso!";
    elementoContador.style.color = "#16a34a";
    exibirListaAutomaticamente();
}

function cadastrarNome() {
    const addNome = document.getElementById("add-nomes").value;
    let nomeExiste = false;

    for (let i = 0; i < listaDeEstudantes.length; i++) {
        if (addNome.toLowerCase() === listaDeEstudantes[i].toLowerCase()) {
            nomeExiste = true;
        }
    }

    if (nomeExiste == true) {
        elementoContador.innerHTML = "Erro: esse nome já está cadastrado!";
        elementoContador.style.color = "#dc2626";
    } else {
        listaDeEstudantes.push(addNome);

        elementoContador.innerHTML = "Nome cadastrado com sucesso!";
        elementoContador.style.color = "#16a34a";

        exibirListaAutomaticamente();
    }
}
