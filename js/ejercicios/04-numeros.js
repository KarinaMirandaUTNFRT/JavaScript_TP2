let suma = 0;

while (true) {
    let entrada = prompt("Ingrese un número (Cancelar para salir):");

    // Si el usuario presiona Cancelar
    if (entrada === null) {
        break;
    }

    let numero = Number(entrada);

    // Validar si es un número
    if (isNaN(numero)) {
        alert("No es un número válido");
        continue;
    }

    suma += numero;
}

alert("La suma total es: " + suma);