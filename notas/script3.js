/* let edad = 18; */ //let es una variable que puede ser reasignada
/* const edad1 = 18; */ //const es una variable que -NO- puede ser reasignada

/* edad = 20; */ // puede ser reasignado el valor de "edad" ya que fue creado con la variable "let" ahora edad es igual a 20

//para ver el valor en la consola se usa "console.log (variable)"

//ejemplo 1

/* let ingreseSuNombre = prompt("ingrese su nombre señor");
let salida = ingreseSuNombre + " " + "ingresado";
console.log(salida);
alert(salida); */

//ejemplo 2

/* let ingresarNombre = prompt("¿cual es tu nombre maestro?");
let salida = "su nombre es  " + ingresarNombre;
console.log(salida);
alert(salida);
let salida1 = "nombre correctamente ingresado";
alert(salida1); */

//operadores logicos
// ==(le importa solo que el dato sea igual)
// ===(tiene que ser igual el dato y el tipo de dato, es decir no es lo mismo un string que un number o un buleano),
// >, <, <=, >=, !, !=, !==, &&(and),

/* --------------------------------------------------------------------------- */

/* ------ IF ------ */

/* let numero = 3;

 if (numero == 3) {
 console.log("el numero si es 3");
} else {
console.log("el numero definitivamente no es 3");
} */

/* ------------------------------------------------------------------------------- */

/* ------ FOR ------ */

/* let numeroIngresado = parseInt(prompt("ingresar un numero "));
 for (let i = 1; i <= 10; i++) {
let resultado = numeroIngresado * i;
alert(numeroIngresado + " X " + i + " = " + resultado);
} */

/* ------------------------------------------------------------------------------- */

/* ------ WHILE ------ */

/* let entrada = prompt("ingresar algun dato: ")
while (entrada === "ESC") {
  alert("El usuario ingreso: " + entrada)
  entrada = prompt("ingrese otro dato: ")
} */

/* ------------------------------------------------------------------------------- */

/* ------ DO WHILE ------ */

/* let repetir = false;
 do{
 console.log("¡Solo una vez!");
 }while(repetir)

 let numero = 0;
 do{
   numero = prompt("Ingresar Número");       //Repetimos con do...while mientras el usuario ingresa un n°

   console.log(numero);

 }while(parseInt(numero)); */ //Si el parseo no resulta un número se interrumpe el bucle.

/* ------------------------------------------------------------------------------- */

/* ------ SWITCH ------ */

/* let entrada = prompt("Ingresar un nombre");
 //Repetimos hasta que se ingresa "ESC"
 while(entrada != "ESC" ){
    switch (entrada) {
        case "ANA":
             alert("HOLA ANA");
             break;
         case "JUAN":
             alert("HOLA JUAN");
             break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
 } */

//                  Entregas:

//                     Preentrega n°1:

/* --------------------- Condicional --------------------- */

/* let numero = prompt(
  "¿Que numero usa Messi en su camiseta en la selección Argentina?"
);

if (numero == 10) {
  console.log("Correcto, Messi usa el número 10");
} else {
  console.log("No sabes nada de fútbol");
} */

/* --------------------- Condicional --------------------- */

/* --------------------- Ciclo --------------------- */

/* let letra = 777;

do {
  letra = prompt("¿Cual es tu letra favorita?");
  console.log(letra);
} while (parseInt(letra)); */

//  .                                                      .

/* let letra2 = prompt("¿Cual es tu letra favorita?");

while (letra2 != 1) {
  switch (letra2) {
    case "a":
      alert("Dale, ponele onda");
      break;
    case "A":
      alert("Dale, ponele onda");
      break;

    case "ñ":
      alert("Odias a los ingleses y a las yankees");
      break;
    case "Ñ":
      alert("Odias a los ingleses y a las yankees");
      break;

    default:
      alert("buena elección");
      break;
  }
  letra2 = prompt("Ingrese otra letra");
} */

