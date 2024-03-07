document.addEventListener('DOMContentLoaded', function () {
  // Объявляем переменную для хранения ссылки на последнюю нажатую кнопку
  let lastClickedButton = null;

  // Получаем все элементы с классом 'modal-dir'
  const modalDirs = document.querySelectorAll('.modal-dir');

  // Добавляем обработчик события клика для каждого элемента 'modal-dir'
  modalDirs.forEach(function (modalDir) {
    modalDir.addEventListener('click', async function () {
      // Получаем уникальный идентификатор модального окна из атрибута data-modal-id
      const modalId = modalDir.getAttribute('data-modal-id');
      const modal = document.getElementById(modalId);

      // Сохраняем ссылку на последнюю нажатую кнопку
      lastClickedButton = modalDir;

      // Отображаем модальное окно, убирая у него класс 'hidden'
      modal.classList.remove('hidden');

      // Закрываем доступ к основной странице
      document.body.style.overflow = 'hidden';

      // Фокусируемся на модальном окне
      modal.focus();

      // Прокручиваем к модальному окну с использованием Promise
      await smoothScroll(modal);

      // Добавляем обработчик события клика для кнопки закрытия внутри модального окна
      const modalClose = modal.querySelector('.modal-close');
      modalClose.addEventListener('click', async function () {
        // Прокручиваем к последней нажатой кнопке с использованием Promise
        if (lastClickedButton) {
          await smoothScroll(lastClickedButton);
        }
        // Добавляем задержку перед скрытием модального окна
        setTimeout(() => {
          // Закрываем модальное окно, добавляя ему класс 'hidden'
          modal.classList.add('hidden');

          // Восстанавливаем доступ к основной странице
          document.body.style.overflow = 'auto';
        }, 500); // Задержка в миллисекундах (в данном случае 500 мс)
      });
    });
  });
});

  // Функция для плавной прокрутки с использованием Promise
  function smoothScroll(element) {
    return new Promise(resolve => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });

      // Добавляем обработчик события окончания прокрутки
      const onScroll = () => {
        // Удаляем обработчик события
        window.removeEventListener('scroll', onScroll);
        // Разрешаем Promise после завершения прокрутки
        resolve();
      };
      window.addEventListener('scroll', onScroll);
    }
  );
}
