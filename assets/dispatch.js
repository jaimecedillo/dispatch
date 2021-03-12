let heroName = ["Spider-Man", "thor", 'captain america', 'Black Panther', 'doctor strange', 'Ant-Man (Scott Lang)', 'Iron man', 'Hulk', 'Deadpool', 'wolverine', 'Captain Marvel (Carol Danvers)', 'Daredevil'];

// function to fetch marvel characters img, name, bio url and comics url
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
          let heroBio = json.data.results[i].urls[1].url
          let heroComic = json.data.results[i].urls[0].url

          $('#character-cards').append(`
          
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




$('.posters').click(function (event) {
  $("#character-cards").addClass('hide')
  $("#movie-cards").removeClass('hide')
  getMoviePoster($(event.target));
});


function getMoviePoster($target) {

  var movieTitle = $target.val();
  (console.log(movieTitle));

  fetch(
    "http://www.omdbapi.com/?s=" +

    movieTitle +

    "&apikey=8f0e2144"
  )
    .then((movieRes) => movieRes.json())
    .then((movieRes) => {



      let array = movieRes.Search.slice(0, 6)

      for (let i = 0; i < array.length; i++) {
        let movie = array[i];
        console.log(movie)
        let movieTil = movie.Title
        let movieYear = movie.Year
        let posterUrl = movie.Poster


        $('#movie-cards').append(`
          
              <div class="flip-card">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                          <img src=${posterUrl} alt="${movieTil}" style="width:296px;height:396px;">
                      </div>
                      <div class="flip-card-back has-background-black">
                          <h1
                              class="card-header-title level-item is-size-4 has-text-weight-semibold has-text-white has-background-danger-dark">
                              ${movieTil}</h1>
                          <h1
                              class="card-header-title level-item is-size-3 has-text-weight-semibold has-text-white has-background-danger-dark">
                              ${movieYear}</h1>
                          <div class="card-content level-item">
                              <button class="btn-return button content is-warning is-rounded" onClick="window.location.reload();">
                                  Go Back To Characters</button>
                          </div>
                      </div>
                  </div>
              </div>
          
                       
              `)
      }

    });
}