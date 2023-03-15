let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = async () => {
    console.log(0);
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s="+ inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme=new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            })
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        })
    }
}

setBtnDetalhes=() =>{
    this.BtnDetalhes = document.createElement("button");
    this.BtnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.BtnDetalhes.setAttribute("id", this.id);
    this.BtnDetalhes.setAttribute("class","btnDetalhesFilme");
}

getBtnDetalhes= () =>{
    return this.BtnDetalhes;
}

let detalhesFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
    });
}

