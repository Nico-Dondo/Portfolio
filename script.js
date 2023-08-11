//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}


  document.getElementById("verProyectoButton").addEventListener("click", function() {
    var url = '../porfolio-completo-main/img/loom.mp4';
    var nuevaPestana = window.open(url, '_blank');
    nuevaPestana.focus();
  });
  function abrirEnlace() {
    var url = '../porfolio-completo-main/img/Video/loom.mp4';
    window.open(url, '_blank');
  }
  function abrirEnlace(url) {
    window.open(url, '_blank');
  }
  
  
  function enviarCorreo() {
    const destinatario = "nicodondo1980@gmail.com.com"; // Reemplaza con tu dirección de correo electrónico
    const asunto = "Mensaje de un visitante del sitio";
    const cuerpo = "Este es el cuerpo del mensaje.";

    const mailtoUrl = `mailto:${encodeURIComponent(destinatario)}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoUrl;
  }



document.getElementById("miBoton").addEventListener("click", enviarFormulario);

function scrollToDescripcion() {
  const descripcionSection = document.getElementById('descripcion');
  descripcionSection.scrollIntoView({ behavior: 'smooth' });
}
function redirectToCertification(certificacion) {
  switch (certificacion) {
      case 'certificacion1':
          window.location.href = "https://www.coderhouse.com/certificados/64aef6ae10d18f0002b41b3f";
          break;
      case 'certificacion2':
          window.location.href = "URL_CERTIFICACION_2";
          break;
      // Agrega más casos para las otras certificaciones

      default:
          break;
  }
}

  
  
  