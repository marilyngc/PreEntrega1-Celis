// const nombre = "Rodrigo";
// const numero1 = 10;
// const numero2 = 20;

// const suma = numero1 + numero2;

// console.log(nombre);

// console.log("El resultado de la suma es: " + suma);

/** Ejemplo de comparacion */

// const numero1 = 10;
// const numero2 = 20;
// let suma = numero1 + numero2;

// if (suma == 30) {
//   console.log("La suma es igual a 30");
// } else {
//   console.log("La suma no es 30");
// }

// console.log("Finaliza el programa");

/** Case Sensitive */

// const nombre = prompt("Ingrese nombre");

// if (nombre == "Rodrigo") {
//   console.log("Su nombre es Rodrigo");
// } else {
//   console.log("Su nombre no es Rodrigo");
// }

/** If... Else If */

// const numero1 = 20;
// const numero2 = 50;
// const suma = numero1 + numero2;

// if (suma == 30) {
//   console.log("La suma es 30");
// } else if (suma == 40) {
//   console.log("La suma no es 40");
// } else if (suma == 50) {
//   console.log("La suma es 50");
// } else {
//   console.log("La suma no está contemplada");
// }

/** True Or false */

// const nombre = prompt("Ingrese un nombre");
// const nombreEsIgualAPablo = nombre == "Pablo";

// if (nombreEsIgualAPablo) {
//   console.log("El nombre es igual a Pablo");
// } else {
//   console.log("El nombre no es igual a Pablo");
// }

/** Ejemplos  */

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//   alert("Usted tiene acceso");

//   const nombre = prompt("Ingrese su nombre");
//   const telefono = prompt("Ingrese el telefono");

//   alert("Su nombre es: " + nombre + " Y su teléfono es: " + telefono);
// } else {
//   alert("Usted tiene que ser mayor a 18");
// }

/** Ejemplo && y ||  */

// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));

// // if (nombre == "Pablo" && edad >= 18) {
// //   alert("Acceso permitido");
// // } else {
// //   alert("Acceso denegado");
// // }

// // Al cumplirse las dos condiciones, se muestra el if

// if (nombre == "Pablo" || nombre == "Joaquin") {
//   if (edad >= 18) {
//     alert("Acceso permitido");
//   } else {
//     alert("Acceso denegado");
//   }
// } else {
//   alert("Acceso denegado");
// }

// Basta con que se cumpla una condición para que proceda al siguiente if

/** Combinacion de && y || */
// let edad = parseInt(prompt("Ingrese su edad"));
// let nombreIngresado = prompt("Ingresar nombre");

// // if (
// //   nombreIngresado != "" &&
// //   (nombreIngresado == "Ema" || nombreIngresado == "ema")
// // ) {
// //   alert("Hola Ema");
// // } else {
// //   alert("Error: Ingresa nombre valido");
// // }

// /** Otro ejemplo */

// if (
//   edad >= 18 &&
//   (nombreIngresado == "Joaquin" || nombreIngresado == "Pablo")
// ) {
//   alert("Acceso permitido");
// } else {
//   alert("Acceso denegado");
// }

/** Ejercicios dado por el profe */

//Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor

// let numero1 = parseInt(prompt("Ingrese un numero"));
// let numero2 = parseInt(prompt("Ingrese otro numero"));

// if (numero1 > numero2) {
//   alert("El numero " + numero1 + " es mayor que " + numero2);
// } else {
//   alert("El numero " + numero1 + " es menor que " + numero2);
// }

//El costo del helado es de $5. Escriba un programa en donde se le pida al usuario
//ingresar la cantidad de helados que quiere y mostrar cuánto le saldría

// const costoHelado = 5;
// let cantidadSolicitada = parseInt(
//   prompt("Ingrese la cantidad de helados que desee")
// );
// let totalDePrecio = costoHelado * cantidadSolicitada;

// if (totalDePrecio) {
//   alert("Total de la compra es: " + totalDePrecio + "$");
// }

// Escriba un programa en donde se le solicite la edad al usuario y calcule su
//año de nacimiento, tomando en cuenta que el año actual es 2022.

// const añoActual = 2023;
// let edad = parseInt(prompt("Ingrese su edad"));
// let añoNacimiento = añoActual - edad;

