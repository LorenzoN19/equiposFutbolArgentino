class Equipo {
  constructor(
    nombre,
    año,
    torneosLocales,
    sudamericana,
    libertadores,
    intercontinentales,
    puntosTablaHistorica,
    capacidadCancha,
    historialClasico,
    temporadasEnLaB
  ) {
    this.nombre = nombre;
    this.año = parseFloat(año);
    this.torneosLocales = parseFloat(torneosLocales);
    this.sudamericana = parseFloat(sudamericana);
    this.libertadores = parseFloat(libertadores);
    this.intercontinentales = parseFloat(intercontinentales);
    this.puntosTablaHistorica = parseFloat(puntosTablaHistorica);
    this.capacidadCancha = parseFloat(capacidadCancha);
    this.historialClasico = parseFloat(historialClasico);
    this.temporadasEnLaB = parseFloat(temporadasEnLaB);
  }
  info() {
    let infoEquipo = document.createElement("p");
    infoEquipo.innerHTML = `<b>${this.nombre}</b> fue fundado en ${this.año}. Su estadio tiene una capacidad para ${this.capacidadCancha} espectadores. Ganó ${this.torneosLocales} torneo/s de Primera División, ${this.sudamericana} Sudamericana/s, ${this.libertadores} Libertadores y ${this.intercontinentales} Intercontinentales. Cosechó ${this.puntosTablaHistorica} puntos en primera a lo largo de la historia (hasta 2023), con su clasico rival tiene una diferencia de ${this.historialClasico} partidos y disputo ${this.temporadasEnLaB} temporada/s en la segunda categoría.`;
    return infoEquipo;
  }
}

let equiposArgentinos = [
  new Equipo("Boca Juniors", 1905, 29, 1, 6, 3, 4752, 57200, 9, 0),
  new Equipo("River Plate", 1901, 36, 1, 4, 1, 4837, 72054, -9, 1),
  new Equipo("San Lorenzo", 1908, 12, 1, 1, 0, 4282, 48000, 34, 1),
  new Equipo("Independiente", 1905, 14, 2, 7, 2, 4224, 47069, 22, 1),
  new Equipo("Racing Club", 1903, 9, 0, 1, 1, 3956, 51000, -22, 2),
];

// const ingresarClubes = () => {
//   let respuesta;
//   do {
//     let clubesActuales = equiposArgentinos.map((equipo) => {
//       return equipo.nombre;
//     });
//     alert(`Actualmente se encuentran los siguientes clubes:${clubesActuales}`);
//     respuesta = prompt("Si desea añadir mas equipos, ingrese SI");
//     if (respuesta == "SI" || respuesta == "si" || respuesta == "Si") {
//       equiposArgentinos.push(
//         new Equipo(
//           prompt("Ingrese el nombre"),
//           prompt("Ingrese el año de fundacion"),
//           prompt("Ingrese la cantidad de Torneos Locales"),
//           prompt("Ingrese la cantidad de Sudamericanas"),
//           prompt("Ingrese la cantidad de Libertadores"),
//           prompt("Ingrese la cantidad de Intercontinentales"),
//           prompt("Ingrese la cantidad de puntos en la tabla histórica"),
//           prompt("Ingrese la capacidad de la cancha"),
//           prompt("Ingrese la diferencia con su clasico rival"),
//           prompt("Ingrese la cantidad de temporadas en la B")
//         )
//       );
//     } else {
//       return;
//     }
//   } while (respuesta == "SI" || respuesta == "Si" || respuesta == "si");
// };

