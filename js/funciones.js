// Código para el botón "Más información"
const botonInformacion = document.getElementById('boton-informacion');
const informacionComplementaria = document.getElementById('informacion-complementaria');

botonInformacion.addEventListener('click', () => {
  informacionComplementaria.style.display = 'block';
});

// Este es el código para la barra de navegación
const enlacesNavegacion = document.querySelectorAll('nav a');

enlacesNavegacion.forEach((enlace) => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault(); // Elimina la acción por defecto del enlace

    const seccion = document.querySelector(enlace.getAttribute('href'));
    seccion.scrollIntoView({ behavior: 'smooth' }); // Se mueve suavemente a la sección que se elije
  });
});

// Enviar el formulario de contacto por correo electrónico
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	const nombre = document.querySelector('#nombre').value;
	const correo = document.querySelector('#correo').value;
	const mensaje = document.querySelector('#mensaje').value;

	window.location.href = 'mailto:cbarnasthpol@gmail.com?subject=Mensaje de ' + nombre + ' (' + correo + ')&body=' + mensaje;
});

