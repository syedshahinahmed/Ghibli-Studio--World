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
