import "./style.css";
import loadAbout from "./components/about";
import loadContacts from "./components/contacts";
import loadMenu from "./components/menuList";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const tabs = ["О нас", "Меню", "Контакты"];
const mainTab = 0;

function loadTemplate() {
  const header = document.createElement("header");
  const subheader = document.createElement("div");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const container = document.createElement("div");

  header.appendChild(subheader);
  header.appendChild(nav);
  nav.appendChild(ul);
  container.classList.add("container");
  subheader.textContent = "ПИВЧИК";

  tabs.forEach((element) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = element;

    if (element === tabs[mainTab]) {
      btn.classList.add("active");
    }

    li.appendChild(btn);
    ul.appendChild(li);
  });

  document.body.appendChild(header);
  document.body.appendChild(container);
}

loadTemplate();

function loadComponent(component) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  if (component === tabs[0]) {
    loadAbout();
  }
  if (component === tabs[1]) {
    loadMenu();
  }
  if (component === tabs[2]) {
    loadContacts();
  }
}

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    loadComponent(btn.textContent);
  });
});

loadComponent(tabs[mainTab]);
