// Declaración

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
    this.año = año;
    this.torneosLocales = torneosLocales;
    this.sudamericana = sudamericana;
    this.libertadores = libertadores;
    this.intercontinentales = intercontinentales;
    this.puntosTablaHistorica = puntosTablaHistorica;
    this.capacidadCancha = capacidadCancha;
    this.historialClasico = historialClasico;
    this.temporadasEnLaB = temporadasEnLaB;
  }
  info() {
    document.write(
      `<br><b>${this.nombre}</b> fue fundado en ${this.año}. Su estadio tiene una capacidad para ${this.capacidadCancha} espectadores. Ganó ${this.torneosLocales} torneo/s de Primera División, ${this.sudamericana} Sudamericana/s, ${this.libertadores} Libertadores y ${this.intercontinentales} Intercontinentales. Cosechó ${this.puntosTablaHistorica} puntos en primera a lo largo de la historia (hasta 2023), con su clasico rival tiene una diferencia de ${this.historialClasico} partidos y disputo ${this.temporadasEnLaB} temporada/s en la segunda categoría.<br>`
    );
  }
}

const equiposArgentinos = [
  new Equipo("Boca Juniors", 1905, 29, 1, 6, 3, 4752, 57200, 9, 0),
  new Equipo("River Plate", 1901, 36, 1, 4, 1, 4837, 72054, -9, 1),
  new Equipo("San Lorenzo", 1908, 12, 1, 1, 0, 4282, 48000, 34, 1),
  new Equipo("Independiente", 1905, 14, 2, 7, 2, 4224, 47069, 22, 1),
  new Equipo("Racing Club", 1903, 9, 0, 1, 1, 3956, 51000, -22, 2),
];

const ingresarClubes = () => {
  let respuesta;
  do {
    let clubesActuales = equiposArgentinos.map((equipo) => {
      return equipo.nombre;
    });
    alert(`Actualmente se encuentran los siguientes clubes:${clubesActuales}`);
    respuesta = prompt("Si desea añadir mas equipos, ingrese SI");
    if (respuesta == "SI" || respuesta == "si" || respuesta == "Si") {
      equiposArgentinos.push(
        new Equipo(
          prompt("Ingrese el nombre"),
          parseInt(prompt("Ingrese el año de fundacion")),
          parseInt(prompt("Ingrese la cantidad de Torneos Locales")),
          parseInt(prompt("Ingrese la cantidad de Sudamericanas")),
          parseInt(prompt("Ingrese la cantidad de Libertadores")),
          parseInt(prompt("Ingrese la cantidad de Intercontinentales")),
          parseInt(
            prompt("Ingrese la cantidad de puntos en la tabla histórica")
          ),
          parseInt(prompt("Ingrese la capacidad de la cancha")),
          parseInt(prompt("Ingrese la diferencia con su clasico rival")),
          parseInt(prompt("Ingrese la cantidad de temporadas en la B"))
        )
      );
    } else {
      return;
    }
  } while (respuesta == "SI" || respuesta == "Si" || respuesta == "si");
};

const mostrarInfoEquipos = () => {
  document.write(`<h1 class="text-center">Equipos del Futbol Argentino</h1>`);
  for (const equipo in equiposArgentinos) {
    equiposArgentinos[equipo].info();
  }
};

const mostrarEquiposPorTorneos = () => {
  document.write(
    "<br><br><b>Clubes ordenados por titulos de Primera División:</b><br>"
  );
  const equiposOrdenadosPorTorneos = equiposArgentinos.sort(
    (a, b) => b.torneosLocales - a.torneosLocales
  );
  equiposOrdenadosPorTorneos.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.torneosLocales}</b> torneos locales`
    );
  });
};

const mostrarEquiposPorLibertadores = () => {
  document.write("<br><br><b>Clubes ordenados por Libertadores:</b><br>");
  const equiposOrdenadosPorLibertadores = equiposArgentinos.sort(
    (a, b) => b.libertadores - a.libertadores
  );
  equiposOrdenadosPorLibertadores.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.libertadores}</b> Libertadores`
    );
  });
};

