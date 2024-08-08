import "./style.css";
import loadAbout from "./components/about";
import loadContacts from "./components/contacts";
import loadMenu from "./components/menuList";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const tabs = ["about", "menu", "contacts"];

function loadTemplate() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const container = document.createElement("div");

  header.appendChild(nav);
  nav.appendChild(ul);
  container.classList.add("container");

  tabs.forEach((element) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = element;
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
  if (component === "about") {
    loadAbout();
  }
  if (component === "menu") {
    loadMenu();
  }
  if (component === "contacts") {
    loadContacts();
  }
}

const btns = document.querySelectorAll('button')
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    loadComponent(btn.textContent);
  })
})


