// Creating a Constent for Movie Info Div
const app = document.getElementById("root");

// Creating a Constent for Img File
const logo = document.createElement("img");

// Giving Img a source

logo.src = "logo.png";

logo.alt = "Sorry logo not available at this moment";

// Creating a Div

const container = document.createElement("div");

// Giving the Div a class of Container

container.setAttribute("class", "container");

// Appending Logo and Container to the Root Div

app.appendChild(logo);
app.appendChild(container);

// Fetcing the data from GHIBLI API

// Fetcing the data from GHIBLI API
fetch("https://ghibliapi.herokuapp.com/films")
  .then(res => res.json())
  .then(data => {
    data.forEach(movie => {
      console.log(movie.title);
      // console.log(movie.description);

      // Creating a div and setting class to card
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //Created an H1 element and set the text content to the Ghibli film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      //Created an P element and set the text content to the Ghibli film's description

      const p = document.createElement("p");

      const description = movie.description;
      // description.substring(0, 250);

      // p.textContent = `${description}...`;

      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      // Append the cards to the container element

      container.appendChild(card);

      // Appending H1 and P to card and each card will contain an H1 and a P
      card.appendChild(h1);
      card.appendChild(p);
    });
  })
  // Error Function
  .catch(err => {
    // Createing a constent for Error Message
    const errorMessage = document.createElement("h3");

    errorMessage.textContent = "Sorry Something Went Wrong!, It's Not Working";

    // Appending Error Message
    app.appendChild(errorMessage);
  });
