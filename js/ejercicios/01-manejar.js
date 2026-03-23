const pantalla = document.getElementById("pantalla");
const edad = parseInt(prompt("Ingresa tu edad"));

if (isNaN(edad)){
    alert('el valor que ingresaste no es valido' )
}else if (edad >= 18){
    alert('ya eres mayor de edad para conducir' )
 }
 else {
     alert('No tienes edad para conducir' )
 }