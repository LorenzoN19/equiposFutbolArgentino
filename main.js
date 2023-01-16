class Club {
  constructor(
    nombre,
    año,
    torneosLocales,
    libertadores,
    puntosTablaHistorica,
    capacidadCancha,
    historialClasico
  ) {
    this.nombre = nombre;
    this.año = año;
    this.torneosLocales = torneosLocales;
    this.libertadores = libertadores;
    this.puntosTablaHistorica = puntosTablaHistorica;
    this.capacidadCancha = capacidadCancha;
    this.historialClasico = historialClasico;
  }
  info() {
    alert(
      `${this.nombre} fue fundado en ${this.año}. Ganó ${this.torneosLocales} torneos de Primera División y ${this.libertadores} Libertadores. Cosechó ${this.puntosTablaHistorica} puntos a lo largo de la historia y con su clasico rival tiene una diferencia de ${this.historialClasico} partidos.`
    );
  }
}

const sanLorenzo = new Club(
  "San Lorenzo de Almagro",
  1908,
  12,
  1,
  4239,
  47964,
  34
);

sanLorenzo.info();
