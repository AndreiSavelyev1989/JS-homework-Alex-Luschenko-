// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while
let btn_1 = document.querySelector('.b-1');
let out_1 = document.querySelector('.out-1');

function func_1() {
    let i = 0;
    while (i <= 100) {
        out_1.textContent += `${i} `;
        i++;
    }
}

btn_1.onclick = () => {
    func_1();
}


// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while
let btn_2 = document.querySelector('.b-2');
let out_2 = document.querySelector('.out-2');
let inp_2_1 = document.querySelector('.inp-2-1');
let inp_2_2 = document.querySelector('.inp-2-2');

function func_2(a, b) {
    a = +inp_2_1.value;
    b = +inp_2_2.value;

    if (a > b) {
        alert('Warning!!! The first number must be less than the second!')
    }

    while (a <= b) {
        out_2.textContent += `${a} `;
        a++;
    }
}

btn_2.onclick = () => {
    func_2();
    inp_2_1.value = '';
    inp_2_2.value = '';
}

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while
let btn_3 = document.querySelector('.b-3');
let out_3 = document.querySelector('.out-3');
let inp_3_1 = document.querySelector('.inp-3-1');
let inp_3_2 = document.querySelector('.inp-3-2');

function func_3(a, b) {
    a = +inp_3_1.value;
    b = +inp_3_2.value;

    if (a > b) {
        alert('Warning!!! The first number must be less than the second!')
    }

    while (b >= a) {
        out_3.textContent += `${b} `;
        b--;
    }
}

btn_3.onclick = () => {
    func_3();
    inp_3_1.value = '';
    inp_3_2.value = '';
}

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while
let btn_4 = document.querySelector('.b-4');
let out_4 = document.querySelector('.out-4');
let inp_4_1 = document.querySelector('.inp-4-1');
let inp_4_2 = document.querySelector('.inp-4-2');
let inp_4_3 = document.querySelector('.inp-4-3');

function func_4(a, b, c) {
    a = +inp_4_1.value;
    b = +inp_4_2.value;
    c = +inp_4_3.value;

    if (a > b) {
        alert('Warning!!! The first number must be less than the second!')
    }

    while (b >= a) {
        if (b % c == 0) {
            out_4.textContent += '';
        }
        else {
            out_4.textContent += `${b} `;
        }
        b--;
    }
}

btn_4.onclick = () => {
    func_4();
    inp_4_1.value = '';
    inp_4_2.value = '';
    inp_4_3.value = '';
}

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.
let btn_5 = document.querySelector('.b-5');
let out_5 = document.querySelector('.out-5');

function func_5() {
    let i = 0;
    let sum = 0;

    while (i <= 20) {
        sum = sum + i;
        out_5.textContent = sum;
        i++;
    }
}

btn_5.onclick = () => {
    func_5();
}

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.
let btn_6 = document.querySelector('.b-6');
let out_6 = document.querySelector('.out-6');
let inp_6_1 = document.querySelector('.inp-6-1');
let inp_6_2 = document.querySelector('.inp-6-2');

function func_6(a, b) {
    a = +inp_6_1.value;
    b = +inp_6_2.value;
    let sum = 0;

    if (a > b) {
        out_6.textContent = false;
    }

    while (a <= b) {
        if (a <= b) {
            sum = a + sum;
            out_6.textContent = sum;
        }
        a++;
    }
}

btn_6.onclick = () => {
    func_6();
    inp_6_1.value = '';
    inp_6_2.value = '';
}

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.
let btn_7 = document.querySelector('.b-7');
let out_7 = document.querySelector('.out-7');
let inp_7_1 = document.querySelector('.inp-7-1');
let inp_7_2 = document.querySelector('.inp-7-2');

function func_7(a, b) {
    a = +inp_7_1.value;
    b = +inp_7_2.value;
    let multi = 1;

    if (a > b) {
        out_7.textContent = false;
    }

    while (a <= b) {
        if (a <= b) {
            multi = a * multi;
            out_7.textContent = multi;
        }
        a++;
    }
}

btn_7.onclick = () => {
    func_7();
    inp_7_1.value = '';
    inp_7_2.value = '';
}

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.
let btn_8 = document.querySelector('.b-8');
let out_8 = document.querySelector('.out-8');

function func_8() {
    let day = 1;
    let coin = 333;
    let multi = 2;
    let summ;
    summ = coin * multi;

    while (summ <= 1000000) {
        day++;
        summ = summ * multi;
        if (summ >= 1000000) {
            out_8.textContent += `${day} `;
        }
    }
}

btn_8.onclick = () => {
    func_8();
}

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).
let btn_9 = document.querySelector('.b-9');
let out_9 = document.querySelector('.out-9');
let inp_9_1 = document.querySelector('.inp-9-1');
let inp_9_2 = document.querySelector('.inp-9-2');

