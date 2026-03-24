const textoOriginal = prompt("Ingresá un texto para darlo vuelta:");
if (textoOriginal !== null) {
    let textoInvertido = "";

    // Empezamos en la última letra (largo - 1)
    // Mientras i sea mayor o igual a 0
    // Restamos 1 a i en cada vuelta (i--)
    for (let i = textoOriginal.length - 1; i >= 0; i--) {
        textoInvertido += textoOriginal.charAt(i);
    }
    alert("Texto invertido: " + textoInvertido);
    console.log(`Original: ${textoOriginal} | Invertido: ${textoInvertido}`);
}
//con array
//const textoOriginal = prompt("Ingresá un texto:");
//if (textoOriginal) {
  // split('') -> Convierte "HOLA" en ['H','O','L','A']
  // reverse() -> Da vuelta el array: ['A','L','O','H']
  // join('')  -> Une todo de nuevo: "ALOH"
  //const invertido = textoOriginal.split("").reverse().join("");
  //alert("Invertido: " + invertido);
//}
