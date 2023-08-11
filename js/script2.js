//                     Proyecto final JS:

let lineasTrenes = {
  roca: [
    {
      linea: "roca",
      estacionNro: 1,
      hasta: "constitucion",
      precio: 0,
      tardaEnMin: 0,
    },
    {
      linea: "roca",
      estacionNro: 2,
      hasta: "yrigoyen",
      precio: 35,
      tardaEnMin: 4,
    },
    {
      linea: "roca",
      estacionNro: 3,
      hasta: "d santillan y m kosteki",
      precio: 40,
      tardaEnMin: 7,
    },
    {
      linea: "roca",
      estacionNro: 4,
      hasta: "gerli",
      precio: 45,
      tardaEnMin: 10,
    },
    {
      linea: "roca",
      estacionNro: 5,
      hasta: "lanus",
      precio: 50,
      tardaEnMin: 15,
    },
    {
      linea: "roca",
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
      linea: "sarmiento",
      estacionNro: 1,
      hasta: "moreno",
      precio: 30,
      tardaEnMin: 10,
    },
    {
      linea: "sarmiento",
      estacionNro: 2,
      hasta: "merlo",
      precio: 35,
      tardaEnMin: 15,
    },
    // ...
    //muchas lineas y estaciones...
  ],
};

const listaUl = document.querySelector("#lista");

fetch("../assets/data/data.json")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.classList.add("liClass");
      li.innerHTML = `
      <p> Linea: ${post.linea}<p/>
      <p> Hasta: ${post.hasta}<p/>
      <p> Estacion número: ${post.estacionNro}<p/>`;
      listaUl.append(li);
    });
  });

const resultadosDiv = document.getElementById("resultadosDiv");

const resultadosBusqueda = [];
let formLinea = document.getElementById("formLinea");
let formEstacion = document.getElementById("formEstacion");

formLinea.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formLinea.style.display = "none";
  formEstacion.style.display = "block";

  let lineaSeleccionada = document.getElementById("lineaTren").value;
  lineaSeleccionada = lineaSeleccionada.toLowerCase();

  let estacionesDeLinea = lineasTrenes[lineaSeleccionada];

  if (estacionesDeLinea) {
    formEstacion.addEventListener("submit", function (evento) {
      evento.preventDefault();

      let estacionSeleccionada = document.getElementById("estacionTren").value;
      estacionSeleccionada = estacionSeleccionada.toLowerCase();

      let resultado = estacionesDeLinea.find(
        (estacion) => estacion.hasta.toLowerCase() === estacionSeleccionada
      );

      if (resultado) {
        const horaActual = luxon.DateTime.local().toLocaleString(
          luxon.DateTime.TIME_SIMPLE
        );
        resultado.horaBusqueda = horaActual;
        console.log("Información de la estación seleccionada: ");
        resultadosBusqueda.length = 0;
        resultadosBusqueda.push(resultado);
        console.table(resultadosBusqueda);

        let historial = localStorage.setItem(
          "historial",
          JSON.stringify(resultadosBusqueda)
        );

        resultadosDiv.innerHTML = "";
        resultadosBusqueda.forEach((resultado) => {
          const divResultado1 = document.createElement("div");
          divResultado1.innerHTML = `
              <p>Linea: ${resultado.linea}</p>
              <p>Estación: ${resultado.hasta}</p>
              <p>Precio: ${resultado.precio}</p>
              <p>Tiempo estimado: ${resultado.tardaEnMin} minutos</p>
              <p>Hora de búsqueda: ${resultado.horaBusqueda}</p>
            `;
          resultadosDiv.appendChild(divResultado1);
        });
      } else {
        console.log(
          'La estación "' +
            estacionSeleccionada +
            '" no se encuentra en esta linea'
        );

        resultadosDiv.innerHTML = "";
        const divResultado2 = document.createElement("div");
        divResultado2.innerHTML = `<p> La estación "${estacionSeleccionada}" no se encuentra en esta linea`;
        resultadosDiv.appendChild(divResultado2);
      }
    });
  } else {
    console.log('La línea de tren "' + lineaSeleccionada + '" no existe');
    resultadosDiv.innerHTML = "";
    const divResultado3 = document.createElement("div");
    divResultado3.innerHTML = `<p> La línea de tren "${lineaSeleccionada}" no existe`;
    resultadosDiv.appendChild(divResultado3);
  }
});

//se guarda la informacion como historial en el localStorage
