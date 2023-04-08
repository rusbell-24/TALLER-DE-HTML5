const main = () => {
  load();
};

const cambiarModo = () => {
  const modos = document.getElementById("modos");
  const body = document.querySelector("body");
  switch (modos.value) {
    case "claro": {
      body.classList.remove("oscuro", "vintage");
      body.classList.add("claro");
      break;
    }
    case "oscuro": {
      body.classList.remove("claro", "vintage");
      body.classList.add("oscuro");
      break;
    }
    case "vintage": {
      body.classList.remove("claro", "oscuro");
      body.classList.add("vintage");
      break;
    }
  }
  localStorage.setItem("modo", modos.value);
};

function load() {
  const modos = document.getElementById("modos");
  const modo = localStorage.getItem("modo");
  const body = document.querySelector("body");
  if (modo) {
    switch (modo) {
      case "claro": {
        body.classList.remove("oscuro", "vintage");
        body.classList.add("claro");
        selectedValue = "claro";
        break;
      }
      case "oscuro": {
        body.classList.remove("claro", "vintage");
        body.classList.add("oscuro");
        selectedValue = "oscuro";
        break;
      }
      case "vintage": {
        body.classList.remove("claro", "oscuro");
        body.classList.add("vintage");
        selectedValue = "vintage";
        break;
      }
    }
    document.querySelector(
      '#modos [value="' + selectedValue + '"]'
    ).selected = true;
  }
}

function ocultar(id) {
  const elemento = document.getElementById(id);
  elemento.classList.toggle("ocultar");
}
