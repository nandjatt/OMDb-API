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
let type = document.getElementById("type");
let year = document.getElementById("year");

async function fetchData() {
    try{
        
        let response = await fetch('http://mardby.se/AJK15G/simple_json.php');
        let data = await response.json(); // response.json() är JSON parse()
        
        console.log(this.id);
        let parameter = this.id;
        let title = getTitle(parameter);

        container.innerHTML = getHTMLContent(title, parameter, data);

        // handlePostTitleEvents();
        handlePostTitleEventsjQuery();
    } catch(message) {
        throw new Error(message);
    }
}