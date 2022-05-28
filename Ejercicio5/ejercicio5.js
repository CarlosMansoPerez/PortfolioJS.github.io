/*JAVASCRIPTS PARA EL EJERCICIO 5 DEL PORTFOLIO*/

function mayMin(){
    
    let cadena = document.getElementById('cadena').value;
    let respuesta = "";

    if (cadena == cadena.toUpperCase()){

        respuesta = "MAYÚSCULAS"; 

    } else {

        if (cadena == cadena.toLowerCase()){

            respuesta = "MINÚSCULAS";

        } else {

            respuesta = "una mezcla de MAYÚSCULAS y MINÚSCULAS";

        }

    }

    document.getElementById('respuesta').innerHTML = "<p class=\"tipoFuente text-light fs-3\">La cadena está escrita en <b class=\"fluorescente fs-1\">" + respuesta+"</b></p>";

}