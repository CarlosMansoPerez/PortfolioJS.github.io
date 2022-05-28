/* JAVASCRIPTS DEL EJERCICIO 4 DEL PORTFOLIO*/

function letraDNI(){

    let DNI = Number(document.getElementById('DNI').value);
    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = DNI % 23;
    let letra = LETRAS.substring(resto,resto+1);

    document.getElementById('letra').innerHTML="<p class=\"tipoFuente text-center text-light fs-3\">La letra de este número de DNI es <b class=\"fs-1 fluorescente\">"+letra+"</b></p>";

}