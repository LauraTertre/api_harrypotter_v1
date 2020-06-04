new Vue({
    el: '#app',
    data: {
        picked: '',
    },
});


var formList = document.querySelector("form .list")
console.log(formList);

var api_key = "?key=$2a$10$nfs0VuJRTF6UzA7jrPtpvOJt7CSAH6OB975kD24SpBlOioh/WHv/y";

ajaxGet("https://www.potterapi.com/v1/houses/" + api_key, function (reponse) {
    // Transformation de la réponse en un objet JSON
    var character = JSON.parse(reponse);
    var selectElt = document.createElement("select");
    selectElt.appendChild.innerHTML = `v-if="picked === 'role'"`;
    formList.appendChild(selectElt);

    character.forEach(function (character) {
        var houseElt = document.createElement("option");
        houseElt.textContent = character.name;
        houseElt.value = character.name;
            //Affichage des informations
            selectElt.appendChild(houseElt);
        })
});


// var infoElt = document.getElementById("information")
// var formElt = document.querySelector("form");
// formElt.addEventListener("submit", function(e) {
//     e.preventDefault();
//     var nomCharacter = formElt.elements.character.value;
//     var nomRole = formElt.elements.role.value;
//     var search = "&role="+nomRole;
//     console.log(search);
    
//     var api_key = "?key=$2a$10$nfs0VuJRTF6UzA7jrPtpvOJt7CSAH6OB975kD24SpBlOioh/WHv/y";

//     ajaxGet("https://www.potterapi.com/v1/characters/" + api_key + search, function (reponse) {
//         // Transformation de la réponse en un objet JSON
//         var character = JSON.parse(reponse);
//         character.forEach(function (character) {
//             var nomElt = document.createElement("h2");
//             nomElt.textContent = character.name;
//             var roleElt = document.createElement("div");
//             roleElt.textContent = character.role;
//             var houseElt = document.createElement("div");
//             houseElt.textContent = character.house;
            
//                 //Affichage des informations
//                 infoElt.appendChild(nomElt);
//                 infoElt.appendChild(roleElt);
//                 infoElt.appendChild(houseElt);
    
//         })
//     });
// });