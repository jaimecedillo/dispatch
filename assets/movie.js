// movie postcard function
// variables for the html

const randomMovie = {};
var titleInput = document.getElementById("title");
var searchButton = document.getElementById("search");
// var yearInput = document.getElementById("year");
// varible for the img for html
// var image = document.getElementById("img");
var imgPoster = document.getElementById("img");
// search button
searchButton.addEventListener("click", getMoviePoster);

function getMoviePoster() {
  var movieTitle = titleInput.value.trim();
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
      const array = json.Search.slice(0, 10);
      // console.log(array)
      for (let i = 0; i < array.length; i++) {
        const movie = array[i];
        console.log(movie);

        const img = document.createElement("img");
        // console.log(array)
        // console.log(movie.Poster)
        img.setAttribute("src", movie.Poster);
        document.querySelector("#img").appendChild(img);
      }
      // build a 4 loop  and  then array slice method.
    });
}
