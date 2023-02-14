// Declaración

const ingresarClubes = () => {
  nuevosEquiposArgentinos =
    JSON.parse(localStorage.getItem("clubes")) || equiposArgentinos;

  let formulario = document.createElement("form");
  formulario.className = `my-3`;
  main.append(formulario);

  let nombresEquipos = nuevosEquiposArgentinos.map((equipo) => equipo.nombre);
  let infoDeIngreso = document.createElement("h5");
  infoDeIngreso.className = `mb-3`;
  nuevosEquiposArgentinos.length == 0
    ? (infoDeIngreso.innerHTML = `<b>Actualmente se encuentran 
  Boca Juniors, River Plate, San Lorenzo, Independiente, Racing Club.
  Si desea agregar mas clubes, complete los siguientes campos<b>`)
    : (infoDeIngreso.innerHTML = `<b>Actualmente se encuentran 
  ${nombresEquipos.join(", ")}.
  Si desea agregar mas clubes, complete los siguientes campos<b>`);
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
  labelPuntos.innerText = `Puntos en la tabla histórica:`;
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
  botonAñadirEquipo.innerText = `Añadir equipo`;
  botonAñadirEquipo.className = `btn btn-success mx-1 mt-2`;
  formulario.append(botonAñadirEquipo);
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    nuevosEquiposArgentinos.push(
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
    localStorage.setItem("clubes", JSON.stringify(nuevosEquiposArgentinos));
    formulario.reset();
    inputNombre.focus();
    Toastify({
      text: "¡El equipo fue ingresado correctamente!",
      duration: 2500,
      gravity: "bottom",
      position: "center",
    }).showToast();
  });

  let botonBorrarUltimoEquipo = document.createElement("button");
  botonBorrarUltimoEquipo.innerText = "Borrar último equipo";
  botonBorrarUltimoEquipo.className = `btn btn-danger mx-1 mb-2 d-block`;
  main.append(botonBorrarUltimoEquipo);
  botonBorrarUltimoEquipo.addEventListener("click", () => {
    if (nuevosEquiposArgentinos.length > 5) {
      Swal.fire({
        icon: "warning",
        text: "¿Está seguro que desea eliminar el ultimo equipo ingresado?",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          let equipoEliminado = nuevosEquiposArgentinos.pop();
          localStorage.setItem(
            "clubes",
            JSON.stringify(nuevosEquiposArgentinos)
          );
          Swal.fire({
            text: `${equipoEliminado.nombre} fue eliminado`,
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        text: "No se puede eliminar a los 5 grandes",
        imageUrl:
          "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/d/d7/Historia_5_grandes_futbol_libro.jpg/440px-Historia_5_grandes_futbol_libro.jpg",
        imageHeight: 400,
      });
    }
  });

  let botonRecargarPagina = document.createElement("button");
  botonRecargarPagina.innerText = `Ingresar más equipos`;
  botonRecargarPagina.className = `btn btn-dark mx-1 mb-2`;
  botonRecargarPagina.addEventListener("click", () => {
    scrollTo(0, 0);
    setTimeout(() => {
      location.reload();
    }, 1300);
  });

  let botonNoAñadirEquipo = document.createElement("button");
  botonNoAñadirEquipo.innerText = `No añadir más equipos`;
  botonNoAñadirEquipo.className = `btn btn-dark mx-1 my-2`;
  main.append(botonNoAñadirEquipo);
  botonNoAñadirEquipo.addEventListener("click", () => {
    formulario.remove();
    let equiposParseados =
      JSON.parse(localStorage.getItem("clubes")) || equiposArgentinos;
    let equiposConClaseRecuperada = [];
    equiposParseados.forEach((equipoParseado) => {
      let equipoConClaseRecuperada = Object.assign(
        new Equipo(),
        equipoParseado
      );
      equiposConClaseRecuperada.push(equipoConClaseRecuperada);
    });
    mostrarTodasLasFunciones(equiposConClaseRecuperada);
    main.append(botonRecargarPagina);
    botonNoAñadirEquipo.remove();
    botonAñadirEquipo.remove();
    botonBorrarUltimoEquipo.remove();
    scrollTo(0, 550);
  });
};

// Ejecución

ingresarClubes();
