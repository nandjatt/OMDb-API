/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/

let url = 'http://www.omdbapi.com/?apikey=7d100322&s=star trek';


function getanswer(){
    let url = 'http://www.omdbapi.com/?apikey=7d100322';
    let userInput = document.getElementById("userinput").value;
    let type = document.getElementById("type-selector").value;
    url += '&s=' + userInput;

    if (type.trim() != "Type") {
        url += '&type=' + type;
    } 

    fetch(url)
    .then((response) => {
    if (!response.ok) {
        throw new Error('Something wrong with the request, try again!');
    }
    return response.text();
    })
    .then((data) => {
        var output = JSON.parse(data);
        document.getElementById("answer").innerHTML = '';

    for (var movies of output['Search']) {
        appendMovies(movies)
        console.log(movies)
    }

    })
    .catch((error) => {
        console.log(error);
    })

    function appendMovies(movie) {
    let showMovieResult = document.getElementById("answer");
    let htmlMovies = `<div class="row">
    <div class="col-md-3">
    <img src="${movie.Poster}" class="thumbnail">
    <h2>${movie.Title}</h2>
    <ul class="list-group">
        <li class="list-group-item"><strong>Year released:</strong> ${movie.Year}</li>
        <li class="list-group-item"><strong>Type:</strong> ${movie.Type}</li>
        <li class="list-group-item"><strong>Imdb ID:</strong> ${movie.imdbID}</li>
        <li class="list-group-item"><strong>IMDB page:</strong><a href='https://www.imdb.com/   title/ ${movie.imdbID}/' target='_blank'> Home page</a></li>
        </ul>
    </div>
</div>`
        showMovieResult.innerHTML += htmlMovies;
    }
}