const mostrarInfoEquipos = (array) => {
  array.forEach((equipo) => {
    let infoEquipo = equipo.info();
    main.append(infoEquipo);
  });
};

const mostrarEquiposPorTorneos = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML =
    "<br><b>Clubes ordenados por titulos de Primera División:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorTorneos = array.sort(
    (a, b) => b.torneosLocales - a.torneosLocales
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorTorneos.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.torneosLocales}</b> torneos locales`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorLibertadores = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Clubes ordenados por Libertadores:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorLibertadores = array.sort(
    (a, b) => b.libertadores - a.libertadores
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorLibertadores.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.libertadores}</b> Libertadores`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorIntercontinentales = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML =
    "<br><b>Clubes ordenados por Intercontinentales:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorIntercontinentales = array.sort(
    (a, b) => b.intercontinentales - a.intercontinentales
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorIntercontinentales.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.intercontinentales}</b> Intercontinentales`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorPuntos = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML =
    "<br><b>Clubes ordenados por la tabla historica de puntos</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorPuntos = array.sort(
    (a, b) => b.puntosTablaHistorica - a.puntosTablaHistorica
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorPuntos.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.puntosTablaHistorica}</b> puntos en Primera División.`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorAño = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Clubes ordenados por antigüedad:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorAño = array.sort((a, b) => a.año - b.año);
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorAño.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `Fundación de ${equipo.nombre}: <b>${equipo.año}</b>`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorCancha = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Estadios ordenados por capacidad:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorCancha = array.sort(
    (a, b) => b.capacidadCancha - a.capacidadCancha
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorCancha.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.capacidadCancha}</b> espectadores`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorSudamericana = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Clubes ordenados por Sudamericanas:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorSudamericana = array.sort(
    (a, b) => b.sudamericana - a.sudamericana
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorSudamericana.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.sudamericana}</b> Sudamericana/s`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorHistorial = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Clubes ordenados por historial contra su clásico rival:</b><br>`;
  main.append(subtitulo);
  const equiposOrdenadosPorHistorial = array.sort(
    (a, b) => b.historialClasico - a.historialClasico
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorHistorial.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: diferencia de <b>${equipo.historialClasico}</b> partidos`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorTemporadasEnLaB = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Clubes ordenados por temporadas en la segunda categoría:</b><br>`;
  main.append(subtitulo);
  const equiposOrdenadosPorTemporadasEnLaB = array.sort(
    (a, b) => a.temporadasEnLaB - b.temporadasEnLaB
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorTemporadasEnLaB.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `${equipo.nombre}: <b>${equipo.temporadasEnLaB}</b> temporada/s en la B`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarTorneos = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Total torneos locales:</b>`;
  main.append(subtitulo);
  const sumatoriaTorneos = array.reduce(
    (total, equipo) => (total += equipo.torneosLocales),
    0
  );
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `En total, entre todos los clubes han conseguido <b>${sumatoriaTorneos}</b> titulos de Primera Division`;
  main.append(parrafo);
};

const mostrarLibertadores = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Total libertadores</b>`;
  main.append(subtitulo);
  const sumatoriaLibertadores = array.reduce(
    (total, equipo) => (total += equipo.libertadores),
    0
  );
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `En total, entre todos los clubes han conseguido <b>${sumatoriaLibertadores}</b> Libertadores`;
  main.append(parrafo);
};

const mostrarIntercontinentales = (array) => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Total intercontinentales:</b>`;
  main.append(subtitulo);
  const sumatoriaIntercontinentales = array.reduce(
    (total, equipo) => (total += equipo.intercontinentales),
    0
  );
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `En total, entre todos los clubes han conseguido <b>${sumatoriaIntercontinentales}</b> intercontinentales`;
  main.append(parrafo);
};

const mostrarTodasLasFunciones = (array) => {
  mostrarInfoEquipos(array);
  mostrarEquiposPorAño(array);
  mostrarEquiposPorTorneos(array);
  mostrarEquiposPorLibertadores(array);
  mostrarEquiposPorIntercontinentales(array);
  mostrarEquiposPorPuntos(array);
  mostrarEquiposPorCancha(array);
  mostrarEquiposPorSudamericana(array);
  mostrarEquiposPorHistorial(array);
  mostrarEquiposPorTemporadasEnLaB(array);
  mostrarTorneos(array);
  mostrarLibertadores(array);
  mostrarIntercontinentales(array);
};