/* --------------------- Ciclo --------------------- */

/* --------------------- Simulador interactivo --------------------- */

/* let igresarValor = Number(prompt("Ingrese el valor de su producto"));

let calcularDescuento = function (producto) {
  return producto * 0.5; // <== ingresar valor del descuento
};

let calcularValorFinal = function (resultado) {
  console.log(resultado);
  return resultado - calcularDescuento(resultado);
};

alert("El precio final es: $" + calcularValorFinal(igresarValor));
console.log(calcularValorFinal(igresarValor)); */

/* --------------------- Simulador interactivo --------------------- */

/* function impuesto(precio, porcentaje) {
  return precio + (precio * porcentaje) / 100;
}

for (let index = 0; index < 5; index++) {
  let valor = impuesto(
    parseFloat(prompt("ingrese el precio de su producto")),
    parseFloat(prompt("ingreser el porcentaje"))
  );
  alert(valor);
}
 */

//                     Preentrega n°2:

/* let lineasTrenes = {
  roca: [
    {
      estacionNro: 1,
      hasta: "constitucion",
      precio: 0,
      tardaEnMin: 0,
    },
    {
      estacionNro: 2,
      hasta: "yrigoyen",
      precio: 35,
      tardaEnMin: 4,
    },
    {
      estacionNro: 3,
      hasta: "d santillan y m kosteki",
      precio: 40,
      tardaEnMin: 7,
    },
    {
      estacionNro: 4,
      hasta: "gerli",
      precio: 45,
      tardaEnMin: 10,
    },
    {
      estacionNro: 5,
      hasta: "lanus",
      precio: 50,
      tardaEnMin: 15,
    },
    {
      estacionNro: 6,
      hasta: "escalada",
      precio: 50,
      tardaEnMin: 20,
    },
    {
      linea: "roca",
      estacionNro: 7,
      hasta: "banfield",
      precio: 55,
      tardaEnMin: 25,
    },
    {
      linea: "roca",
      estacionNro: 8,
      hasta: "lomas",
      precio: 55,
      tardaEnMin: 30,
    },
    {
      linea: "roca",
      estacionNro: 9,
      hasta: "temperley",
      precio: 60,
      tardaEnMin: 35,
    },
    {
      linea: "roca",
      estacionNro: 10,
      hasta: "adrogue",
      precio: 60,
      tardaEnMin: 40,
    },
    {
      linea: "roca",
      estacionNro: 11,
      hasta: "burzaco",
      precio: 65,
      tardaEnMin: 45,
    },
  ],
  sarmiento: [
    {
      estacionNro: 1,
      hasta: "moreno",
      precio: 30,
      tardaEnMin: 10,
    },
    {
      estacionNro: 2,
      hasta: "merlo",
      precio: 35,
      tardaEnMin: 15,
    },
    // ...
    //muchas lineas y estaciones...
  ],
};

let lineaSeleccionada = prompt("Ingrese el nombre de la línea de tren");
lineaSeleccionada = lineaSeleccionada.toLowerCase();

let estacionesDeLinea = lineasTrenes[lineaSeleccionada];

if (estacionesDeLinea) {
  let estacionSeleccionada = prompt("Ingrese el nombre de la estación");
  estacionSeleccionada = estacionSeleccionada.toLowerCase();

  let resultado = estacionesDeLinea.find(
    (estacion) => estacion.hasta.toLowerCase() === estacionSeleccionada
  );

  if (resultado) {
    console.log("Información de la estación seleccionada: ");
    console.table(resultado);
  } else {
    console.log(
      'La estación "' + estacionSeleccionada + '" no se encuentra en esta linea'
    );
  }
} else {
  console.log('La línea de tren "' + lineaSeleccionada + '" no existe');
}

let nombre1 = ["juan", "pedro"];
let nombre2 = ["pepito", "pepa"];

let nombre = nombre1 + nombre2;

console.log(nombre); */

/*
// ctrl+k+c
ctrl+k+u
 */
