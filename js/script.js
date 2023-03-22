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
    //document.querySelector("#mostrar-filme").innerhtml="";
    //document.querySelector("#mostrar-filme").style.display="none";
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

let detalhesFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
        console.log((resp));
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Category,
            resp.Poster,
            resp.Director,
            resp.Actors,
            resp.Classification,
            resp.Assessment,
            resp.Synopsis,
        )
        console.log(filme);
        //document.querySelector("#mostrar-filme").appendChild(filme.getBtnDetalhes());
        //document.querySelector("#lista-filmes").style.display="none";
        //document.querySelector("#mostrar-filme").style.display="flex";
    });
}
