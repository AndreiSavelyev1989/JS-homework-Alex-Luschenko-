// Task 1.
// Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
// let a1 = 8;
// function t1() {
// }
// document.querySelector(‘.b-1’).onclick = t1;

let out_1 = document.querySelector('.out-1');
let btn_1 = document.querySelector('.b-1');
let a1 = 8;

function t1() {
    return out_1.textContent = a1;
}
btn_1.onclick = t1;


// Task 2.
// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.
// let a2 = 8;
// function t2() {
// }
// document.querySelector(‘.b-2’).onclick =function() {
//     document.querySelector(‘.out-2’).textContent = f2();
// }

let out_2 = document.querySelector('.out-2');
let btn_2 = document.querySelector('.b-2');
let a2 = 8;

function t2() {
    return a2;
}
btn_2.onclick = function () {
    out_2.textContent = t2();
}


// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.

// function t3(a,b) {

// }
// document.querySelector(‘.b-3-1’).onclick =function() {
//     document.querySelector(‘.out-3-1’).textContent = t3(3,4);
// }
// document.querySelector(‘.b-3-2’).onclick = function(){
//     document.querySelector(‘.out-3-2’).textContent = t3(5,6);
// }
let out_3_1 = document.querySelector('.out-3-1');
let out_3_2 = document.querySelector('.out-3-2');
let btn_3_1 = document.querySelector('.b-3-1');
let btn_3_2 = document.querySelector('.b-3-2');

function t3(a, b) {
    return a * b;
}
btn_3_1.onclick = function () {
    out_3_1.textContent = t3(3, 4);
}
btn_3_2.onclick = function () {
    out_3_2.textContent = t3(5, 6);
}


// Task 4.
// Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.
let inp_4 = document.querySelector('.inp-4');
let btn_4 = document.querySelector('.b-4');
let out_4 = document.querySelector('.out-4');

function t4(thisYear, yearOfBirth) {
    thisYear = 2019;
    yearOfBirth = inp_4.value;
    return thisYear - yearOfBirth;
}

btn_4.onclick = function () {
    out_4.textContent = t4();
    inp_4.value = '';
}


// Task 5.
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.
let inp_5 = document.querySelector('.inp-5');
let btn_5 = document.querySelector('.b-5');
let out_5 = document.querySelector('.out-5');

function t5(name) {
    name = inp_5.value;
    return 'Hello ' + name;
}

btn_5.onclick = () => {
    out_5.textContent = t5();
    inp_5.value = '';
}


// Task 6.
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.
let inp_6_1 = document.querySelector('.inp-6-1');
let inp_6_2 = document.querySelector('.inp-6-2');
let btn_6 = document.querySelector('.b-6');
let out_6 = document.querySelector('.out-6');

function t6(minNum, maxNum) {
    minNum = +inp_6_1.value;
    maxNum = +inp_6_2.value;
    let randomNumber = minNum + Math.random() * (maxNum + 1 - minNum);
    return Math.floor(randomNumber);
}

btn_6.onclick = () => {
    out_6.textContent = t6();
}


// Task 7.
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z) (строка). Где x,y,z - случайные числа в диапазоне [0, 255].
let btn_7 = document.querySelector('.b-7');
let out_7 = document.querySelector('.out-7');

function t7(x, y, z) {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    return `rgb(${x}, ${y}, ${z})`;
}

btn_7.onclick = () => {
    out_7.textContent = t7();
}


// Task 8.
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim.
let btn_8 = document.querySelector('.b-8');
let out_8 = document.querySelector('.out-8');
let inp_8 = document.querySelector('.inp-8');

function t8(string) {
    string = inp_8.value;
    return string.trim();;
}

btn_8.onclick = () => {
    out_8.textContent = t8();
}


// Task 9.
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное.
let btn_9 = document.querySelector('.b-9');
let out_9 = document.querySelector('.out-9');
let inp_9 = document.querySelector('.inp-9');

function t9(number) {
    number = inp_9.value;
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

btn_9.onclick = () => {
    out_9.textContent = t9();
    inp_9.value = '';
}


// Task 10.
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел.
let btn_10 = document.querySelector('.b-10');
let out_10 = document.querySelector('.out-10');
let inp_10_1 = document.querySelector('.inp-10-1');
let inp_10_2 = document.querySelector('.inp-10-2');

function t10(num1, num2) {
    num1 = +inp_10_1.value;
    num2 = +inp_10_2.value;
    if (num1 > num2) {
        return `Число ${num1} > ${num2}`;
    }
    else if (num1 == num2) {
        return `Число ${num1} = ${num2}`;
    }
    else {
        return `Число ${num1} < ${num2}`;
    }
}

btn_10.onclick = () => {
    out_10.textContent = t10();
    inp_10_1.value = '';
    inp_10_2.value = '';
}


// Задачи на прокачку
// Task 1.
// Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.
let btn_11 = document.querySelector('.b-11');
let inp_11 = document.querySelector('.inp-11');

function yourName(){
    return inp_11.value;
}

btn_11.onclick = () => {
    console.log(yourName());
}


// Task 2.
// Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.
function name(name){
    name = 'Sergei';
    return name;
}
console.log(name());


// Task 3.
// Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль. Запустите выполнение функции. Убедитесь, что она работает. Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром.

// Если вы напишите, подобный синтаксис elem.onclick = myFunc(11), то увидите, что данная функция - выполняется сразу при загрузке страницы! Действительно, ведь мы поставили скобки. Как передать параметр и не запустить функцию сразу? Довольно хитро:

// elem.onclick = function(){
//     myFunc(22);
// }
// Т.е. использовать обертку из анонимной функции.
let btn_12 = document.querySelector('.b-12');

function multi(a = 2) {
    a = a * 10;
    return a;
}
console.log(multi());

btn_12.onclick = () => {
    console.log(multi(11));
}
    

// Task 4.
// Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.
let btn_13 = document.querySelector('.b-13');

function bgColorBtn(){
    return btn_13.style.background = 'red';
}

btn_13.onclick = () => {
    bgColorBtn();
}


// Task 8.
// Создайте функцию, которая возвращает случайное число от 1 до 10. По случайным числам читаем все здесь и задаем вопросы в чате.
let btn_14 = document.querySelector('.b-14');
let out_14 = document.querySelector('.out-14');

function randNum(number){
    number = Math.floor((Math.random() * 10) + 1);
    return number; 
}

btn_14.onclick = () => {
    out_14.textContent = randNum();
}


// Task 11.
// Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает их между собой. В качестве первого параметра передайте f11().
let btn_15 = document.querySelector('.b-15');
let out_15 = document.querySelector('.out-15');

function f11(){
    return 5;
}

function f11_1(a, b){
    a = f11();
    b = 5;
    return a * b;
}
btn_15.onclick = () => {
    out_15.textContent = f11_1();
}


// Task 12.
// Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.
let btn_16 = document.querySelector('.b-16');
let out_16 = document.querySelector('.out-16');
let inp_16 = document.querySelector('.inp-16');

function toNum(toNum){
    toNum = +inp_16.value;
    return toNum;
}

btn_16.onclick = () => {
    out_16.textContent = toNum();
    inp_16.value = '';
}


// Task 13.
// Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после значения (trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.
let btn_17 = document.querySelector('.b-17');
let out_17 = document.querySelector('.out-17');
let inp_17 = document.querySelector('.inp-17');

function emptyInput(data){
    data = inp_17.value.trim();
    if (data == ''){
        return false;
    }
    else {
        return data;
    }
}

btn_17.onclick = () => {
    out_17.textContent = emptyInput();
}
