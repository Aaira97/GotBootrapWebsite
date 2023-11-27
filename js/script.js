fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((json) => {
    const cont = document.getElementsByClassName("container")[0];
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row mt-4");

    json.forEach((character) => {
      const colDiv = document.createElement("div");
      colDiv.setAttribute("class", "col-xxl-3 col-lg-4 col-md-6 col-sm-12");

      const cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "card");
      cardDiv.setAttribute("style", "width: 18rem");

      const image = document.createElement("img");
      image.setAttribute("src", character.imageUrl);
      image.setAttribute("class", "card-img-top charac-image");
      image.setAttribute("alt", character.fullName);
      
      

      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.setAttribute("class", "card-body");

      const title = document.createElement("h5");
      title.setAttribute("class", "card-title");
      title.textContent = character.fullName;

      const text = document.createElement("p");
      text.setAttribute("class", "card-text");
      text.textContent = character.title;

      cardBodyDiv.appendChild(title);
      cardBodyDiv.appendChild(text);

      cardDiv.appendChild(image);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
      rowDiv.appendChild(colDiv);
    });

    cont.appendChild(rowDiv);
  })
  .catch((error) => console.error("Error fetching data:", error));
