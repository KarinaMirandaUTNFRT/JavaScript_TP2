const textoOriginal = prompt("Ingresá un texto:");
if (textoOriginal) {
  // split('') -> Convierte "HOLA" en ['H','O','L','A']
  // reverse() -> Da vuelta el array: ['A','L','O','H']
  // join('')  -> Une todo de nuevo: "ALOH"
  const invertido = textoOriginal.split("").reverse().join("");
  alert("Invertido: " + invertido);
}
