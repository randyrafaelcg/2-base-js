//alert('Presiona OK si estas liste para empezar con javascript');
const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const genero=document.querySelector("#genero-input");

var today = new Date();
var hora=today.getHours();


  form.addEventListener("submit", (event) => {
    if(hora>=12 && hora <=18)
    {
      if(edad.value>30 && genero.value=="Masculino")
        alert("Buenas tardes Sr. " + nombre.value);
      else if(edad.value>30 && genero.value=="Femenino")
        alert("Buenas tardes Sra. " + nombre.value);
        else if(genero.value=="Otro" && edad.value>30)
        alert("Buenas tardes Sx." + nombre.value);
        else
        alert("Buenas tardes " + nombre.value);
    }
    else if(hora>18 && hora <=23)
    {
      if(edad.value>30 && genero.value=="Masculino")
        alert("Buenas noches Sr. " + nombre.value);
      else if(edad.value>30 && genero.value=="Femenino")
        alert("Buenas noches Sra. " + nombre.value);
        else if(genero.value=="Otro" && edad.value>30)
        alert("Buenas noches Sx. " + nombre.value);
        else
        alert("Buenas noches " + nombre.value);
    }
    else
    {
      if(edad.value>30 && genero.value=="Masculino")
        alert("Buenos dias Sr. " + nombre.value);
      else if(edad.value>30 && genero.value=="Femenino")
        alert("Buenos dias Sra. " + nombre.value);
        else if(genero.value=="Otro" && edad.value>30)
        alert("Buenos dias Sx." + nombre.value);
        else
        alert("Buenos dias " + nombre.value);
    }
  });






