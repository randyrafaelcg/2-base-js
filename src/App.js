//alert('Presiona OK si estas liste para empezar con javascript');
const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const genero=document.querySelector("#genero-input");
const idioma=document.querySelector("#idioma-input");

var today = new Date();
var hora=today.getHours();


  form.addEventListener("submit", (event) => {
    if(idioma.value=="Ingles")
      if(hora>=12 && hora <=18)
      {
        if(edad.value>30 && genero.value=="Masculino")
          alert("Good afternoon Mr. " + nombre.value);
        else if(edad.value>30 && genero.value=="Femenino")
          alert("Good afternoon Mrs. " + nombre.value);
          else if(genero.value=="Otro" && edad.value>30)
          alert("Good afternoon Mx." + nombre.value);
          else
          alert("Good afternoon " + nombre.value);
      }
      else if(hora>18 && hora <=23)
      {
        if(edad.value>30 && genero.value=="Masculino")
          alert("Good evening Mr. " + nombre.value);
        else if(edad.value>30 && genero.value=="Femenino")
          alert("Good evening Mrs. " + nombre.value);
          else if(genero.value=="Otro" && edad.value>30)
          alert("Good evening Mx.. " + nombre.value);
          else
          alert("Good evening " + nombre.value);
      }
      else
      {
        if(edad.value>30 && genero.value=="Masculino")
          alert("Good morning Mr. " + nombre.value);
        else if(edad.value>30 && genero.value=="Femenino")
          alert("Good morning Mrs. " + nombre.value);
          else if(genero.value=="Otro" && edad.value>30)
          alert("Good morning Mx." + nombre.value);
          else
          alert("Good morning " + nombre.value);
      }
    else
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






