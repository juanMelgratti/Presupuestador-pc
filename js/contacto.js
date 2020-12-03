let nombre = $('#name')
let email = $('#email')
let asunto = $('#subject')
let mensaje = $('#message')
let form = $('#contact-form')

function evitarVacio(algo){
    return algo != ''
}

function validar(){
    if (evitarVacio(nombre.val()) && evitarVacio(email.val()) && evitarVacio(asunto) && evitarVacio(mensaje)){
        form.submit()
    }
    else{
        alert('Debes rellenar todos los campos antes de enviar')
    }
}

$("input").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13){
        validar()
    }
    }
);


