import korona from "../assets/Корона.jpg";

function loadAbout() {
  const container = document.querySelector(".container");

  const aboutSection = document.createElement("div");
  aboutSection.classList.add("about-section");

  const welcomeMessage = document.createElement("h2");
  welcomeMessage.textContent = "Добро пожаловать в кафе 'Пивчик'!";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Кафе 'Пивчик' — это уютное место, где вы можете насладиться лучшими сортами пива и вкусной едой. Мы предлагаем широкий выбор напитков и блюд, которые порадуют вас своим вкусом и качеством. Приходите к нам, чтобы отдохнуть, пообщаться с друзьями и хорошо провести время!";

  const highlightText = document.createElement("p");
  highlightText.classList.add("highlight-text");
  highlightText.textContent =
    "Откройте для себя мир вкусов и наслаждайтесь атмосферой нашего кафе!";

    const img = document.createElement('img');
    img.src = korona;
  aboutSection.appendChild(welcomeMessage);
  aboutSection.appendChild(aboutText);
  aboutSection.appendChild(highlightText);
  aboutSection.appendChild(img)

  container.appendChild(aboutSection);

}

export default loadAbout;
