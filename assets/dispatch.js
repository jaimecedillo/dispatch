const marvel = {
  render: () => {
    const urlApi =
      "https://gateway.marvel.com:/v1/public/characters?ts=1&apikey=cc25a8d815b08a07d1f66b16e2079cff&hash=9e25f1c95eb74bd5d42f42216b82ded3";
    const container = document.querySelector("#marvel-row");
    let contentHTML = "";

    fetch(urlApi)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "RES.JSON");
      });
  },
};
marvel.render();

// 1358e3065848c5522a414c3abe17171de8965532bcc25a8d815b08a07d1f66b16e2079cff
console.log(marvel + "CODE");

function displayCharacterOptions() {
  let charNum = 20; //! THIS CAN BE THE NUMBER FOUND IN THE API
  for (let i = 0; i < charNum; ++i) {
    let charName = "Name Here"; //! THIS IS THE CHARACTER NAME FROM API
    let newChar = document.createElement("label");
    newChar.setAttribute("for", "cardoption");
    let inputStuff = document.createElement("input");
    inputStuff.setAttribute("type", "checkbox");

    newChar.innerHTML = charName;
    newChar.appendChild(inputStuff);
    document.querySelector(".scrollmenu").appendChild(newChar);
  }
}

displayCharacterOptions();


const randomMovie = {





}

// movie postcard function
// variables for the html
var titleInput = document.getElementById("title")
var searchButton = document.getElementById("search")
var yearInput = document.getElementById("year")
// varible for the img for html
var image = document.getElementById('img')

// search button
searchButton.addEventListener("click", function () {
  var movieTitle = titleInput.value.trim()
  var year = yearInput.value.trim()
// api key and the the search box functions
  fetch("http://www.omdbapi.com/?s=" + movieTitle + "&y=" + year + "&apikey=8f0e2144")
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      var link = json.Search[0].Poster
      image.setAttribute("src", link)


    });
});




