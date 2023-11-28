fetch("https://thronesapi.com/api/v2/Continents")
  .then((response) => response.json())
  .then((json) => {
    const contenedor = document.querySelector(".container");
    contenedor.innerHTML = json
      .map(
        (continente) =>
          `
      <div class="card continente-item">
        <img class="card-img-top" src="img/continents/${continente.id}.jpg" alt="${continente.name}">
        <div class="card-body">
          <h4 class="card-title">${continente.name}</h4>
        </div>
      </div>
    `
      )
      .join("");
  })
  .catch((error) => console.log(error));
