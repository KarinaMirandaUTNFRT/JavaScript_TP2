const letras = [  // Definimos la lista de letras en el orden exacto que pide el ejercicio
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
while (true) {
  let entrada = prompt("Ingresá tu número de DNI (o Cancelar para salir):");
  if (entrada === null) break;
  let numero = parseInt(entrada); // Convertimos a número para poder obtener luego la letra que le corresponde
  if (isNaN(numero)) {
    //validamos que se un numero
    alert("Error: Lo introducido no es un número. Volvé a intentar.");
  } else if (numero < 0 || numero > 99999999) {
    alert("Error: El número debe estar entre 0 y 99999999.");
  } else {
     let resto = numero % 23;  //calculamos el resto de la division por 23
    let letraCorrespondiente = letras[resto];  //se usa el valor del resto para buscar la letra del array
    alert(`Para el DNI ${numero}, la letra es: ${letraCorrespondiente}`);
    console.log(`DNI: ${numero} -> Letra: ${letraCorrespondiente}`);
  }
}
