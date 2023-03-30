class Actor {
    constructor (id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  class Director {
    constructor (id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  class Movie {
    constructor (
      id,
      title,
      year,
      gender,
      poster,
      director,
      actors,
      classificacao,
      rated,
      plot,
      released,
      btnDetails
    ) {
      this.id = id;
      this.title = title;
      this.year = year;
      this.gender = gender;
      this.poster = poster;
      this.director = director;
      this.actors = actors;
      this.classificacao = classificacao;
      this.rated = rated;
      this.plot = plot;
      this.released = released;
      this.btnDetails = btnDetails;
    }
  
    getCard = async () => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
  
      const thumbMovie = document.createElement("img");
      thumbMovie.setAttribute("class", "card-thumb");
      thumbMovie.setAttribute("src", this.poster);
  
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
  
      const cardTitle = document.createElement("h5");
      cardTitle.setAttribute("class", "card-title");
      cardTitle.innerHTML = this.title;
  
      const cardDetails = document.createElement("div");
      cardDetails.setAttribute(
        "style",
        "display: flex; justify-content: space-around;"
      );
  
      const cardGender = document.createElement("div");
      cardGender.setAttribute("style", "flex-grow: 1;");
      cardGender.innerHTML = this.gender;
  
      const cardRelease = document.createElement("div");
      cardRelease.setAttribute("style", "flex-grow: 1;");
      cardRelease.innerHTML = this.year;
  
      const cardRated = document.createElement("div");
      cardRated.setAttribute("style", "flex-grow: 1;");
      cardRated.innerHTML = this.classificacao;
  
      cardDetails.appendChild(cardGender);
      cardDetails.appendChild(cardRelease);
      cardDetails.appendChild(cardRated);
  
      card.appendChild(thumbMovie);
      card.appendChild(cardBody);
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardDetails);
  
      this.setBtnDetails();
      cardBody.appendChild(this.getBtnDetails());
  
      return card;
    };
  
    getDetailsMovie = () => {
      const container = document.createElement("div");
      container.setAttribute("style", "max-width: 540px");
      container.setAttribute("class", "card mb-3");
      container.setAttribute("id", this.id);
  
      const row = document.createElement("div");
      row.setAttribute("class", "row g-0");
  
      const imgContent = document.createElement("div");
      imgContent.setAttribute("class", "col-md-4");
  
      const img = document.createElement("img");
      img.setAttribute("class", "img-fluid rounded-start");
      img.setAttribute("src", this.poster);
  
      const cardContent = document.createElement("div");
      cardContent.setAttribute("class", "col-md-8");
  
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
  
      const cardTitle = document.createElement("h5");
      cardTitle.setAttribute("class", "card-title");
      cardTitle.innerHTML = this.title;
  
      const cardText = document.createElement("p");
      cardText.setAttribute("class", "card-text");
      cardText.innerHTML = this.plot;
  
      const cardRelease = document.createElement("p");
      cardRelease.setAttribute("class", "card-text");
  
      const cardReleaseText = document.createElement("small");
      cardReleaseText.setAttribute("class", "text-muted");
      cardReleaseText.innerHTML = this.released;
  
      const contentActions = document.createElement("div");
      contentActions.setAttribute("class", "row g-1");
  
      const btnFavorite = document.createElement("button");
      btnFavorite.setAttribute("has-favorited", false);
      btnFavorite.setAttribute("id", "btnFavorite");
      btnFavorite.setAttribute("class", "btn-sm");
      btnFavorite.innerHTML = "Favoritar";
  
      const 
        favoritesString = localStorage.getItem("@MoviesCatalogMaster:favorites"),
        favorites = favoritesString ? JSON.parse(favoritesString) : [];
        
      if (favorites.find((item) => item.id === this.id)) {
        btnFavorite.setAttribute("has-favorited", true);
        btnFavorite.innerHTML = "Desfavoritar";
      }
  
      const btnClose = document.createElement("button");
      btnClose.setAttribute("class", "btn-sm");
      btnClose.setAttribute("id", "btnClose");
      btnClose.innerHTML = "Fechar";
  
      imgContent.appendChild(img);
      cardRelease.appendChild(cardReleaseText);
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardRelease);
  
      contentActions.appendChild(btnFavorite);
      contentActions.appendChild(btnClose);
  
      cardBody.appendChild(contentActions);
      cardContent.appendChild(cardBody);
  
      row.appendChild(imgContent);
      row.appendChild(cardContent);
  
      container.appendChild(row);
      return container;
    };
  
    saveMovie = (movie) => {
      const 
        favoritesString = localStorage.getItem("@MoviesCatalogMaster:favorites"),
        btnFavorite = document.querySelector(`#${movie.id} #btnFavorite`);
  
      let favorites = favoritesString ? JSON.parse(favoritesString) : [];
  
      favorites.push(movie);
      favorites = JSON.stringify(favorites);
  
      btnFavorite.innerHTML = "Desfavoritar";
      btnFavorite.setAttribute("has-favorited", true);
  
      localStorage.setItem("@MoviesCatalogMaster:favorites", favorites);
    };
  
    deleteMovie = (movie) => {
      const 
        favoritesString = localStorage.getItem("@MoviesCatalogMaster:favorites"),
        favorites = favoritesString ? JSON.parse(favoritesString) : [],
        btnFavorite = document.querySelector(`#${movie.id} #btnFavorite`);
  
      btnFavorite.innerHTML = "Favoritar";
      btnFavorite.setAttribute("has-favorited", false);
  
      localStorage.setItem("@MoviesCatalogMaster:favorites", JSON.stringify(favorites.filter((item) => item.id !== movie.id)));
    };
  
    setBtnDetails = () => {
      this.btnDetails = document.createElement("button");
      this.btnDetails.innerHTML = "Detalhes";
  
      this.btnDetails.setAttribute("id", this.id);
      this.btnDetails.setAttribute("class", "btn-details-movie btn-sm mt-2");
    };
  
    getBtnDetails = () => {
      return this.btnDetails;
    };
  }