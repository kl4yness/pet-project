document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.aside__wrapper');

  burger.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      burger.classList.remove('open');
    } else {
      menu.classList.add('open');
      burger.classList.add('open');
    }
  });
}
);

const textToType = "Hey! My name is Ilya Gridusov, I'm frontend developer";
const typingSpeed = 150;
const typedTextElement = document.getElementById("typed-text");

let currentIndex = 0;

function typeText() {
  if (currentIndex < textToType.length) {
    typedTextElement.textContent += textToType.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();

window.onload = function () {
  setTimeout(function () {
    document.body.classList.add('loaded_hiding');
    setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 2000); // Ждем 2 секунды, пока вся прелоадер-анимация исчезнет
  }, 1000); // Прелоадер показывается 3 секунды
}
