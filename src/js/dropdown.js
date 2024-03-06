document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    const button = event.target.closest('.dropdown-button');
    // Проверяем, кликнули ли мы на кнопку
    if (button) {
      const dropdownMenu = button.nextElementSibling; // Получаем следующий элемент (div.dropdown-menu)
      const arrowIcons = button.querySelectorAll('.arrow-icon, .arrow-icon-90, .arrow-icon-180');

      dropdownMenu.classList.toggle('hidden');
      arrowIcons.forEach(arrow => {
        switch (arrow) {
          case arrow.classList.contains('arrow-icon'): {
            arrow.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            break;
          }
          case arrow.classList.contains('arrow-icon-90'): {
            arrow.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(90deg)' : 'rotate(270deg)';
            break;
          }
          case arrow.classList.contains('arrow-icon-180'): {
            arrow.style.transform = dropdownMenu.classList.contains('hidden') ? 'rotate(180deg)' : 'rotate(360deg)';
            break;
          }
        }
      });
    } else {
      // Закрываем все открытые меню, если клик был вне
      closeAllDropdowns(event);
    }
  });

  function closeAllDropdowns(event) {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(button => {
      const dropdownMenu = button.nextElementSibling;
      if (!button.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        const arrowIcons = button.querySelectorAll('.arrow-icon, .arrow-icon-90, .arrow-icon-180');
        arrowIcons.forEach(arrow => {
          switch (arrow) {
            case arrow.classList.contains('arrow-icon'): {
              arrow.style.transform = 'rotate(0deg)';
              break;
            }
            case arrow.classList.contains('arrow-icon-90'): {
              arrow.style.transform = 'rotate(90deg)';
              break;
            }
            case arrow.classList.contains('arrow-icon-180'): {
              arrow.style.transform = 'rotate(180deg)';
              break;
            }
          }
        });
      }
    });
  }
});