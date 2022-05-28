/* JAVASCRIPTS DEL EJERCICIO 7 DEL POTFOLIO */

function divisionEuclides(){

    let divi = Number (document.getElementById('dividendo').value);
    let disor = Number (document.getElementById('divisor').value);
    let cociente = 0;

    while (divi>=disor){

        divi -= disor;

        cociente++;

    } 

    document.getElementById('resultadoDivision').innerHTML = "<p class=\"text-light tipoFuente fs-3\">El resultado de la divisón es <b class='fluorescente fs-1'>" + cociente + "</b> y el resto es <b class='text-danger fs-2 sombraRoja'>" + divi + "</b></p>";

}