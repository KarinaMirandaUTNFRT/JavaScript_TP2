const cadena = prompt("Ingresá una cadena de texto:");

if (cadena !== null) {
    let resultado = "";
     for (let i = 0; i < cadena.length; i++) { //cadena.length dice cuántas letras tiene el texto 
     resultado += cadena.charAt(i); //Agregamos el carácter actual al resultado
        if (i < cadena.length - 1) { //i < cadena.length - 1 Agreg el guion solo si todavía quedan letras por delante".
            resultado += "-";
        }
    }
   alert("Texto separado: " + resultado);
    console.log(resultado);
}


//if (cadena !== null) {
    //const resultado = cadena.split('').join('-');
    // split('') -> Convierte el texto "HOLA" en ['H', 'O', 'L', 'A']
    // join('-') -> Une esos elementos con un guion en el medio
    //alert("Texto separado: " + resultado);
    //console.log("Resultado con Array:", resultado);
//}
