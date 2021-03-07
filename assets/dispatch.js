
// "https://gateway.marvel.com:/v1/public/characters?name=spider-man&ts=1&apikey=cc25a8d815b08a07d1f66b16e2079cff&hash=9e25f1c95eb74bd5d42f42216b82ded3";

let heroName = ["Spider-Man", "thor", 'captain america', 'Black Panther', 'doctor strange', 'Ant-Man (Scott Lang)', 'Iron man', 'Hulk', 'Deadpool', 'Captain Marvel (Carol Danvers)', 'wolverine', 'Daredevil'];


const marvel = {
  render: (hero) => {

    let urlApi = "https://gateway.marvel.com:/v1/public/characters?name=" + hero +
      "&ts=1&apikey=cc25a8d815b08a07d1f66b16e2079cff&hash=9e25f1c95eb74bd5d42f42216b82ded3";
      
    fetch(urlApi)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json)
        for (var i = 0; i < json.data.results.length; i++) {
          let name = json.data.results[i].name
          let heroImg = `<img class="logo" src="${json.data.results[i].thumbnail.path}.${json.data.results[i].thumbnail.extension}" alt="${name}"style="width:298px;height:298px;">`
          let herobio = json.data.results[i].description
          $('main').append(`
<div class="flip-card" id="hero-${i + 1}">
      <div class="flip-card-inner">
        <div class="flip-card-front">
         ${heroImg}
        </div>
        <div class="flip-card-back">
          <h1 class="Name-${i + 1}">${name}</h1>
          <p>${herobio}</p>
          <button class="button is-info is-outlined is-rounded">Movies</button>
        </div>
      </div>
    </div>
`)
        }
      });
  },
};

heroName.forEach(function (item) {

  marvel.render(item);

})



console.log(marvel + "CODE");

function displayCharacterOptions() {
  fetch(urlApi)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let charNum = 20; //! THIS CAN BE THE NUMBER FOUND IN THE API
      for (let i = 0; i < charNum; ++i) {
        // let charName = data.data.results[i].name; //! THIS IS THE CHARACTER NAME FROM API
        let newChar = document.createElement("label");
        newChar.setAttribute("for", "cardoption");
        let inputStuff = document.createElement("input");
        inputStuff.setAttribute("type", "checkbox");

        newChar.innerHTML = charName;
        newChar.appendChild(inputStuff);
        document.querySelector(".scrollmenu").appendChild(newChar);
      }
    });
}

displayCharacterOptions();

const randomMovie = {};

// movie postcard function
// variables for the html
var titleInput = document.getElementById("title");
var searchButton = document.getElementById("search");
var yearInput = document.getElementById("year");
// varible for the img for html
var image = document.getElementById("img");

// search button
searchButton.addEventListener("click", function () {
  var movieTitle = titleInput.value.trim();
  var year = yearInput.value.trim();
  // api key and the the search box functions
  fetch(
    "http://www.omdbapi.com/?s=" +
    movieTitle +
    "&y=" +
    year +
    "&apikey=8f0e2144"
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      var link = json.Search[0].Poster;
      image.setAttribute("src", link);
    });
});