function func_9(a, b) {
    a = +inp_9_1.value;
    b = +inp_9_2.value;

    if (a > b) {
        alert('Warning!!! The first number must be less than the second!')
    }

    while (a <= b) {
        if (a % 2 == 0) {
            out_9.textContent += '0 ';
        }
        else {
            out_9.textContent += `${a} `;
        }
        a++;
    }
}

btn_9.onclick = () => {
    func_9();
    inp_9_1.value = '';
    inp_9_2.value = '';
}

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *
let btn_10 = document.querySelector('.b-10');
let out_10 = document.querySelector('.out-10');

function func_10() {
    let i = 1;
    let k = 6;
    let star = '* ';
    let star_2 = '** ';

    while (i <= k) {
        if (i % 2 == 0) {
            out_10.innerHTML += `${star} <br>`;
        }
        else {
            out_10.innerHTML += `${star_2} <br>`;
        }
        i++;
    }
}

btn_10.onclick = () => {
    func_10();
}

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.
let btn_11 = document.querySelector('.b-11');
let out_11 = document.querySelector('.out-11');

function func_11() {
    let i = 10;
    let k = 1;

    while (i > 0 && k <= 10) {
        out_11.textContent += `${i} ${k} `;
        i--;
        k++;
    }
}

btn_11.onclick = () => {
    func_11();
}

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

    let a = 0;
    do
        console.log('do while work');
    while (a < 0);

    let b = 0;
    while (b < 0) {
        console.log('while work');
    }
}

console.log(func_12());

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.
let btn_13 = document.querySelector('.b-13');
let out_13 = document.querySelector('.out-13');

function func_13() {
    let result = '';
    let num = 100;

    do {
        result += `${num} `;
        num--;
    }

    while (num >= 0) {
        out_13.textContent += result;
    }
}

btn_13.onclick = () => {
    func_13();
}

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.
let btn_14 = document.querySelector('.b-14');
let out_14 = document.querySelector('.out-14');

function func_14() {
    let day = 1;
    let coal = 5;
    let summ = 132;

    do {
        day++;
        coal += coal * 0.3;
    }
    while (coal <= summ) {
        out_14.textContent += day;
    }
}

btn_14.onclick = () => {
    func_14();
}

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.
let btn_15 = document.querySelector('.b-15');
let out_15 = document.querySelector('.out-15');

function func_15() {
    let day = 1;
    let boiler = 568;
    let potion = 1.1;
    let summPotion = 1.1;

    do {
        day++;
        potion += 0.3;
        summPotion += potion;
    }
    while (boiler >= summPotion) {
        out_15.textContent += day;
    }
}

btn_15.onclick = () => {
    func_15();
}

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.
let btn_16 = document.querySelector('.b-16');
let out_16 = document.querySelector('.out-16');
let p_16 = document.querySelectorAll('.task-16');

function func_16() {
    let i = 0;

    do {
        i++;
        if (i % 2 == 0) {
            out_16.innerHTML += `${i} `;
        }
        else {
            out_16.innerHTML += `false `;
        }
    }
    while (i < p_16.length)
}

btn_16.onclick = () => {
    func_16();
}

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.
let btn_17 = document.querySelector('.b-17');

function func_17() {
    let i = 0;
    let k = 1;

    do {
        p_16[i].textContent += `${k} `;
        i++;
        k++;
    }
    while (i < p_16.length)
}

btn_17.onclick = () => {
    func_17();
}


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.
let btn_18 = document.querySelector('.b-18');
let p_18 = document.querySelectorAll('.task-18');

function func_18() {
    let i = 0;
    let k = 3;

    do {
        p_18[i].textContent += `${k} `;
        i++;
        k--;
    }
    while (i < p_18.length)
}

btn_18.onclick = () => {
    func_18();
}


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.
let btn_19 = document.querySelector('.b-19');
let out_19 = document.querySelector('.out-19');

function func_19() {
    let i = 0;

    do {
        i++;
        if (i % 2 == 0) {
            out_19.textContent += '* ';
        }
        else {
            out_19.textContent += `${i} `;
        }
    }
    while (i < 19)
}

btn_19.onclick = () => {
    func_19();
}

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1
let btn_20 = document.querySelector('.b-20');
let out_20 = '';

function func_20() {
    let one = 1;

    for (i = 1; i < 5; i++) {
        for (k = 1; k < 5; k++) {
            if (k == i) {
                out_20 += `${one} `;
            }
            else {
                out_20 += `* `;
            }
        }
        out_20 += '<br>';
    }
    document.querySelector('.out-20').innerHTML = out_20;
}

btn_20.onclick = () => {
    func_20();
}