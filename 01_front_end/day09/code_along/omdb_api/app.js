function getMovieDetails() {
  const title = document.getElementById("movieName").value;
  const baseURL = "http://www.omdbapi.com/?apikey=";
  const apikey = "update your api";
  let queryURL = `${baseURL}${apikey}&t=${title}`;
  console.log(queryURL);

  //Create XML HTTP Request Object
  const req = new XMLHttpRequest();

  //Open XML HTTP request Object
  req.open("GET", queryURL);

  //Send the request to the server
  req.send();

  //A callback function to be executed when response is ready
  req.onload = function () {
    let response = JSON.parse(req.responseText);
    console.log(response);
    let responseHTML = `<img src=${response.Poster} alt=${response.Title}></img>
                        <h2>Title: ${response.Title}</h2>
                        <h3>Year: ${response.Year}</h3>
                        <h3>Rating: ${response.imdbRating}</h3>`;
    document.getElementById("container").innerHTML = responseHTML;
  };
}
