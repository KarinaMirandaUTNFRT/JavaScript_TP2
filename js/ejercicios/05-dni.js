// 1. Definimos la lista de letras en el orden exacto que pide el ejercicio
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

while (true) {
    let entrada = prompt("Ingresá tu número de DNI (o Cancelar para salir):");

    // 2. Si presiona cancelar, cortamos el bucle
    if (entrada === null) break;

    // 3. Convertimos a número
    let numero = parseInt(entrada);

    // 4. Validaciones
    if (isNaN(numero)) {
        alert("Error: Lo introducido no es un número. Volvé a intentar.");
    } else if (numero < 0 || numero > 99999999) {
        alert("Error: El número debe estar entre 0 y 99999999.");
    } else {
        // 5. El ALGORITMO: Calculamos el resto de la división por 23
        let resto = numero % 23;

        // 6. Usamos el resto como ÍNDICE para buscar la letra en el array
        let letraCorrespondiente = letras[resto];

        alert(`Para el DNI ${numero}, la letra es: ${letraCorrespondiente}`);
        console.log(`DNI: ${numero} -> Letra: ${letraCorrespondiente}`);
    }
}