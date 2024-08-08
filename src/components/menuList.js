import korona from "../assets/Корона.jpg";
function loadMenu() {
  const container = document.querySelector(".container");
  const table = document.createElement("div");
  table.classList.add("tabl");
  container.appendChild(table);
  table.appendChild(createCard("Корона", "100", korona));
  table.appendChild(createCard("Корона", "100", korona));
  table.appendChild(createCard("Корона", "100", korona));
  table.appendChild(createCard("Корона", "100", korona));
  table.appendChild(createCard("Корона", "100", korona));
}

function createCard(name, price, img) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const white = document.createElement("div");
  white.classList.add("white-cont");

  const nameh3 = document.createElement("h3");
  nameh3.textContent = name;

  const priceh2 = document.createElement("h2");
  priceh2.textContent = price + " ₽";

  const imag = document.createElement("img");
  imag.src = img;
  white.appendChild(imag);

  menuItem.appendChild(white);
  menuItem.appendChild(nameh3);
  menuItem.appendChild(priceh2);

  return menuItem;
}
export default loadMenu;
