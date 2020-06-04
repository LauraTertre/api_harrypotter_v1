var infoElt = document.getElementById("information");

var api_key = "?key=$2a$10$nfs0VuJRTF6UzA7jrPtpvOJt7CSAH6OB975kD24SpBlOioh/WHv/y";


ajaxGet("https://www.potterapi.com/v1/characters/" +api_key, function (reponse) {
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