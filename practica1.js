/** Ejercicio 1 **/
function generarTexto() {
  var parrafo = document.createElement("p");
  var n = lectura();
  var contenido = document.createTextNode(
    n + "°F ===> " + conversion(n) + "°C"
  );
  var contenedor = document.getElementById("respuesta");
  parrafo.appendChild(contenido);
  contenedor.appendChild(parrafo);
}
function lectura() {
  var temperatura = window.prompt(
    "Escriba la temperatura en Grados Fahrenheit: ",
    "0"
  );
  return temperatura;
}
function conversion(f) {
  var c = ((f - 32) * 5) / 9;
  return c;
}

/** FIN Ejercicico 1 **/

/** Ejercicio 2 **/
function generarEjercicio2() {
  var parrafo = document.createElement("p");
  var m = lectura2();
  var contenido = document.createTextNode(
    "Radio = " + m + " Area = " + calcularAreaCirculo(m)
  );
  var contenedor = document.getElementById("respuesta2");
  parrafo.appendChild(contenido);
  contenedor.appendChild(parrafo);
}
function lectura2() {
  var radio = window.prompt("Ingrese radio del circulo : ", "0");
  return radio;
}
function calcularAreaCirculo(n) {
  return n * n * Math.PI;
}
/** FIN Ejercicico 2 **/

/** Ejercicio 3 **/
function generarEjercicio3() {
  var parrafo = document.createElement("p");
  var a = lecturaLados("a");
  var b = lecturaLados("b");
  var c = lecturaLados("c");
  var contenido = document.createTextNode(tipoTriangulo(a, b, c));
  var contenedor = document.getElementById("respuesta3");
  parrafo.appendChild(contenido);
  contenedor.appendChild(parrafo);
}
function lecturaLados(a) {
  var lado = window.prompt("Ingrese el valor del lado " + a + " : ", "0");
  return lado;
}
function tipoTriangulo(a, b, c) {
  if (a == b && a == c && b == c) {
    return a + "=" + b + "=" + c + " Triángulo equilátero";
  }
  if (a == c && a != b && c != b) {
    return (
      a +
      "=" +
      c +
      " " +
      a +
      "!=" +
      b +
      " " +
      c +
      "!=" +
      b +
      " Triángulo isósceles"
    );
  }
  if (a != b && a != c && b != c) {
    return a + "!=" + b + "!=" + c + " Triángulo escaleno";
  }
}
/** FIN Ejercicico 3 **/

/** Ejercicio 4 **/
function generarEjercicio4() {
  var parrafo = document.createElement("p");
  var n = lecturaDato();
  var contenido = document.createTextNode(verificaPrimo(n));
  var contenedor = document.getElementById("respuesta4");
  parrafo.appendChild(contenido);
  contenedor.appendChild(parrafo);
}
function lecturaDato() {
  var n = window.prompt("Ingrese un número entero", "0");
  var m = parseInt(n);
  return m;
}
function verificaPrimo(n) {
  var con = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      con = con + 1;
    }
  }
  if (con == 2) {
    return n + " es un número primo";
  } else {
    return n + " no es un número primo";
  }
}
/** FIN Ejercicico 4 **/

/** Ejercicio 5 **/
function generarEjercicio5() {
  var parrafo = document.createElement("p");
  var a = lecturaDatos5("a");
  var b = lecturaDatos5("b");
  var c = lecturaDatos5("c");
  var contenido = document.createTextNode(raices(a, b, c));
  var contenedor = document.getElementById("respuesta5");
  parrafo.appendChild(contenido);
  contenedor.appendChild(parrafo);
}
function lecturaDatos5(a) {
  var datos = window.prompt("Ingrese el valor de " + a + " : ", "0");
  return datos;
}
function raices(a, b, c) {
  var discriminante = b ** 2 - 4 * a * c;
  var r1 = 0;
  var r2 = 0;
  if (discriminante > 0) {
    r1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    r2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return (
      "(" +
      a +
      ")x^2+(" +
      b +
      ")x+(" +
      c +
      ") ====> x1 = " +
      r1 +
      " , x2 = " +
      r2
    );
  } else {
    if (discriminante == 0) {
      r1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      return (
        "(" +
        a +
        ")x^2+(" +
        b +
        ")x+(" +
        c +
        ") ====> La ecuación tiene una solución : X=" +
        r1
      );
    } else {
      return (
        "(" +
        a +
        ")x^2+(" +
        b +
        ")x+(" +
        c +
        ") ====> Las raices son números complejos"
      );
    }
  }
}
