/*document.getElementById("email2").addEventListener("input", function () {
  if (emaild) {
    document.getElementById("error").innerHTML =
      "Les deux adresses email sont différentes";
    console.log("Adresses email donné différente -> Modification de l'erreur");
    var error = "Votre inscription a échoué.";
    document.getElementById("inscription").innerHTML = error;
  } else {
    emailError = "";
  }
});

document.getElementById("inscription").addEventListener("submit", function (e) {
  e.preventDefault();

  var error;
  var emailError = document.getElementById("error").innerHTML;
  var emaild =
    document.getElementById("email2").value !=
    document.getElementById("email").value;

  var inputs = document
    .getElementById("inscription")
    .getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      error = "Veuillez remplir le champ correctement";
      console.log("Saisie incorrect");
    }
  }

  if (error) {
    e.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } else if ((document.getElementById("inscription").innerHTML = error)) {
    break;
  } else {
    alert("Vous vous êtes bien inscrit.");
    console.log("L'utilsateur a validé son inscription");
  }
});
*/

//Activer l'annulation pour l'émail si il n'est pas le même -
//Essayer de creer un autre pprojet soit un autre file pour ensuite demander une action pour se diriger à cet endroit " h=HTML"
//Trouver Moyen de rendre l'action de s'inscrire unique -> Tuto Ytb
// Créer un bouton "Connexion" -> Lieu ou se connecter ( pour le moment, envisager seulement le déplacement vers le lieu = Demande 2)

//bouton ytb:<a class="button" href="https://www.youtube.com" target="_blank"><strong>YOUTUBE</strong></a><br>

//<a class="button2" href="https://twitch.tv" target="_blank"><strong>TWITCH</strong></a><br></br>
