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
