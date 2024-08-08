import korona from "../assets/Корона.jpg";

function loadContacts() {
    const container = document.querySelector(".container");
  
    const contactSection = document.createElement("div");
    contactSection.classList.add("about-section");
  
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Контакты";
  
    const contactText = document.createElement("p");
    contactText.textContent =
      "Мы всегда рады видеть вас в нашем кафе 'Пивчик'. Если у вас возникли вопросы или вы хотите забронировать столик, свяжитесь с нами по телефону или посетите нас лично.";
  
    const phone = document.createElement("p");
    phone.classList.add("highlight-text");
    phone.textContent = "Телефон: +7 (123) 456-7890";
  
    const address = document.createElement("p");
    address.classList.add("highlight-text");
    address.textContent = "Адрес: г. Москва, ул. Примерная, д. 10";
  
    const img = document.createElement('img');
    img.src = korona; // Используйте изображение для контактов, если нужно
  
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactText);
    contactSection.appendChild(phone);
    contactSection.appendChild(address);
    contactSection.appendChild(img);
  
    container.appendChild(contactSection);
  }
  
  export default loadContacts;
  