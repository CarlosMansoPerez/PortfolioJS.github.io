/* JAVASCRIPT PARA EL EJERCICIO 2 DE PORTFOLIO DE LM */

//INDICAMOS AL PRINCIPIO DEL JAVASCRIPT QUÉ EVENTO DISPARA QUÉ FUNCION

//document.getElementById("calcular").onclick = ____ /*AQUÍ IRÍA LA FUNCION*/

document.getElementById("calcular").addEventListener("click",calcular)

function myFunction(x) {
    x.style.background = "rgb(204, 255, 0)";
}

function calcular(){

    // obtener dato(radio)

    let radio = Number (document.getElementById('radio').value);
    const PI = 3.1416; //Constante, no es necesario porque está en la librería matemática de JS

    //realizar cálculos

    let circunferencia = 2 * radio * PI;
    let circulo = radio ** 2 * PI;
    let esfera = radio ** 3 * PI;

    //motrar resultados

    //PRIMER NODO LI CREADO Y ENGANCHADO AL ARBOL ORIGINAL

    //1º PASO: CREAR EL NODO LI
    let nuevoNodo = document.createElement("li");
    let nuevoNodo2 = document.createElement("li");
    let nuevoNodo3 = document.createElement("li");
    //2º:METER CONTENIDO EN EL RESULTADO
    nuevoNodo.innerHTML = "<br><p class=\"tipoFuente text-light fs-5 centrartexto\">La longitud de la circunferencia de radio <b class=\"fluorescente\">" + radio + "</b> es: <b class=\"fs-3\">" + circunferencia.toFixed(2) + "</b></p>";
    nuevoNodo2.innerHTML = "<p class=\"tipoFuente  text-light fs-5 centrartexto\">El área del círculo de radio <b class=\"fluorescente\">" + radio + "</b> es: <b class=\"fs-3\">" + circulo.toFixed(2) + "</b></p>";;
    nuevoNodo3.innerHTML = "<p class=\" tipoFuente text-light fs-5 centrartexto\">El volumen de la esfera de radio <b class=\"fluorescente\">" + radio + "</b> es: <b class=\"fs-3\">" + esfera.toFixed(2) + "</b></p>";;


    //3º:ENGANCHAR EL NODO EN LA LISTA PADRE
    document.getElementById("resultados").appendChild(nuevoNodo)
    document.getElementById("resultados").appendChild(nuevoNodo2)
    document.getElementById("resultados").appendChild(nuevoNodo3)

/*
    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es: "+ circunferencia;

    document.getElementById("circulo").innerHTML="El área del círculo es: "+ circulo;

    document.getElementById("esfera").innerHTML="El volumen de la esfera es: "+ esfera;
    */
}