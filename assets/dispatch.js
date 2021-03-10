
// "https://gateway.marvel.com:/v1/public/characters?name=spider-man&ts=1&apikey=cc25a8d815b08a07d1f66b16e2079cff&hash=9e25f1c95eb74bd5d42f42216b82ded3";
// mavel characters list
let heroName = ["Spider-Man", "thor", 'captain america', 'Black Panther', 'doctor strange', 'Ant-Man (Scott Lang)', 'Iron man', 'Hulk', 'Deadpool', 'wolverine', 'Captain Marvel (Carol Danvers)', 'Daredevil'];

// fucntion to fetch marvel charactes img, name, bio url and comics url
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
          let heroImg = `<img class="logo" src="${json.data.results[i].thumbnail.path}.${json.data.results[i].thumbnail.extension}" alt="${name}"style="width:296px;height:396px;">`
          // let herobio = json.data.results[i].description
          let heroBio = json.data.results[i].urls[1].url
          let heroComic = json.data.results[i].urls[0].url

          $('main').append(`
          <div class="container">
          <div class="flip-card" id="hero-${i + 1}">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                      ${heroImg}
                  </div>
                  <div class="flip-card-back has-background-black">
                      <h1
                          class="Name-${i + 1} card-header-title level-item is-size-3 has-text-weight-semibold has-text-white has-background-danger-dark">
                          ${name}</h1>
                      <div class="card-content">
                          <button class="btn-${i + 1} button content is-small level-item is-warning  is-rounded"
                              onClick="javascript:window.open('${heroBio}', '_blank');">${name}'s
                              Bio</button>
                          <button class="btn-${i + 1} button content is-small level-item is-warning is-rounded"
                              onClick="javascript:window.open('${heroComic}', '_blank');">${name}'s
                              Comics</button>
                          <button id="movieBtn" class="button content is-small is-warning level-item  is-rounded"
                              onClick='${getThisMovieResults}'
                              >Movies</button>
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
      };
  });
          };

          // searchButton.addEventListener("click", getMoviePoster);


function getThisMovieResults() {

  let name = json.data.results[i].name


  var movieTitle = this.name;
  console.log("ISTHISWORKING", movieTitle)
  // var year = yearInput.value.trim();
  // api key and the the search box functions
  fetch(
    "http://www.omdbapi.com/?s=" +
    movieTitle +
    // "&y=" +
    // year +
    "&apikey=8f0e2144"
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);

      // var link = json.Search[0].Poster;
      const array = json.Search.slice(0, 10)
      // console.log(array)
      for (let i = 0; i < array.length; i++) {
        const movie = array[i];
        console.log(movie)

        const img = document.createElement("img")
        // console.log(array)
        // console.log(movie.Poster)
        img.setAttribute("src", movie.Poster)
        document.querySelector("#img").appendChild(img)
      }
      // build a 4 loop  and  then array slice method.

    })

};




