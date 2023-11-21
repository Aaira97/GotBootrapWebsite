fetch("https://thronesapi.com/api/v2/Characters") //Devuelve una "promesa()"
  .then((response) => response.json()) //se resuelve la promesa y me devuelve el objeto response y me devuelve la "promesa" en json
  .then( json => {//añadir los datos a la web
    const image = document.createElement("img")
    image.setAttribute("src", json[0].imageUrl)

    const cont =document.getElementsByClassName("container")[0]
    cont.appendChild(image)
  }) //me devuelve el objeto en json
  .catch((error) => console.log(error));
  