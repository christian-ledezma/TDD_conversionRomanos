import generador from "./generadorRomanos.js";

const cantidad = document.querySelector("#cantidad-romanos");
const form = document.querySelector("#romanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const quantity = Number.parseInt(cantidad.value);
  div.innerHTML = "";

  for(let i=1; i <= quantity; i++){
    div.innerHTML += `<p>${i}  -->  ${generador(i)} </p>`;
  }
  
});
