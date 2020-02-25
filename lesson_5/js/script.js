// Task 1.
// Выведите в консоль с помощью цикла числа от 1 до 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2.
// Выведите на страницу с помощью цикла числа от 1 до 10.
let out_1 = '';

for (let i = 1; i <= 10; i++) {
    out_1 += i + ' ';
}
document.querySelector('#out_1').innerHTML = out_1;


// Task 3.
// Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.
let out_2 = '';

for (let i = 10; i >= 0; i--) {
    out_2 += i + ' ';
}
document.querySelector('#out_2').innerHTML = out_2;


// Task 4.
// Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.
let out_3 = '';

for (let i = 0; i <= 10; i += 2) {
    out_3 += i + ' ';
}
document.querySelector('#out_3').innerHTML = out_3;


// Task 5.
// Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.
let out_4 = '';

for (let i = 21; i >= 0; i -= 3) {
    out_4 += i + ' ';
}
document.querySelector('#out_4').innerHTML = out_4;


// Task 6.
// Используя строку ****** - нарисуйте квадрат 6х6 и выведите его на страницу.
let out_5 = '';

for (i = 0; i < 6; i++) {
    out_5 += '******' + '<br>';
}
document.querySelector('#out_5').innerHTML = out_5;


// Task 7.
// Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от введенного пользователем в input до нуля.
let btn_6 = document.querySelector('#btn_6');
let inp_6 = document.querySelector('#inp_6');
let out_6 = '';

btn_6.onclick = () => {

    for (let i = inp_6.value; i >= 0; i--) {
        out_6 += i + ' ';
        inp_6.value = '';
    }
    document.querySelector('#out_6').innerHTML = out_6;
}


// Task 8.
// Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем чисел. Считаем что второе число всегда больше первого.
let inp_7 = document.querySelector('#inp_7');
let inp_8 = document.querySelector('#inp_8');
let btn_7 = document.querySelector('#btn_7');
let out_7 = '';

btn_7.onclick = () => {
    let n1 = +inp_7.value;
    let n2 = +inp_8.value;

    for (let i = n1; i <= n2; i++) {
        out_7 += i + ' ';
        inp_7.value = '';
        inp_8.value = '';
    }
    document.querySelector('#out_7').innerHTML = out_7;
}


// Task 9.
// Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод, если нет - выводим alert о ошибке.
let inp_9 = document.querySelector('#inp_9');
let inp_10 = document.querySelector('#inp_10');
let btn_8 = document.querySelector('#btn_8');
let out_8 = '';

btn_8.onclick = () => {
    let n1 = +inp_9.value;
    let n2 = +inp_10.value;

    if (n2 > n1) {

        for (let i = n1; i <= n2; i++) {
            out_8 += i + ' ';
            inp_9.value = '';
            inp_10.value = '';
        }
    }
    else {
        alert('Warning error!!! The first number must be less than the second');
    }
    document.querySelector('#out_8').innerHTML = out_8;
}


// Task 10.
// Выведите на страницу все четные годы в промежутке от 1901 до 1950.
let out_9 = '';

for (let i = 1901; i <= 1950; i++) {
    if (i % 2 == 0)
        out_9 += i + ' ';
}
document.querySelector('#out_9').innerHTML = out_9;


// Task 11.
// Создайте несколько div.one. С помощью length выведите количество div.one на странице.
let divOne = document.querySelectorAll('.one');
let out_10 = document.querySelector('#out_10');

out_10.innerHTML = divOne.length;


// Task 12.
// Создайте кнопку, при нажатии на которую запускается функция. Функция окрашивает все div.one в оранжевый цвет.
let btnOne = document.querySelector('#btn_one');

btnOne.onclick = () => {
    // Используем divOne из Task 11
    for (let i = 0; i < divOne.length; i++) {
        divOne[i].style.background = 'orange';
    }

}

// Task 13.
// Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль содержимое всех div.one.
let btnOne_2 = document.querySelector('#btn_one_2');

btnOne_2.onclick = () => {
    // Используем divOne из Task 11
    for (let i = 0; i < divOne.length; i++) {
        console.log(divOne[i].innerText);
    }
}


// Task 14.
// Создайте кнопку, при нажатии на которую запускается функция. Функция для всех input[type="text"] устанавливает свойство placeholder = 'Введите данные'
let inpText = document.querySelectorAll('input[type = "text"]');
let btnText = document.querySelector('#btn_text');

btnText.onclick = () => {
    for (let i = 0; i < inpText.length; i++) {
        inpText[i].placeholder = 'Введите данные';
    }
}


// Task 15.
// Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль количество input[type="text"]
let btnText_2 = document.querySelector('#btn_text_2');

btnText_2.onclick = () => {
    // inpText взят из Task 14    
    console.log(inpText.length);
}


// Task 16.
// Создайте три связанных radiobutton[name="p1"]. Задайте им value. При нажатии на кнопку выводите на страницу value выбранного.
let inpRadio = document.querySelectorAll('input[name = "p1"]');
let btnRadio = document.querySelector('#btn_radio');
let out_11 = document.querySelector('#out_11');

btnRadio.onclick = () => {
    event.preventDefault();
    for (let i = 0; i < inpRadio.length; i++) {
        if (inpRadio[i].checked)
            out_11.innerHTML = inpRadio[i].value;
    }
}


// Task 17.
// Добавьте кнопку. При нажатии кнопки делайте первый из созданных radiobutton в примере выше - checked.
let btnRadio_2 = document.querySelector('#btn_radio_2');
let formInpRadio = document.querySelector('#inp_radio');

btnRadio_2.onclick = () => {

    formInpRadio.elements.inp_radio_1.checked = true;

}


// Task 18.
// Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. Первому элементу присвойте value = 0, второму value = 1 и т.д.
let btnRadio_3 = document.querySelector('#btn_radio_3');
let labelRad_1 = document.querySelector('#label_rad_1');
let labelRad_2 = document.querySelector('#label_rad_2');
let labelRad_3 = document.querySelector('#label_rad_3');

// изменяем HTML Task 16
btnRadio_3.onclick = () => {
    for (i = 0; i < inpRadio.length; i++) {
        inpRadio[0].value = '0'
        inpRadio[1].value = '1'
        inpRadio[2].value = '2'

        labelRad_1.innerHTML = inpRadio[0].value;
        labelRad_2.innerHTML = inpRadio[1].value;
        labelRad_3.innerHTML = inpRadio[2].value;
    }
}


// Task 19.
// Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при нажатии на котору проверяйте value выбранного элемента. Если оно не равно 6 - выводите false, если равно - true.
let inpRadio_2 = document.querySelectorAll('input[name = "p2"]');
let btnRadio_4 = document.querySelector('#btn_radio_4');
let out_12 = document.querySelector('#out_12');

btnRadio_4.onclick = () => {
    event.preventDefault();

    for (let i = 0; i < inpRadio_2.length; i++) {
        if (inpRadio_2[i].checked)
            if (inpRadio_2[i].value == 6) {
                out_12.innerHTML = 'True';
            }
            else {
                out_12.innerHTML = 'False';
            }
    }
}


// Task 20.
// Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. При изменении состояния input - выводите в консоль текст "был изменен input"
let inpRadio_3 = document.querySelectorAll('input[name = "p3"]');

for (let i = 0; i < inpRadio_3.length; i++) {
    inpRadio_3[i].oninput = () => {
        console.log('Был изменен input');
    }
}