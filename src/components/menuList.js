function loadMenu() {
    const container = document.querySelector(".container");
    const el = document.createElement("div");
    el.innerHTML = "Menu";
    container.appendChild(el);
  }
  
  export default loadMenu;
  