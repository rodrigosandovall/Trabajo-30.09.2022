const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;

//error de vinculacion con la etiqueta con clase name
//cambiando el apuntador a .name
const $n = document.querySelector(".name");
//Etiqueta con id blog, no escite en arvhivo HTML
//cambiando el apuntador a .blog
const $b = document.querySelector(".blog");
//Atiqueta con clase location no existe en archivo HTML
const $l = document.querySelector(".location");

async function displayUser(username) {
  $n.textContent = "cargando...";

  const response = await fetch(`${usersEndpoint}/${username}`);
  //Fata el convertir la peticion a json y mandarla a la variable data
  response
    .json()
    .then((data) => {
      $n.textContent = data.name;
      $b.textContent = data.blog;
      $l.textContent = data.location;
    })
    .catch((error) => {
      console.error(error);
    }); //catch-Response
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  //falta simbolo $ en la variable n
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
