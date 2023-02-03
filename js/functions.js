const mostrarInfoEquipos = () => {
  equiposArgentinos.forEach((equipo) => {
    let infoEquipo = equipo.info();
    main.append(infoEquipo);
  });
};

const mostrarEquiposPorTorneos = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML =
    "<br><b>Clubes ordenados por titulos de Primera División:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorTorneos = equiposArgentinos.sort(
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

const mostrarEquiposPorLibertadores = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Clubes ordenados por Libertadores:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorLibertadores = equiposArgentinos.sort(
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

const mostrarEquiposPorIntercontinentales = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML =
    "<br><b>Clubes ordenados por Intercontinentales:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorIntercontinentales = equiposArgentinos.sort(
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

const mostrarEquiposPorPuntos = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML =
    "<br><b>Clubes ordenados por la tabla historica de puntos</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorPuntos = equiposArgentinos.sort(
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

const mostrarEquiposPorAño = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Clubes ordenados por antigüedad:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorAño = equiposArgentinos.sort(
    (a, b) => a.año - b.año
  );
  let listaDesordenada = document.createElement("ul");
  main.append(listaDesordenada);
  equiposOrdenadosPorAño.forEach((equipo) => {
    let elementoDeLaLista = document.createElement("li");
    elementoDeLaLista.innerHTML = `Fundación de ${equipo.nombre}: <b>${equipo.año}</b>`;
    listaDesordenada.append(elementoDeLaLista);
  });
};

const mostrarEquiposPorCancha = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Estadios ordenados por capacidad:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorCancha = equiposArgentinos.sort(
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

const mostrarEquiposPorSudamericana = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = "<br><b>Clubes ordenados por Sudamericanas:</b><br>";
  main.append(subtitulo);
  const equiposOrdenadosPorSudamericana = equiposArgentinos.sort(
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

const mostrarEquiposPorHistorial = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Clubes ordenados por historial contra su clásico rival:</b><br>`;
  main.append(subtitulo);
  const equiposOrdenadosPorHistorial = equiposArgentinos.sort(
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

const mostrarEquiposPorTemporadasEnLaB = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Clubes ordenados por temporadas en la segunda categoría:</b><br>`;
  main.append(subtitulo);
  const equiposOrdenadosPorTemporadasEnLaB = equiposArgentinos.sort(
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

const mostrarTorneos = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Total torneos locales:</b>`;
  main.append(subtitulo);
  const sumatoriaTorneos = equiposArgentinos.reduce(
    (total, equipo) => (total += equipo.torneosLocales),
    0
  );
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `En total, entre todos los clubes han conseguido <b>${sumatoriaTorneos}</b> titulos de Primera Division`;
  main.append(parrafo);
};

const mostrarLibertadores = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Total libertadores</b>`;
  main.append(subtitulo);
  const sumatoriaLibertadores = equiposArgentinos.reduce(
    (total, equipo) => (total += equipo.libertadores),
    0
  );
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `En total, entre todos los clubes han conseguido <b>${sumatoriaLibertadores}</b> Libertadores`;
  main.append(parrafo);
};

const mostrarIntercontinentales = () => {
  let subtitulo = document.createElement("h5");
  subtitulo.innerHTML = `<br><b>Total intercontinentales:</b>`;
  main.append(subtitulo);
  const sumatoriaIntercontinentales = equiposArgentinos.reduce(
    (total, equipo) => (total += equipo.intercontinentales),
    0
  );
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `En total, entre todos los clubes han conseguido <b>${sumatoriaIntercontinentales}</b> intercontinentales`;
  main.append(parrafo);
};

const mostrarTodasLasFunciones = () => {
  mostrarInfoEquipos();
  mostrarEquiposPorAño();
  mostrarEquiposPorTorneos();
  mostrarEquiposPorLibertadores();
  mostrarEquiposPorIntercontinentales();
  mostrarEquiposPorPuntos();
  mostrarEquiposPorCancha();
  mostrarEquiposPorSudamericana();
  mostrarEquiposPorHistorial();
  mostrarEquiposPorTemporadasEnLaB();
  mostrarTorneos();
  mostrarLibertadores();
  mostrarIntercontinentales();
};

const agregarEquipoAlArray = (e) => {
  console.log(equiposArgentinos);
  equiposArgentinos.push(
    new Equipo(
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
    )
  );
  console.log(equiposArgentinos);
};
