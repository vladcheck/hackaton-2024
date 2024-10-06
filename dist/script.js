/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const joinButton = document.getElementById(\"joinButton\");\r\nconst loginForm = document.getElementById(\"loginForm\");\r\nconst loginButton = document.getElementById(\"loginButton\");\r\nconst registerForm = document.getElementById(\"registerForm\");\r\nconst forgotPasswordModal = document.getElementById(\"forgotPasswordModal\");\r\nconst forgotPasswordBtn = document.getElementById(\"forgotPasswordBtn\");\r\nconst mainContent = document.getElementById(\"mainContent\");\r\nconst registerButton = document.getElementById(\"registerBtn\");\r\nconst wholePageContainer = document.getElementById(\"wholePageContainer\");\r\n\r\nconst ideasFeed = document.getElementById(\"ideasFeed\");\r\nconst projectsFeed = document.getElementById(\"projectsFeed\");\r\nconst ideasMenuItem = document.querySelector(\".menu-item:nth-child(1)\");\r\nconst projectsMenuItem = document.querySelector(\".menu-item:nth-child(2)\");\r\n\r\n// Показ формы входа после нажатия на кнопку \"Присоединиться\"\r\njoinButton.addEventListener(\"click\", function () {\r\n  wholePageContainer.style.display = \"none\";\r\n  loginForm.style.display = \"block\";\r\n});\r\n\r\n// Показ формы регистрации после нажатия на ссылку \"Регистрация\"\r\nregisterButton.addEventListener(\"click\", function (event) {\r\n  event.preventDefault();\r\n  loginForm.style.display = \"none\";\r\n  registerForm.style.display = \"block\";\r\n});\r\n\r\n// Показ модального окна \"Забыли пароль?\" и скрытие формы входа\r\nforgotPasswordBtn.addEventListener(\"click\", function (event) {\r\n  event.preventDefault();\r\n  loginForm.style.display = \"none\";\r\n  forgotPasswordModal.style.display = \"block\";\r\n});\r\n\r\n// Закрытие модального окна при клике вне его области\r\nwindow.addEventListener(\"click\", function (event) {\r\n  if (event.target === forgotPasswordModal) {\r\n    forgotPasswordModal.style.display = \"none\";\r\n  }\r\n});\r\n\r\n// Вход в систему\r\nloginButton.addEventListener(\"click\", function (event) {\r\n  event.preventDefault();\r\n  loginForm.style.display = \"none\";\r\n  mainContent.style.display = \"flex\";\r\n});\r\n\r\n// Регистрация пользователя\r\nregisterButton.addEventListener(\"click\", function (event) {\r\n  event.preventDefault();\r\n  registerForm.style.display = \"none\";\r\n  mainContent.style.display = \"flex\";\r\n});\r\n\r\n// Обработчик для переключения на \"Идеи\"\r\nideasMenuItem.addEventListener(\"click\", function () {\r\n  ideasFeed.style.display = \"block\"; // Показать ленту идей\r\n  projectsFeed.style.display = \"none\"; // Скрыть ленту проектов\r\n});\r\n\r\n// Обработчик для переключения на \"Задачи\" или \"Проекты\"\r\nprojectsMenuItem.addEventListener(\"click\", function () {\r\n  ideasFeed.style.display = \"none\"; // Скрыть ленту идей\r\n  projectsFeed.style.display = \"block\"; // Показать ленту проектов\r\n});\r\n\n\n//# sourceURL=webpack://hackaton_vyzov/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;