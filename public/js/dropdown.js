//Dropdown all
document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.dropdown-button');

  dropdownButtons.forEach(function (button) {
  const arrowIcon = button.querySelector('.arrow-icon');

  button.addEventListener('click', function () {
  const dropdownMenu = this.nextElementSibling; // Получаем следующий элемент (div.dropdown-menu)

  // Переключаем видимость меню
  dropdownMenu.classList.toggle('hidden');

  // Поворот стрелки на 180 градусов при открытии, иначе 0 градусов
  arrowIcon.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
});
});

  // Закрытие меню при клике вне него
  document.addEventListener('click', function (event) {
  dropdownButtons.forEach(function (button) {
  const dropdownMenu = button.nextElementSibling;

  if (!button.contains(event.target) && !dropdownMenu.contains(event.target)) {
  dropdownMenu.classList.add('hidden');
  button.querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
}
});
});
});
