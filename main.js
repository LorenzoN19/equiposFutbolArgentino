//Declaracion

function validarMonto() {
  let montoInicialIngresado;
  do {
    montoInicialIngresado = prompt(`Ingrese el monto inicial (minimo 500):`);
    if (montoInicialIngresado >= 500) {
      montoInicialIngresado = parseFloat(montoInicialIngresado);
      alert(`El monto fue ingresado correctamente`);
      return montoInicialIngresado;
    } else if (montoInicialIngresado === "") {
      alert(`Usted no está ingresando ningun valor.`);
    } else if (montoInicialIngresado === null) {
      return;
    } else if (montoInicialIngresado < 500) {
      alert(`El monto inicial minimo debe ser de al menos 500.`);
    } else {
      alert(`El monto inicial no puede contener letras.`);
    }
  } while (isNaN(montoInicialIngresado) || montoInicialIngresado < 500);
}

function ofrecerServicios() {
  let porcentajeIngresado;
  do {
    porcentajeIngresado = prompt(
      `Para calcular impuestos ingrese un numero positivo del 1 al 100 sin "%", para descuentos ingrese un numero negativo del -1 al -100 sin "%".`
    );
    if (porcentajeIngresado === "") {
      alert(`Usted no está ingresando ningun valor`);
      porcentajeIngresado = parseFloat(porcentajeIngresado);
    } else if (porcentajeIngresado === null) {
      return;
    } else if (porcentajeIngresado >= -100 && porcentajeIngresado <= 100) {
      porcentajeIngresado = parseFloat(porcentajeIngresado);
      alert("Ingreso exitoso. A continuacion, vera el importe final");
      return porcentajeIngresado;
    } else if (porcentajeIngresado < -100 || porcentajeIngresado > 100) {
      alert("El numero no puede ser menor que -100 o mayor que 100");
    } else {
      alert("No está permitido ingresar ningun signo");
    }
  } while (
    isNaN(porcentajeIngresado) ||
    porcentajeIngresado < -100 ||
    porcentajeIngresado > 100
  );
}

// Ejecución

let montoInicialValidado = validarMonto();
//verificacion para que, al clickear "cancelar" -en cualquier funcion- finalice el programa.
if (montoInicialValidado !== undefined) {
  let porcentajeValidado = ofrecerServicios();
  if (porcentajeValidado !== undefined) {
    let resultado =
      montoInicialValidado + (montoInicialValidado * porcentajeValidado) / 100;
    alert("Su monto final es: " + resultado);
  }
}
