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
let url = 'http://www.omdbapi.com/?apikey=7d100322&s=Star%20trek';
let type = document.getElementById("typeValue");
let year = document.getElementById("yearValue");

async function fetchData() {
    try {
        let response = await fetch('url' + this.value);
        let data = await response.json();
        console.log(this.value);
        console.log(data);

        let = listItemsHTML = '';
        for (let word of data) {
            listItemsHTML += <li>${word}</li>;
        }

        // document.querySelector(tbody tr td:nth-child(${this.value}) ul).innerHTML = listItemsHTML;
        document.getElementById('list-' + this.value).innerHTML = listItemsHTML;
    } catch (message) {
        throw new Error(message);
    }
}