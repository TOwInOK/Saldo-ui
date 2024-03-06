document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.dropdown-button');

  dropdownButtons.forEach(function (button) {
    const arrowIcon = button.querySelector('.arrow-icon');
    const arrowIcon_90 = button.querySelector('.arrow-icon-90');
    const dropdownMenu = button.nextElementSibling; // Получаем следующий элемент (div.dropdown-menu)

    button.addEventListener('click', function () {
      // Переключаем видимость меню
      dropdownMenu.classList.toggle('hidden');

      // Поворот стрелки в зависимости от состояния меню
      if (typeof arrowIcon !== 'undefined' && arrowIcon !== null) {
        // arrowIcon существует
        arrowIcon.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
      } else if (typeof arrowIcon_90 !== 'undefined' && arrowIcon_90 !== null) {
        // arrowIcon_90 существует
        arrowIcon_90.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(90deg)' : 'rotate(270deg)';
      }
    });
  });

  // Закрытие меню при клике вне него
  document.addEventListener('click', function (event) {
    dropdownButtons.forEach(function (button) {
      const dropdownMenu = button.nextElementSibling;

      if (typeof arrowIcon !== 'undefined' && arrowIcon !== null) {
        // arrowIcon существует
        arrowIcon.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
      } else if (typeof arrowIcon_90 !== 'undefined' && arrowIcon_90 !== null) {
        // arrowIcon_90 существует
        arrowIcon_90.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(90deg)' : 'rotate(180deg)';
      }
    });
  });
});
