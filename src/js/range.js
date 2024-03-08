import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('priceRange');
  const priceFromInput = document.getElementById('priceFrom');
  const priceToInput = document.getElementById('priceTo');

  noUiSlider.create(slider, {
    start: [0, 200000],
    connect: true,
    range: {
      'min': 0,
      'max': 600_000
    },
    format: {
      to: function (value) {
        // Округляем число до целого и добавляем ',-'
        return value.toFixed(0) + ',-';
      },
      from: function (value) {
        // Удаляем ',-' и конвертируем строку обратно в число
        return Number(value.replace(',-', ''));
      }
    },
    step: 100,
  });


  slider.noUiSlider.on('update', function (values, handle) {
    const value = values[handle];
    if (handle === 0) { // Handle for the lower thumb
      priceFromInput.value = parseInt(value, 10).toLocaleString('ru-RU');
    } else { // Handle for the upper thumb
      priceToInput.value = parseInt(value, 10).toLocaleString('ru-RU');
    }
  });

  priceFromInput.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
  });

  priceToInput.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
  });
});