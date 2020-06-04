/*
ajaxGet("https://www.potterapi.com/v1/characters/?key=$2a$10$nfs0VuJRTF6UzA7jrPtpvOJt7CSAH6OB975kD24SpBlOioh/WHv/y", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.name + "</td>" + "<td>" + tableau.role + "</td>" +
            "<td>" + tableau.house + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});
*/

var infoElt = document.getElementById("information")
var formElt = document.querySelector("form");
formElt.addEventListener("submit", function(e) {
    e.preventDefault();
    var nomCharacter = formElt.elements.character.value;
    var nomRole = formElt.elements.role.value;
    var search = "&role="+nomRole;
    console.log(search)
    
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
            
                //Affichage des informations
                infoElt.appendChild(nomElt);
                infoElt.appendChild(roleElt);
                infoElt.appendChild(houseElt);
    
        })
    });
});