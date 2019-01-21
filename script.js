window.addEventListener('load', function onWindowLoad() {
    // кнопки калькулятора
    var btns = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'C'
    ];

    //получаем форму калькулятора
    var calc = document.getElementById('calc');

    //получаем поле с вычислениями
    var input = document.getElementById('input');

    //добавление кнопок
    btns.forEach(function (btn) {
        var btnElement = document.createElement('div');
        btnElement.className = 'btn';
        btnElement.innerHTML = btn;
        calc.appendChild(btnElement);
    });

    //добавляем обработчик на клик кнопки
    document.querySelectorAll('#app .btn').forEach(function (button){
        //добавляем действие при клике
        button.addEventListener('click', onButtonClick);
    });

    function onButtonClick(e) {
        //e содержит информацию о событии мыши
        if (e.target.innerHTML === 'C') {
            //стереть всё, если нажата С
            input.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            //вычисление выражения
            input.innerHTML = eval(input.innerHTML);
        } else if (input.innerHTML === '0') {
            //если инпут содержит 0, то стереть 0 и записать значение кнопки в поле
            input.innerHTML = e.target.innerHTML;
        } else {
            //добавляение кнопки в текстовое поле
            input.innerHTML += e.target.innerHTML; 
        }
    }
});