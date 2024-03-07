/*
Установка атрибутов для кнопки показа
button(class="modal-dir" data-modal-id="filter_menu")
  class="modal-dir"
  data-modal-id="id элемента с модальным окном"
Установка атрибутов для модального окна
  id="id окна"
Установка атрибутов для кнопки закрытия
div(class="modal-close cursor-pointer")
  class="close-modal"
*/

document.addEventListener('DOMContentLoaded', function () {
  let lastClickedButton = null;

  // Создаем новый экземпляр Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Если элемент видимый, добавляем обработчик события
      if (entry.isIntersecting) {
        const modalDir = entry.target;
        setupModalDir(modalDir);
        observer.unobserve(modalDir); // Прекращаем отслеживание после обработки
      }
    });
  });

  // Получаем все элементы с классом 'modal-dir' и начинаем отслеживание
  const modalDirs = document.querySelectorAll('.modal-dir');
  modalDirs.forEach(modalDir => {
    observer.observe(modalDir);
  });

  // Общая функция для настройки каждого 'modal-dir'
  function setupModalDir(modalDir) {
    modalDir.addEventListener('click', function () {
      const modalId = modalDir.getAttribute('data-modal-id');
      const modal = document.getElementById(modalId);
      const eclipseAttribute = modalDir.getAttribute('eclipse');
      const shouldApplyEclipse = eclipseAttribute !== null && eclipseAttribute.toLowerCase() === 'true';

      if (shouldApplyEclipse) {
        toggleEclipse();
      }

      lastClickedButton = modalDir;
      document.body.style.overflow = 'hidden';

      modal.classList.remove('hidden');
      modal.focus();
      smoothScroll(modal);

      const modalCloses = modal.querySelectorAll('.modal-close');
      modalCloses.forEach(function (modalClose) {
        modalClose.addEventListener('click', function () {
          if (shouldApplyEclipse) {
            toggleEclipse();
          }
          if (lastClickedButton) {
            smoothScroll(lastClickedButton);
          }
          setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
          }, 100);
        });
      });

      const modalCloseAll = modal.querySelector('.modal-close-all');
      if (modalCloseAll) {
        modalCloseAll.addEventListener('click', function () {
          setTimeout(() => {
            modalDirs.forEach(function (dir) {
              const currentModalId = dir.getAttribute('data-modal-id');
              const currentModal = document.getElementById(currentModalId);
              if (currentModal) {
                currentModal.classList.add('hidden');
              }
            });
            document.body.style.overflow = 'auto';
          }, 100);
        });
      }
    });
  }

  // Функция для прокрутки к элементу
  function smoothScroll(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

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
      document.body.style.overflow = 'hidden';
    }
  }
});

