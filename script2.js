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

let lineasTrenes = {
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
      estacionNro: 1,
      hasta: "d santillan y m kosteki",
      precio: 40,
      tardaEnMin: 7,
    },
    {
      estacionNro: 1,
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
    console.log(resultado);
  } else {
    console.log(
      'La estación "' + estacionSeleccionada + '" no se encuentra en esta linea'
    );
  }
} else {
  console.log('La línea de tren "' + lineaSeleccionada + '" no existe');
}
