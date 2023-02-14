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

let equiposArgentinos = [];
fetch(
  "https://raw.githubusercontent.com/LorenzoN19/equiposFutbolArgentino/main/json/equipos.json"
)
  .then((response) => response.json())
  .then((equiposJSON) => {
    equiposJSON.forEach((equipoJSON) => {
      let equipoConClaseRecuperada = Object.assign(new Equipo(), equipoJSON);
      equiposArgentinos.push(equipoConClaseRecuperada);
    });
  })
  .catch((error) => {
    console.log(error);
  });
