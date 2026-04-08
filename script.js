function criarPersonagem(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const classe = document.querySelector("#classe").value;
    const ability = document.querySelector('#ability').value;
    const imagem = document.querySelector('#imagem').value

    const card = document.querySelector('#card');

    const novoCard = document.createElement('div');
    novoCard.classList.add('personagem');

    novoCard.innerHTML = `
        <img class="imagem" src="${imagem}">
        <div class="info">
            <span class="nome"><strong>Nome:</strong> ${name}</span>
            <span class="classe"><strong>Classe:</strong> ${classe}</span>
            <span class="ability"><strong>Habilidade:</strong> ${ability}</span>
            <button type="button" class="alterar">Alterar</button>
            <button type="button" class="remover">Remover</button>
        </div>
    `;

    const botaoAlterar = novoCard.querySelector('.alterar');

    botaoAlterar.addEventListener('click', () => {
        const nomeEl = novoCard.querySelector('.nome');
        const classeEl = novoCard.querySelector('.classe');
        const abilityEl = novoCard.querySelector('.ability');
        const imageEl = novoCard.querySelector('.imagem')

        const novoNome = prompt('Novo nome:');
        const novaClasse = prompt('Nova classe:');
        const novaAbility = prompt('Nova habilidade:');
        const novaImage = prompt('Nova imagem:');

        if (novoNome !== null) {
            nomeEl.innerHTML = `<strong>Nome:</strong> ${novoNome}`;
        }

        if (novaClasse !== null) {
            classeEl.innerHTML = `<strong>Classe:</strong> ${novaClasse}`;
        }

        if (novaAbility !== null) {
            abilityEl.innerHTML = `<strong>Habilidade:</strong> ${novaAbility}`;
        }
        if(novaImage !== null){

            console.log(imageEl);
            imageEl.src = novaImage;
            console.log(imageEl);
        }

            console.log(novaImage);

    });
    

    const botaoRemover = novoCard.querySelector('.remover');

    botaoRemover.addEventListener('click', () => {
        novoCard.remove();
    });

    card.appendChild(novoCard);

    document.querySelector('#name').value = '';
    document.querySelector('#classe').value = '';
    document.querySelector('#ability').value = '';
    document.querySelector('#imagem').value = '';

    if (!name || !classe || !ability || !imagem) {
        alert("Preencha todos os campos, aventureiro.");
        return;
    }

}