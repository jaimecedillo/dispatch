let heroName = [
  "Spider-Man",
  "thor",
  "captain america",
  "Black Panther",
  "doctor strange",
  "Ant-Man (Scott Lang)",
  "Iron man",
  "Hulk",
  "Deadpool",
  "wolverine",
  "Captain Marvel (Carol Danvers)",
  "Daredevil",
];

// ADDING CHARCTER NAMES TO BACK OF CARDS

// function to fetch marvel characters img, name, bio url and comics url
const marvel = {
  render: (hero) => {
    let urlApi =
      "https://gateway.marvel.com:/v1/public/characters?name=" +
      hero +
      "&ts=1&apikey=cc25a8d815b08a07d1f66b16e2079cff&hash=9e25f1c95eb74bd5d42f42216b82ded3";
    fetch(urlApi)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        for (var i = 0; i < 1; ++i) {
          let name = json.data.results[0].name;
          let heroImg = `<img class="logo" src="${json.data.results[0].thumbnail.path}.${json.data.results[0].thumbnail.extension}" alt="${name}"style="width:296px;height:396px;">`;
          let heroBio = json.data.results[0].urls[1].url;
          let heroComic = json.data.results[0].urls[0].url;

          // FLIP CARD
          let flipCard = document.createElement("div");
          flipCard.setAttribute("id", "hero-" + (i + 1));
          flipCard.setAttribute("class", "flip-card");

          // FLIP CARD INNER
          let flipCardInner = document.createElement("div");
          flipCardInner.setAttribute("class", "flip-card-inner");

          // FLIP CARD INNER FRONT
          let flipCardInnerFront = document.createElement("div");
          flipCardInnerFront.setAttribute("class", "flip-card-front");
          flipCardInnerFront.innerHTML = heroImg;

          // FLIP CARD BACK
          let flipCardBack = document.createElement("div");
          flipCardBack.setAttribute(
            "class",
            "flip-card-back has-background-black"
          );

          let flipCardBackName = document.createElement("h1");
          flipCardBackName.setAttribute(
            "class",
            "Name-" +
              (i + 1) +
              "card-header-title level-item is-size-3 has-text-weight-semibold has-text-white has-background-danger-dark"
          );
          flipCardBackName.innerHTML = name;

          // CARD CONTENT
          let cardContent = document.createElement("div");
          cardContent.setAttribute("class", "card-content");

          // BUTTONS INSIDE CARD
          // BIO
          let bioLink = document.createElement("a");
          bioLink.setAttribute("href", heroBio);
          let bio = document.createElement("button");
          bio.setAttribute(
            "class",
            "btn-" +
              (i + 1) +
              "posters button content is-small level-item is-warning  is-rounded"
          );
          bio.innerHTML = name + "'s Bio";

          // COMICS
          let comicsLink = document.createElement("a");
          comicsLink.setAttribute("href", heroComic);
          let comics = document.createElement("button");
          comics.setAttribute(
            "class",
            "btn-" +
              (i + 1) +
              "posters button content is-small level-item is-warning is-rounded"
          );
          comics.innerHTML = name + "'s Comics";

          // MOVIE LINKS
          let movie = document.createElement("button");
          movie.setAttribute(
            "class",
            "posters button content is-small is-warning is-rounded"
          );
          movie.setAttribute("value", name);
          movie.setAttribute("id", "posters");
          movie.setAttribute("onClick", "getMoviePoster(this.innerHTML)");
          movie.innerHTML = name;

          // APPENDING THEM TOGETHER
          bioLink.appendChild(bio);
          cardContent.appendChild(bioLink);
          comicsLink.appendChild(comics);
          cardContent.appendChild(comicsLink);
          cardContent.appendChild(movie);
          flipCardBack.appendChild(flipCardBackName);
          flipCardBack.appendChild(cardContent);
          flipCardInner.appendChild(flipCardInnerFront);
          flipCardInner.appendChild(flipCardBack);
          flipCard.appendChild(flipCardInner);
          document.querySelector("#character-cards").appendChild(flipCard);
        }
      });
  },
};

//

//

//

//

function getMoviePoster(name) {
  var movieTitle = name;
  console.log("sdfghjkl;");
  console.log(movieTitle);
  document.querySelector("#character-cards").innerHTML = "";

  fetch("http://www.omdbapi.com/?s=" + movieTitle + "&apikey=8f0e2144")
    .then((movieRes) => movieRes.json())
    .then((movieRes) => {
      let array = movieRes.Search.slice(0, 6);

      for (let k = 0; k < array.length; k++) {
        let movie = array[k];
        console.log(movie);
        let movieTil = movie.Title;
        let movieYear = movie.Year;
        let posterUrl = movie.Poster;

        // FLIP CARD
        let flipCard = document.createElement("div");
        flipCard.setAttribute("id", "hero-" + (k + 1));
        flipCard.setAttribute("class", "flip-card");

        // FLIP CARD INNER
        let flipCardInner = document.createElement("div");
        flipCardInner.setAttribute("class", "flip-card-inner");

        // FLIP CARD INNER FRONT
        let flipCardInnerFront = document.createElement("div");
        flipCardInnerFront.setAttribute("class", "flip-card-front");
        flipCardInnerFront.innerHTML =
          "<img src=" +
          posterUrl +
          'alt="' +
          movieTil +
          '" style="width:296px;height:396px;"></img>';

        // FLIP CARD BACK
        let flipCardBack = document.createElement("div");
        flipCardBack.setAttribute(
          "class",
          "flip-card-back has-background-black"
        );

        let flipCardBackName = document.createElement("h1");
        flipCardBackName.setAttribute(
          "class",
          "Name-" +
            (k + 1) +
            "card-header-title level-item is-size-3 has-text-weight-semibold has-text-white has-background-danger-dark"
        );
        flipCardBackName.innerHTML = movieTil + "<br>" + movieYear;

        // CARD CONTENT
        let cardContent = document.createElement("div");
        cardContent.setAttribute("class", "card-content");

        // BUTTON INSIDE CARD
        let button = document.createElement("div");
        button.setAttribute(
          "class",
          "btn-return button content is-warning is-rounded"
        );
        button.setAttribute("onClick", "window.location.reload()");
        button.innerHTML = "Return to Character Selection";

        cardContent.appendChild(button);
        flipCardBack.appendChild(flipCardBackName);
        flipCardBack.appendChild(cardContent);
        flipCardInner.appendChild(flipCardInnerFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        document.querySelector("#character-cards").appendChild(flipCard);
      }
    });
}

heroName.forEach(function (item) {
  marvel.render(item);
});
