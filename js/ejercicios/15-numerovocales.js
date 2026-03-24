// para que  'A' y 'a' sean lo mismo
const texto = prompt(
  "Ingresá una frase para contar sus vocales:",
).toLowerCase();
if (texto !== null) {
  let contadorVocales = 0;
  for (let i = 0; i < texto.length; i++) {
    //Recorremos el texto letra por letra
    let caracter = texto.charAt(i);
    // buscamos la vocal
    if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u" ||
      caracter === "á" ||
      caracter === "é" ||
      caracter === "í" ||
      caracter === "ó" ||
      caracter === "ú"
    ) {
      contadorVocales++;
    }
  }
  alert(`La frase tiene ${contadorVocales} vocales.`);
  console.log(`Frase: "${texto}" | Total vocales: ${contadorVocales}`);
}
