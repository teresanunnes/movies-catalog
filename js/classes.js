class Ator {
    constructor (id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Diretor {
    constructor (id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Filme {
    constructor (id, titulo, ano, genero, cartaz, direcao, atores, classificacao, avaliacao, sinopse, estreia, btnDetalhes){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.atores = atores;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.sinopse = sinopse;
        this.estreia = estreia;
        this.btnDetalhes = null;
    }

    getCard = async () => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        const hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        hCardTitle.innerHTML = this.titulo;

        const divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display: flex; justify-content: space-around;");

        const divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow: 1;");
        divGenero.innerHTML = this.genero;

        const divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow: 1;");
        divAnoProducao.innerHTML = this.ano;

        const divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow: 1;");
        divClassificacao.innerHTML = this.classificacao;

        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);

        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes()
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }

    getDetalhesFilme = () => {
        const container = document.createElement("div");
        container.setAttribute("style", "max-width: 540px");
        container.setAttribute("class", "card mb-3");

        const row = document.createElement("div");
        row.setAttribute("class", "row g-0");

        const imgContent = document.createElement("div");
        imgContent.setAttribute("class", "col-md-4");

        const img = document.createElement("img");
        img.setAttribute("class", "img-fluid rounded-start");
        img.setAttribute("src", this.cartaz);

        const cardContent = document.createElement("div");
        cardContent.setAttribute("class", "col-md-8");

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.innerHTML = this.titulo;

        const cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = this.sinopse;

        const cardRelease = document.createElement("p");
        cardRelease.setAttribute("class", "card-text");

        const cardReleaseText = document.createElement("small");
        cardReleaseText.setAttribute("class", "text-muted");
        cardReleaseText.innerHTML = this.estreia;

        const contentActions = document.createElement("div");
        contentActions.setAttribute("class", "row g-1");

        const btnSave = document.createElement("button");
        btnSave.setAttribute('id', 'btnSave');
        btnSave.innerHTML = "Salvar";

        const btnClose = document.createElement('button');
        btnClose.setAttribute('id', 'btnClose');
        btnClose.innerHTML = "Fechar";

        imgContent.appendChild(img);
        cardRelease.appendChild(cardReleaseText);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardRelease);

        contentActions.appendChild(btnSave);
        contentActions.appendChild(btnClose);

        cardBody.appendChild(contentActions);
        cardContent.appendChild(cardBody);

        row.appendChild(imgContent);
        row.appendChild(cardContent);

        container.appendChild(row);
        return container;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));

        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
    }

    getBtnDetalhes= () =>{
        return this.btnDetalhes;
    }
}
