/*
  div
    //data-dropdown-target можно не указывать если оно стоит после кнопки
    button(class="dropdown-button" data-dropdown-target="youCanSkipIt")

    //arrow-icon не обязательно, если не надо
    svg(class="arrow-icon" data-rotation="from,to")

    //меню, можно пропустить указывание id если оно стоит после кнопки
    div(id="youCanSkipIt")
*/


document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.dropdown-button');

  // Настройки Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Меню будет считаться видимым при пересечении более 50% с кнопкой
  };

  // Создание экземпляра Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Обработка каждой кнопки
  dropdownButtons.forEach(function (button) {
    // Поиск всех стрелок внутри кнопки
    const arrowIcons = button.querySelectorAll('.arrow-icon');

    // Получение элемента выпадающего меню
    const dropdownMenuSelector = button.getAttribute('data-dropdown-target');
    console.log("dropdownMenuSelector =>" + dropdownMenuSelector)
    const dropdownMenu = dropdownMenuSelector ? document.querySelector('#' + dropdownMenuSelector) : button.nextElementSibling;
    console.log("dropdownMenu =>" + dropdownMenu)
    // Добавление начального и конечного углов поворота в атрибут data-rotation
    arrowIcons.forEach(function (arrowIcon) {
      if (arrowIcon.dataset.rotation !== undefined) {
        const rotations = arrowIcon.dataset.rotation.split(','); // Разделение атрибута на массив [first, second]
        arrowIcon.dataset.startRotation = rotations[0];
        arrowIcon.dataset.endRotation = rotations[1];
      }
    });

    // Использование Intersection Observer для определения видимости кнопки
    observer.observe(button);



    // Обработчик события клика по кнопке
    button.addEventListener('click', function () {
      // Затемнение фона вокруг кнопки и блокировка прокрутки страницы
      const eclipseAttribute = button.getAttribute('eclipse');
      const shouldApplyEclipse = eclipseAttribute !== null && eclipseAttribute.toLowerCase() === 'true';

      if (shouldApplyEclipse) {
        toggleEclipse(button);
      }
      // Переключаем видимость меню
      dropdownMenu.classList.toggle('hidden');

      // Обновление угла поворота для каждой стрелки при клике
      arrowIcons.forEach(function (arrowIcon) {
        if (arrowIcon.dataset.startRotation !== undefined && arrowIcon.dataset.endRotation !== undefined) {
          const rotation = dropdownMenu.classList.contains('hidden') ? arrowIcon.dataset.startRotation : arrowIcon.dataset.endRotation;
          requestAnimationFrame(() => {
            arrowIcon.style.transform = `rotate(${rotation}deg)`; // Добавлено "deg" для учета единиц измерения угла
          });
        }
      });
    });
  });

  // Обработчик пересечения кнопки с видимой областью
  function handleIntersection(entries) {
    entries.forEach(function (entry) {
      const button = entry.target;

      // Получение элемента выпадающего меню
      const dropdownMenuSelector = button.getAttribute('data-dropdown-target');
      const dropdownMenu = dropdownMenuSelector ? document.querySelector('#' + dropdownMenuSelector) : button.nextElementSibling;

      // Обновление угла поворота для каждой стрелки только при видимости кнопки
      if (entry.isIntersecting) {
        button.querySelectorAll('.arrow-icon').forEach(function (arrowIcon) {
          if (arrowIcon.dataset.startRotation !== undefined && arrowIcon.dataset.endRotation !== undefined) {
            const rotation = dropdownMenu.classList.contains('hidden') ? arrowIcon.dataset.startRotation : arrowIcon.dataset.endRotation;
            requestAnimationFrame(() => {
              arrowIcon.style.transform = `rotate(${rotation}deg)`; // Добавлено "deg" для учета единиц измерения угла
            });
          }
        });
      }
    });
  }

  // Применение/удаление затемнения фона и блокировки прокрутки
  function toggleEclipse() {
    const overlay = document.querySelector('.eclipse-overlay');
    const bodyOverflow = document.body.style.overflow;

    if (!overlay && bodyOverflow !== 'hidden') {
      // Создание нового затемненного фона
      const newOverlay = document.createElement('div');
      newOverlay.className = 'eclipse-overlay';
      document.body.appendChild(newOverlay);
      // Запрет прокрутки страницы
      document.body.style.overflow = 'hidden';
    } else if (overlay && bodyOverflow === 'hidden') {
      // Удаление затемненного фона
      document.body.removeChild(overlay);
      document.body.style.overflow = 'auto';
    }
  }
});