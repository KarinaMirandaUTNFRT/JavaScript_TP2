const nombre1 = prompt("Ingresá el primer nombre:");
const edad1 = parseInt(prompt(`Ingresá la edad de ${nombre1}:`));
const nombre2 = prompt("Ingresá el segundo nombre:");
const edad2 = parseInt(prompt(`Ingresá la edad de ${nombre2}:`));
const nombre3 = prompt("Ingresá el tercer nombre:");
const edad3 = parseInt(prompt(`Ingresá la edad de ${nombre3}:`));
const edadMayor = Math.max(edad1, edad2, edad3);  // con Math.max  encontramos la edad más alta de forma rápida
let nombreMayor = ""; // se Busca a quién le pertenece esa edad mayor
if (edadMayor === edad1) {
    nombreMayor = nombre1;
} else if (edadMayor === edad2) {
    nombreMayor = nombre2;
} else {
    nombreMayor = nombre3;
}
alert(`La persona mayor es ${nombreMayor} con ${edadMayor} años.`);
console.log(`El mayor es: ${nombreMayor}`);
