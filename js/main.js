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

let url = 'http://www.omdbapi.com/?apikey=df23ef2&s=star trek';
let typeElement = document.getElementById("type");
let yearElement = document.getElementById("year");
let listItemsElement = document.getElementById("listItems");

async function fetchData() {
    try {
        let response = await fetch(url + this.value);


        let data = await response.json();
        console.log(this.value);
        console.log(data);

        let = listItemsHTML = '';
        for (let word of data) {
            listItemsHTML += <li>${word}</li>;
        }

        
        listItems.innerHTML += listItemsHTML;
    } catch (message) {
        throw new Error(message);
    }
}