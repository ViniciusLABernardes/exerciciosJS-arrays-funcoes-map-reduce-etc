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

let inputNome = document.getElementById('idNome').value;
document.getElementById('addBtn').addEventListener('click', ()=> {
   
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
document.getElementById('delBtn').addEventListener('click', ()=>{

    let indice = nomes.indexOf(inputNome);
    if(indice != -1){
        nomes.splice(indice,1);
        carregarNomesNaTela();
    }
    
});