// if (añoNacimiento) {
//   alert("Su año de nacimiento es: " + añoNacimiento);
// }

//Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio
//y si es mayor o igual a 4 le indique que está aprobado con un alert.

// let nota1 = parseInt(prompt("Ingrese la primera nota"));
// let nota2 = parseInt(prompt("Ingrese la segunda nota"));
// let nota3 = parseInt(prompt("Ingrese la tercera nota"));
// const promedio = (nota1 + nota2 + nota3) / 3;

// alert("Tu promdedio es: " + promedio);

// if (promedio >= 4) {
//   alert("¡Felicidades aprobaste!");
// } else {
//   alert("Desaprobaste :(");
// }

// Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto,
// solicite al usuario el precio del producto,calcule su IVA (21%) y muéstrele en pantalla con
//  un alert el precio final.

// let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
// let iva = 21;
// let diferenciaDeIva = (precioProducto * iva) / 100;
// let totalProducto = precioProducto + diferenciaDeIva;
// alert("El total de su producto es: " + totalProducto);

// Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera viajar.
// Teniendo en cuenta estos valores:
// - Colombia: $40
// - México: $50
// - Brasil: $30
// - Uruguay: $20
// - Chile: $20
// - Ecuador: $30
// - Perú: $40
// - Estados Unidos: $50
// Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
// NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el nombre del lugar

// let destino = prompt("Ingrese destino");
// let colombiaYperu = 40;
// let mexicoYestadosUnidos = 50;
// let brazilYecuador = 30;
// let uruguayYchile = 20;

// if (destino == "Colombia" || destino == "Perú") {
//   alert("El costo al lugar seleccionado es: " + colombiaYperu);
// } else if (destino == "Mexico" || destino == "Estados Unidos") {
//   alert("El costo al lugar seleccionado es: " + mexicoYestadosUnidos);
// } else if (destino == "Brazil" || destino == "Ecuador") {
//   alert("El costo al lugar seleccionado es: " + brazilYecuador);
// } else if (destino == "Uruguay" || destino == "Chile") {
//   alert("El costo al lugar seleccionado es: " + uruguayYchile);
// } else {
//   alert("Tiene que ingresar un lugar disponible");
// }

// Siendo X, Y y Z valores booleanes cuyos valores son: X = true, Y = false y Z = true, determine
//  el valor de cada expresión lógica:
// (X && Y) || (X && Z)
// True

// // (X || !Y) && (!X || Z)
//        v             v
//               v
// // X || Y && Z
//     v   f
//        v     v
//            v
// // !(X || Y) && Z
//         !v       v
//              t

// // X || Y || X && !Z && !Y
//     v   f
//        v     v
//            v       f
//                 f         v
//                       f
// // !X || !Y || Z && X && !Y
//     f     v
//         v       v
//              v       v
//                   v        v
//                       v
//Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no.
// let letra = prompt("Ingrese una letra");

// if (
//   letra == "a" ||
//   letra == "e" ||
//   letra == "i" ||
//   letra == "o" ||
//   letra == "u"
// ) {
//   alert("Es una vocal");
// } else {
//   alert("Dato incorrecto");
// }

// Escriba un programa en donde se le pida un nombre y una edad al usuario. Muestre un
//  mensaje en pantalla si:
// - El nombre es “Gabriel” y tiene más de 24 años
// - El nombre es “María” y tiene entre 28 y 35 años

// let nombre = prompt("Ingrese nombre");
// let edad = parseInt(prompt("Ingrese edad"));

// if (
//   (nombre == "Gabriel" && edad >= 24) ||
//   (nombre == "Maria" && 28 <= edad <= 35)
// ) {
//   alert("Bienvenido ");
// } else {
//   alert("Dato incorrecto");
// }

// Escriba un programa en donde se le solicite al usuario que ingrese 2 números y
//  le muestre en pantalla un mensaje cuando su suma sea 10 y su división tenga como resto 0.

// let numero1 = parseInt(prompt("Ingrese un numero"));
// let numero2 = parseInt(prompt("Ingrese otro numero"));
// let suma10 = numero2 + numero2 === 10;

// if (suma10 && suma10 / 2) {
//   alert("suma de 10 y resto de 0");
// }
