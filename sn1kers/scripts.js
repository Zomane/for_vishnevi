document.querySelectorAll('.basketItem').forEach(el => { // Находим все элементы корзины (каждый товар)
    const counter = el.querySelector('.quantityNumber'); // Находим элемент, где отображается количество товара
    let count = Number(counter.innerText); // Получаем текущее количество из текста и превращаем в число

    // Находим кнопки увеличения и уменьшения количества
    const plusBtn = el.querySelector('.plus');
    const minusBtn = el.querySelector('.minus');

    plusBtn.addEventListener('click', () => {
        count++; // увеличиваем значение
        counter.innerText = count; // обновляем текст на экране
    });

    minusBtn.addEventListener('click', () => {
        if (count > 1) {
            count--; // уменьшаем значение
            counter.innerText = count; // обновляем текст
        }
    });
});

