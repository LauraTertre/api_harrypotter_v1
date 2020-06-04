/**
 * 
 */

var formElt = document.querySelector("form");
var infoElt = document.getElementById("information")

/**
 * Check what is the value in the form
 * @param formElt form in the html
 * @param nameForSearch check what value is check in form
 * @return {string} search = URI for function AjaxGet
 */

formElt.addEventListener("submit", function(e) {
    e.preventDefault();
    if (document.getElementById('role').selected==true) {
        var nameForSearch = formElt.elements.search.value;
        search = "&role="+nameForSearch;
    }
    else if (document.getElementById('house').selected==true) {
        var nameForSearch = formElt.elements.search.value;
        search = "&house="+nameForSearch;
    }
    else if (document.getElementById('species').selected==true) {
        var nameForSearch = formElt.elements.search.value;
        search = "&species="+nameForSearch;
    }
    else {
        console.log("Retente autre chose...");
    }

/**
 * Request and create information in html
 * @param {url} HarryPotterPublicApi 
 * @param {string} api_key for using public api
 * @param {string} search using for request
 * @return {elements for dom} Informations to show in HTML
 */

    var api_key = "?key=$2a$10$nfs0VuJRTF6UzA7jrPtpvOJt7CSAH6OB975kD24SpBlOioh/WHv/y";

    ajaxGet("https://www.potterapi.com/v1/characters/" + api_key + search, function (reponse) {
        // Transformation de la réponse en un objet JSON
        var character = JSON.parse(reponse);
        character.forEach(function (character) {
            var nomElt = document.createElement("h2");
            nomElt.textContent = character.name;
            var roleElt = document.createElement("div");
            roleElt.textContent = character.role;
            var houseElt = document.createElement("div");
            houseElt.textContent = character.house;
            var speciesElt = document.createElement("div");
            speciesElt.textContent = character.species;

            //Affichage des informations
            infoElt.appendChild(nomElt);
            infoElt.appendChild(roleElt);
            infoElt.appendChild(houseElt);
            infoElt.appendChild(speciesElt);
    
        })
    });
});