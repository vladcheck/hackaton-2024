const joinButton = document.getElementById("joinButton");
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const registerForm = document.getElementById("registerForm");
const forgotPasswordModal = document.getElementById("forgotPasswordModal");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const mainContent = document.getElementById("mainContent");
const registerButton = document.getElementById("registerBtn");
const wholePageContainer = document.getElementById("wholePageContainer");

const ideasFeed = document.getElementById("ideasFeed");
const projectsFeed = document.getElementById("projectsFeed");
const ideasMenuItem = document.querySelector(".menu-item:nth-child(1)");
const projectsMenuItem = document.querySelector(".menu-item:nth-child(2)");

// Показ формы входа после нажатия на кнопку "Присоединиться"
joinButton.addEventListener("click", function () {
  wholePageContainer.style.display = "none";
  loginForm.style.display = "block";
});

// Показ формы регистрации после нажатия на ссылку "Регистрация"
registerButton.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Показ модального окна "Забыли пароль?" и скрытие формы входа
forgotPasswordBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.display = "none";
  forgotPasswordModal.style.display = "block";
});

// Закрытие модального окна при клике вне его области
window.addEventListener("click", function (event) {
  if (event.target === forgotPasswordModal) {
    forgotPasswordModal.style.display = "none";
  }
});

// Вход в систему
loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.display = "none";
  mainContent.style.display = "flex";
});

// Регистрация пользователя
registerButton.addEventListener("click", function (event) {
  event.preventDefault();
  registerForm.style.display = "none";
  mainContent.style.display = "flex";
});

// Обработчик для переключения на "Идеи"
ideasMenuItem.addEventListener("click", function () {
  ideasFeed.style.display = "block"; // Показать ленту идей
  projectsFeed.style.display = "none"; // Скрыть ленту проектов
});

// Обработчик для переключения на "Задачи" или "Проекты"
projectsMenuItem.addEventListener("click", function () {
  ideasFeed.style.display = "none"; // Скрыть ленту идей
  projectsFeed.style.display = "block"; // Показать ленту проектов
});
