const 
    inputBuscarFilme = document.querySelector("#input-buscar-filme"),
    btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = async () => {
    if (inputBuscarFilme.value.length > 0) {
        const filmes = new Array();

        fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s="+ inputBuscarFilme.value, { mode:"cors" })
            .then((resp) => resp.json())
            .then((resp) => {
                resp.Search.forEach((item) => {
                    const filme = new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        resp.Genre || 'Indisponível',
                        item.Poster,
                        null,
                        null,
                        item.Rated || 'Indisponível',
                        null,
                        null,
                        null
                    );
                    
                    filmes.push(filme);
                });

                listarFilmes(filmes);
            });
    }

    return false;
}

let listarFilmes = async (filmes) => {
    const listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";

    //document.querySelector("#mostrar-filme").innerhtml="";
    //document.querySelector("#mostrar-filme").style.display="none";
    
    if (filmes.length > 0) {
        filmes.forEach(async (filme) => {
            listaFilmes.appendChild(await filme.getCard());
            
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = async (id) => {
    fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&i="+id)
        .then((resp) => resp.json())
        .then((resp) => {
            const filme = new Filme(
                resp.imdbID,
                resp.Title,
                resp.Year,
                resp.Genre,
                resp.Poster,
                resp.Director,
                resp.Actors,
                resp.Rated,
                resp.imdbRanting,
                resp.Plot,
                resp.Released
            )

            document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
            
            document.querySelector("#btnClose").onclick = () => {
                document.querySelector("#mostrar-filme").innerHTML = "";
                document.querySelector("#lista-filmes").setAttribute("style", "display: flex;");
            }

            document.querySelector("#btnSave").onclick =()=>{
                salvarFilme(filme);
            }
            
            document.querySelector("#lista-filmes").setAttribute("style", "display: none;");
            document.querySelector("#mostrar-filme").setAttribute("style", "display: flex;");
        });
}
