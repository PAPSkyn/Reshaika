document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn_confirm');
    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // 1. Получаем введённые значения
            const inputs = document.querySelectorAll('.task-input');
            const userAnswers = {};

            inputs.forEach(input => {
                const taskNum = input.getAttribute('data-task');
                userAnswers[taskNum] = input.value.trim();
            });

            // Сохраняем как JSON-строку
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

            // 4. Переход на страницу результатов
            // window.location.href = '../../result.html';

            // переходим к тестированию
            window.location.href = '../../tests/ege_math_test_var1.html';
        });
    }
});