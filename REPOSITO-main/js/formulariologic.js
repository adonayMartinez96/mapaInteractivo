document.querySelector('#boton').addEventListener('click', saveInfo);

function saveInfo(){
    var sname = document.querySelector('#nombres').value,
        scorreo = document.querySelector('#correos'),
        spais = document.querySelector('#pais').value,
        sconsulta = document.querySelector('#consultas').value;

        addInfoToSystem(sname,scorreo,spais,sconsulta);

        if(sname === "" || scorreo === "" || spais === "" || sconsulta === ""){
          alert("Todos los campos son obligatorios");
          return false;
        }
        else if(sname.length>50){
        alert("El nombre es muy largo");
        return false;
        }
        
}
//validando el correo
document.getElementById('correos').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "correo incorrecto";
    }
});
 
