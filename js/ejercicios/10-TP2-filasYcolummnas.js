//10- Realiza un script que pida numero de filas y columnas y escriba una tabla. Dentro de cada una de las celdas debera escribirse un numero consecutivo en orden descendente. si por ejemplo la tabla es de 7x5 los numeros iran del 35 al 1
const pantalla = document.getElementById("pantalla");
const filas = parseInt(prompt("Ingresa numero de filas"));
const columnas = parseInt(prompt("Ingresa numero de columnas"));

//for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) //bucles anidados
  //pantalla.innerHTML += `<tr>`;
  //for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++)
  //{
  //pantalla.innerHTML += `<td>1</td>`; //va generando cada td (columnas)
  //}
  //pantalla.innerHTML += `</tr>`;
document.writeln('<table class="table table-striped"> <tbody id= "pantalla">')
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++){ //bucles anidados
  document.writeln(`<tr>`)
  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++)
  {
  document.writeln(`<td>1</td>`)
  }
  document.writeln(`</tr>`)
}
  document.writeln(`<tbody></table>`)