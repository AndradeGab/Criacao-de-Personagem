function criarPersonagem(event){
    event.preventDefault();

const name = document.querySelector('#name').value;
const classe = document.querySelector("#classe").value;
const ability = document.querySelector('#ability').value;
const imagem = document.querySelector('#imagem').value


//console.log(name);
//console.log(classe);
//console.log(ability);
//console.log(imagem);

const card = document.querySelector('#card');

card.innerHTML += `<span>${name}</span>`
card.innerHTML += `<span>${classe}</span>`
card.innerHTML += `<span>${ability}</span>`
card.innerHTML += `<img src = "${imagem}"></img>`;

 input.value = '';
}