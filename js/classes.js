class Ator{
    constructor(id, nome){
        this.id=id;
        this.nome=nome;
    }
}

class Diretor{
    constructor(id, nome){
        this.id=id;
        this.nome=nome;
    }
}

class Filme{
    constructor(id, titulo, ano, categoria, cartaz, direcao, atores, classificacao, avaliacao, sinopse, btnDetalhes){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.categoria=categoria;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.atores=atores;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.sinopse=sinopse;
        this.btnDetalhes=null;
    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content: space-around;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
        
        return card;
    }
}