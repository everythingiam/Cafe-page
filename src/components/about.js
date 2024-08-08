

function loadAbout() {
  const container = document.querySelector(".container");
  const el = document.createElement("div");
  el.innerHTML = "About";
  container.appendChild(el);
}

export default loadAbout;
