const main = document.getElementById("main");

const titulo = document.createElement("h1");
titulo.innerHTML = `<h1 class="text-center pb-3"> Equipos del Futbol Argentino </h1>`;
main.append(titulo);

const imagenFutbol = document.createElement("img");
imagenFutbol.style.width = "100%";
imagenFutbol.style.maxWidth = "800px";
imagenFutbol.style.display = "block";
imagenFutbol.style.margin = "0 auto";
imagenFutbol.src =
  "https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-02/LPF_Ok.jpg?itok=m3O80QNk";
main.append(imagenFutbol);
