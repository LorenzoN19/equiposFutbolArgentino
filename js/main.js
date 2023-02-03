// Declaración

const ingresarClubes = () => {
  let formulario = document.createElement("form");
  formulario.className = `my-3`;
  main.append(formulario);

  let nombresEquipos = equiposArgentinos.map((equipo) => equipo.nombre);
  let infoDeIngreso = document.createElement("h5");
  infoDeIngreso.className = `mb-3`;
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

  let botonAñadirEquipo = document.createElement("button");
  botonAñadirEquipo.innerText = `Añadir otro equipo`;
  botonAñadirEquipo.type = "submit";
  botonAñadirEquipo.className = `btn btn-dark mx-1 mt-2`;
  formulario.append(botonAñadirEquipo);

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarEquipoAlArray(e);
    formulario.reset();
    let parrafo = document.createElement("p");
    parrafo.className = `mt-3`;
    parrafo.innerHTML = `<b>El equipo fue agregado exitosamente</b>`;
    formulario.append(parrafo);
    setTimeout(() => {
      parrafo.remove();
    }, 2000);
  });

  let botonNoAñadirEquipo = document.createElement("button");
  botonNoAñadirEquipo.innerText = `No añadir más equipos`;
  botonNoAñadirEquipo.type = "submit";
  botonNoAñadirEquipo.className = `btn btn-danger mx-1 mb-2`;
  main.append(botonNoAñadirEquipo);
  botonNoAñadirEquipo.addEventListener("click", () => {
    formulario.remove();
    mostrarTodasLasFunciones();
    botonNoAñadirEquipo.hidden = true;
    botonAñadirEquipo.hidden = true;
    scrollTo(0, 550);
  });
};

// Ejecución

ingresarClubes();
