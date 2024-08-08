function loadContacts() {
    const container = document.querySelector(".container");
    const el = document.createElement("div");
    el.innerHTML = "Contacts";
    container.appendChild(el);
  }
  
  export default loadContacts;
  