const ingresarClubes = () => {
  let formulario = document.createElement("form");
  formulario.className = `my-3`;
  main.append(formulario);

  let nombresEquipos = equiposArgentinos.map((equipo) => equipo.nombre);
  let infoDeIngreso = document.createElement("h5");
  infoDeIngreso.innerHTML = `<b>Actualmente se encuentran 
  ${nombresEquipos.join(", ")}.
  Si desea agregar mas clubes, complete los siguientes campos<b>`;
  formulario.append(infoDeIngreso);

  let divNombre = document.createElement("div");
  divNombre.className = `form-group p-1`;
  let labelNombre = document.createElement("label");
  labelNombre.innerText = `Nombre:`;
  let inputNombre = document.createElement("input");
  inputNombre.className = `form-control`;
  inputNombre.required = true;
  labelNombre.append(inputNombre);
  divNombre.append(labelNombre);
  formulario.append(divNombre);

  let divAño = document.createElement("div");
  divAño.className = `form-group p-1`;
  let labelAño = document.createElement("label");
  labelAño.innerText = `Año de fundación:`;
  let inputAño = document.createElement("input");
  inputAño.type = `number`;
  inputAño.min = 1875;
  inputAño.className = `form-control`;
  inputAño.required = true;
  labelAño.append(inputAño);
  divAño.append(labelAño);
  formulario.append(divAño);

  let divTorneosLocales = document.createElement("div");
  divTorneosLocales.className = `form-group p-1`;
  let labelTorneosLocales = document.createElement("label");
  labelTorneosLocales.innerText = `Torneos locales:`;
  let inputTorneosLocales = document.createElement("input");
  inputTorneosLocales.type = `number`;
  inputTorneosLocales.min = 0;
  inputTorneosLocales.className = `form-control`;
  inputTorneosLocales.required = true;
  labelTorneosLocales.append(inputTorneosLocales);
  divTorneosLocales.append(labelTorneosLocales);
  formulario.append(divTorneosLocales);

  let divSudamericanas = document.createElement("div");
  divSudamericanas.className = `form-group p-1`;
  let labelSudamericanas = document.createElement("label");
  labelSudamericanas.innerText = `Sudamericanas:`;
  let inputSudamericanas = document.createElement("input");
  inputSudamericanas.type = `number`;
  inputSudamericanas.min = 0;
  inputSudamericanas.className = `form-control`;
  inputSudamericanas.required = true;
  labelSudamericanas.append(inputSudamericanas);
  divSudamericanas.append(labelSudamericanas);
  formulario.append(divSudamericanas);

  let divLibertadores = document.createElement("div");
  divLibertadores.className = `form-group p-1`;
  let labelLibertadores = document.createElement("label");
  labelLibertadores.innerText = `Libertadores:`;
  let inputLibertadores = document.createElement("input");
  inputLibertadores.type = `number`;
  inputLibertadores.min = 0;
  inputLibertadores.className = `form-control`;
  inputLibertadores.required = true;
  labelLibertadores.append(inputLibertadores);
  divLibertadores.append(labelLibertadores);
  formulario.append(divLibertadores);

  let divIntercontinentales = document.createElement("div");
  divIntercontinentales.className = `form-group p-1`;
  let labelIntercontinentales = document.createElement("label");
  labelIntercontinentales.innerText = `Intercontinentales`;
  let inputIntercontinentales = document.createElement("input");
  inputIntercontinentales.type = `number`;
  inputIntercontinentales.min = 0;
  inputIntercontinentales.className = `form-control`;
  inputIntercontinentales.required = true;
  labelIntercontinentales.append(inputIntercontinentales);
  divIntercontinentales.append(labelIntercontinentales);
  formulario.append(divIntercontinentales);

  let divPuntos = document.createElement("div");
  divPuntos.className = `form-group p-1`;
  let labelPuntos = document.createElement("label");
  labelPuntos.innerText = `Puntos:`;
  let inputPuntos = document.createElement("input");
  inputPuntos.type = `number`;
  inputPuntos.min = 0;
  inputPuntos.className = `form-control`;
  inputPuntos.required = true;
  labelPuntos.append(inputPuntos);
  divPuntos.append(labelPuntos);
  formulario.append(divPuntos);

  let divCapacidadCancha = document.createElement("div");
  divCapacidadCancha.className = `form-group p-1`;
  let labelCapacidadCancha = document.createElement("label");
  labelCapacidadCancha.innerText = `Capacidad del estadio:`;
  let inputCapacidadCancha = document.createElement("input");
  inputCapacidadCancha.type = `number`;
  inputCapacidadCancha.min = 10000;
  inputCapacidadCancha.className = `form-control`;
  inputCapacidadCancha.required = true;
  labelCapacidadCancha.append(inputCapacidadCancha);
  divCapacidadCancha.append(labelCapacidadCancha);
  formulario.append(divCapacidadCancha);

  let divHistorial = document.createElement("div");
  divHistorial.className = `form-group p-1`;
  let labelHistorial = document.createElement("label");
  labelHistorial.innerText = `Diferencia en el historial:`;
  let inputHistorial = document.createElement("input");
  inputHistorial.type = `number`;
  inputHistorial.className = `form-control`;
  inputHistorial.required = true;
  labelHistorial.append(inputHistorial);
  divHistorial.append(labelHistorial);
  formulario.append(divHistorial);

  let divTemporadasEnLaB = document.createElement("div");
  divTemporadasEnLaB.className = `form-group p-1`;
  let labelTemporadasEnLaB = document.createElement("label");
  labelTemporadasEnLaB.innerText = `Temporadas en la B:`;
  let inputTemporadasEnLaB = document.createElement("input");
  inputTemporadasEnLaB.type = `number`;
  inputTemporadasEnLaB.min = 0;
  inputTemporadasEnLaB.className = `form-control`;
  inputTemporadasEnLaB.required = true;
  labelTemporadasEnLaB.append(inputTemporadasEnLaB);
  divTemporadasEnLaB.append(labelTemporadasEnLaB);
  formulario.append(divTemporadasEnLaB);

  let botonEnviar = document.createElement("button");
  botonEnviar.innerText = `Enviar`;
  botonEnviar.type = "submit";
  botonEnviar.className = `btn btn-dark mx-1 my-2`;
  formulario.append(botonEnviar);

  formulario.addEventListener("submit", (e) => {
    const nuevoEquipo = new Equipo(
      e.target[0].value,
      parseInt(e.target[1].value),
      parseInt(e.target[2].value),
      parseInt(e.target[3].value),
      parseInt(e.target[4].value),
      parseInt(e.target[5].value),
      parseInt(e.target[6].value),
      parseInt(e.target[7].value),
      parseInt(e.target[8].value),
      parseInt(e.target[9].value)
    );
    equiposArgentinos.push(nuevoEquipo);

    localStorage.setItem("equipos", JSON.stringify(equiposArgentinos));
  });
};
