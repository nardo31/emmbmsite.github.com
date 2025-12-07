document.addEventListener('DOMContentLoaded', function() {
    // Конфигурация с изображениями для разных цветов
    const colorConfig = {
        'white': {
            merch: '../images/merch/mrch.png',
            tshirt: '../images/merch/t-sh.png',
            buttonClass: 'clr'
        },
        'red': {
            merch: '../images/merch/mrch2.png',
            tshirt: '../images/merch/t-sh.png',
            buttonClass: 'clr2'
        }
    };
    
    // Находим все кнопки выбора цвета
    const colorButtons = document.querySelectorAll('.clr, .clr2');
    const merchImage = document.querySelector('.home-img');
    const tshirtImage = document.querySelector('.futb');
    
    // Добавляем обработчик на каждую кнопку
    colorButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Определяем какой цвет выбрали
            let color;
            if (this.classList.contains('clr')) {
                color = 'white';
            } else if (this.classList.contains('clr2')) {
                color = 'red';
            }
            
            // Если определили цвет, меняем изображения
            if (color && colorConfig[color]) {
                if (merchImage) {
                    merchImage.src = colorConfig[color].merch;
                    merchImage.alt = `Мерч ${color === 'white' ? 'белый' : 'красный'}`;
                }
                
                if (tshirtImage) {
                    tshirtImage.src = colorConfig[color].tshirt;
                    tshirtImage.alt = `ФУТБОЛКА ${color === 'white' ? 'белая' : 'красная'}`;
                }
                
                // Убираем активный класс со всех кнопок
                colorButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                this.classList.add('active');
            }
        });
    });
});