const mostrarEquiposPorIntercontinentales = () => {
  document.write("<br><br><b>Clubes ordenados por Intercontinentales:</b><br>");
  const equiposOrdenadosPorIntercontinentales = equiposArgentinos.sort(
    (a, b) => b.intercontinentales - a.intercontinentales
  );
  equiposOrdenadosPorIntercontinentales.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.intercontinentales}</b> Intercontinentales`
    );
  });
};

const mostrarEquiposPorPuntos = () => {
  document.write(
    "<br><br><b>Clubes ordenados por la tabla historica de puntos</b><br>"
  );
  const equiposOrdenadosPorPuntos = equiposArgentinos.sort(
    (a, b) => b.puntosTablaHistorica - a.puntosTablaHistorica
  );
  equiposOrdenadosPorPuntos.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.puntosTablaHistorica}</b> puntos en la primera división.`
    );
  });
};

const mostrarEquiposPorAño = () => {
  document.write("<br><br><b>Clubes ordenados por antigüedad:</b><br>");
  const equiposOrdenadosPorAño = equiposArgentinos.sort(
    (a, b) => a.año - b.año
  );
  equiposOrdenadosPorAño.forEach((equipo) => {
    document.write(`<br>Fundación de ${equipo.nombre}: <b>${equipo.año}</b>`);
  });
};

const mostrarEquiposPorCancha = () => {
  document.write("<br><br><b>Estadios ordenados por capacidad:</b><br>");
  const equiposOrdenadosPorCancha = equiposArgentinos.sort(
    (a, b) => b.capacidadCancha - a.capacidadCancha
  );
  equiposOrdenadosPorCancha.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.capacidadCancha}</b> espectadores`
    );
  });
};

const mostrarEquiposPorSudamericana = () => {
  document.write("<br><br><b>Clubes ordenados por Sudamericanas:</b><br>");
  const equiposOrdenadosPorSudamericana = equiposArgentinos.sort(
    (a, b) => b.sudamericana - a.sudamericana
  );
  equiposOrdenadosPorSudamericana.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.sudamericana}</b> Sudamericana/s`
    );
  });
};

const mostrarEquiposPorHistorial = () => {
  document.write(
    "<br><br><b>Clubes ordenados por historial contra su clásico rival:</b><br>"
  );
  const equiposOrdenadosPorHistorial = equiposArgentinos.sort(
    (a, b) => b.historialClasico - a.historialClasico
  );
  equiposOrdenadosPorHistorial.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: diferencia de <b>${equipo.historialClasico}</b> partidos`
    );
  });
};

const mostrarEquiposPorTemporadasEnLaB = () => {
  document.write(
    "<br><br><b>Clubes ordenados por temporadas en la segunda categoría:</b><br>"
  );
  const equiposOrdenadosPorTemporadasEnLaB = equiposArgentinos.sort(
    (a, b) => a.temporadasEnLaB - b.temporadasEnLaB
  );
  equiposOrdenadosPorTemporadasEnLaB.forEach((equipo) => {
    document.write(
      `<br>${equipo.nombre}: <b>${equipo.temporadasEnLaB}</b> temporada/s en la B`
    );
  });
};

const mostrarTorneos = () => {
  const sumatoriaTorneos = equiposArgentinos.reduce(
    (total, equipo) => (total += equipo.torneosLocales),
    0
  );
  document.write(
    `<br><br><b>Total Torneos Locales:</b><br>En total, entre todos los clubes han conseguido <b>${sumatoriaTorneos}</b> titulos de Primera Division`
  );
};

const mostrarLibertadores = () => {
  const sumatoriaLibertadores = equiposArgentinos.reduce(
    (total, equipo) => (total += equipo.libertadores),
    0
  );
  document.write(
    `<br><br><b>Total Libertadores:</b><br>En total, entre todos los clubes han conseguido <b>${sumatoriaLibertadores}</b> Libertadores`
  );
};

const mostrarIntercontinentales = () => {
  const sumatoriaIntercontinentales = equiposArgentinos.reduce(
    (total, equipo) => (total += equipo.intercontinentales),
    0
  );
  document.write(
    `<br><br><b>Total Intercontinentales:</b><br>En total, entre todos los clubes han conseguido <b>${sumatoriaIntercontinentales}</b> intercontinentales`
  );
};

// Ejecución //

ingresarClubes();
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
