//alert('Presiona OK si estas liste para empezar con javascript');
const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");

form.addEventListener("submit", (event) => {
  alert("Hola " + nombre.value + " "+ edad.value);
});



