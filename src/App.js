//alert('Presiona OK si estas liste para empezar con javascript');
const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const genero=document.querySelector("#genero-input");


  form.addEventListener("submit", (event) => {
    if(edad.value>30 && genero.value=="Masculino")
      alert("Hola Señor " + nombre.value);
    else if(edad.value>30 && genero.value=="Femenino")
      alert("Hola señora " + nombre.value);
      else if(genero.value=="Otro" && edad.value>30)
      alert("Sea Ud bienvenide " + nombre.value);
      else
      alert("Hola " + nombre.value);
  });






