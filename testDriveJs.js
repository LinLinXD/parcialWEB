// Objeto para almacenar el contador de solicitudes por email
const solicitudesPorEmail = {};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const agendarBtn = document.querySelector('.agendar');
    const cancelarBtn = document.querySelector('.cancelar');

    // Expresiones regulares para validación
    const regexs = {
        nombres: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
        apellidos: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefono: /^\d{7,15}$/,
        estrato: /^[1-6]$/,
    };

    // Función de validación
    function validarCampo(campo, regex) {
        return regex.test(campo.value);
    }

    // Manejador de clic en el botón Agendar
    agendarBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Validar todos los campos
        let esValido = true;
        for (const [campo, regex] of Object.entries(regexs)) {
            const elemento = document.getElementById(campo);
            if (!validarCampo(elemento, regex)) {
                alert(`El campo ${campo} no es válido.`);
                esValido = false;
                return;
            }
        }

        // Validar campos adicionales
        if (!document.querySelector('input[name="genero"]:checked')) {
            alert('Por favor, seleccione un género.');
            return;
        }
        if (!document.querySelector('input[name="actividades"]:checked')) {
            alert('Por favor, seleccione al menos una actividad favorita.');
            return;
        }

        // Si todos los campos son válidos, mostrar la información
        const email = document.getElementById('email').value;
        solicitudesPorEmail[email] = (solicitudesPorEmail[email] || 0) + 1;

        let mensaje = 'Información registrada:\n\n';
        mensaje += `Nombres: ${document.getElementById('nombres').value}\n`;
        mensaje += `Apellidos: ${document.getElementById('apellidos').value}\n`;
        mensaje += `Email: ${email}\n`;
        mensaje += `Teléfono: ${document.getElementById('telefono').value}\n`;
        mensaje += `Estrato: ${document.getElementById('estrato').value}\n`;
        mensaje += `Fecha de Nacimiento: ${document.getElementById('fecha-nacimiento').value}\n`;
        mensaje += `Grupo Sanguíneo: ${document.getElementById('grupo-sanguineo').value}\n`;
        mensaje += `Género: ${document.querySelector('input[name="genero"]:checked').value}\n`;
        
        const actividades = Array.from(document.querySelectorAll('input[name="actividades"]:checked'))
            .map(input => input.value).join(', ');
        mensaje += `Actividades Favoritas: ${actividades}\n`;
        
        mensaje += `Fecha Test Drive: ${document.getElementById('fecha-test').value}\n`;
        mensaje += `Hora Test Drive: ${document.getElementById('hora-test').value}\n`;
        mensaje += `\nNúmero de solicitudes para este email: ${solicitudesPorEmail[email]}`;

        alert(mensaje);
        form.reset();
    });

    // Manejador del botón Cancelar
    cancelarBtn.addEventListener('click', function() {
        // Aquí deberías redirigir al menú de inicio
        // Por ahora, solo mostraremos un alert
        alert('Redirigiendo al menú de inicio...');
        // Descomenta la siguiente línea y ajusta la URL según sea necesario
        window.location.href = 'index.html';
    });
});