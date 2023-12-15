const formulario = document.getElementById('form')

formulario.addEventListener('boton-formulario', function(e){

    e.preventDefault();
    let mail = document.getElementsByClassName('mensaje').value 
    console.log(mail)
})