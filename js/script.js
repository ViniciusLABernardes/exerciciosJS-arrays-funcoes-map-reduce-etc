let lista = document.getElementById('lista');

let nomes = ["João", "Ana", "Maria"];


function carregarNomesNaTela(){
    lista.innerHTML = '';

    nomes.forEach((nome) => {
        
        let itemLista = document.createElement('li');

        itemLista.textContent = nome;

        lista.appendChild(itemLista);
    });
}
carregarNomesNaTela();

document.getElementById('addBtn').addEventListener('click', ()=> {
    let inputNome = document.getElementById('idNome').value;
    
    nomes.push(inputNome);
    carregarNomesNaTela();
});

document.getElementById('ordBtn').addEventListener('click',()=>{
    nomes.sort();
    carregarNomesNaTela();
});
document.getElementById('revBtn').addEventListener('click',()=>{
    nomes.reverse();
    carregarNomesNaTela();
});