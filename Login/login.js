const formulario = document.getElementById('login') /** Obtener referencias de los elementos del formulario */
const correoInput = document.getElementById('correo')
const passwordInput = document.getElementById('password')
const botonInicioSesion = document.getElementById('button')

//**Agregar sonido de evento al boton inicio de sesion */

botonInicioSesion.addEventListener('click', function(event){
    event.preventDefault(); //Evitar que el form se envie automaticamente

    //Realizar validaciones
    if (!validarCorreo(correoInput.value)){
        mostrarError(correoInput, 'Por favor ingrese un correo valido')
    }else if (passwordInput.value === ''){
        mostrarError(passwordInput, 'Por favor ingrese una contraseña valida')
    }else {
        //si todas las comprobaciones son exitosas puede continuar con el envio de estas
        formulario.submit;
    }

})

// funcion para validar el formato del correo electronico
function validarCorreo(correo){
//    utilizar una expresion regular para verificar si el correo tiene un formato valido
const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i
return regexCorreo.test(correo);
}

//**error mensaje */

function mostrarError(input, mensaje){
const errorMensaje = document.createElement('p');
errorMensaje.className = "error-mensaje";
errorMensaje.textContent = mensaje;
const contenedorInput = input.parentElement;
contenedorInput.appendChild(errorMensaje) //Agregar una clase de estilo para resaltar el campo con error
contenedorInput.classList.add('error');
} //limpiar los mensajes de error al escribir en los campos

correoInput.addEventListener('input', limpiarError);
passwordInput.addEventListener('input', limpiarError);

function limpiarError (){
    const contenedorInput = this.parentElement;
    const errorMensaje = contenedorInput.querySelector('.error-mensaje');

    if(errorMensaje){
        contenedorInput.removeChild(errorMensaje);
        contenedorInput.classList.remove('error');
    }
}