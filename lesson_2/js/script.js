// Task 1
//Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
let multip = a * b;
console.log(multip);


// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
document.querySelector('.out-1').innerHTML = c / d;


// Task 3
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3;
let f = 5;
document.querySelector('.out-2').innerHTML = e + f;


// Task 4
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
document.querySelector('.out-3').innerHTML = e1 + f1;
//При сложении строки '3' и числа 5 JS понимает что нужно склеить данные, а не сложить и поэтому  происходит конкатенация, и мы получаем результат вывода на странице в виде '35'.


// Task 5 
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2 =3;
let f2 = 0;
document.querySelector('.out-4').innerHTML = e2 / f2;


// Task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-5').innerHTML = e3 + f3;


// Task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-6').innerHTML = e4 * f4;


// Task 8
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let in_1 = document.querySelector('.in-1');
let but_1 = document.querySelector('.but-1');

but_1.onclick = function(){
       console.log(in_1.value);
       in_1.value = '';
}


// Task 9
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let in_2 = document.querySelector('.in-2');
let but_2 = document.querySelector('.but-2');
let out_7 = document.querySelector('.out-7');

but_2.onclick = function(){
    out_7.innerHTML = in_2.value; 
    in_2.value = '';
}


// Task 10
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let in_3 = document.querySelector('.in-3');
let but_3 = document.querySelector('.but-3');
let out_8 = document.querySelector('.out-8');

but_3.onclick = function(){
    let inputIn = in_3.value;
    out_8.innerHTML = inputIn * 10;
    in_3.value = '';
}


// Task 11
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let in_4 = document.querySelector('.in-4');
let but_4 = document.querySelector('.but-4');
let out_9 = document.querySelector('.out-9');

but_4.onclick = function(){
    let inputIn = in_4.value;
    out_9.innerHTML = +inputIn + 10;
    in_4.value = '';
}


// Task 12
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let inFirstName= document.querySelector('.in-5');
let inLastName = document.querySelector('.in-6');
let but_5 = document.querySelector('.but-5');

but_5.onclick = function(){
    console.log('Hello ' + inFirstName.value + ' ' + inLastName.value);
}


// Task 13
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
let inNumber_1 = document.querySelector('.in-number-1');
let inNumber_2 = document.querySelector('.in-number-2');
let butResult = document.querySelector('.but-result');
let outResult = document.querySelector('.out-result');

butResult.onclick = function(){
    let summ = +inNumber_1.value + +inNumber_2.value;
    outResult.innerHTML = summ;
    inNumber_1.value = '';
    inNumber_2.value = '';
}


// Task 14
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let in_7 = document.querySelector('.in-7');
in_7.value = 'Hello';


// Task 15
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
let y = document.querySelector('.in-8');
y.style.border = '2px solid red';


// Task 16
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
let in_9 = document.querySelector('.in-9');
let in_10 = document.querySelector('.in-10');
let but_6 = document.querySelector('.but-6');
let out_10 = document.querySelector('.out-10');

but_6.onclick = function() {
    let summ = +in_9.value + +in_10.value;
    out_10.innerHTML = summ;
    in_9.value = '';
    in_10.value = '';
}


// Task 17
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let in_11 = document.querySelector('.in-11');
let but_7 = document.querySelector('.but-7');

but_7.onclick = function(){
    let t = in_11.value;
    t = parseInt(t);
    in_11.value = '';
    console.log(t);
}


// Task 18
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let in_12 = document.querySelector('.in-12');
let but_8 = document.querySelector('.but-8');

but_8.onclick = function(){
    let t = in_12.value;
    t = parseFloat(t);
    in_12.value = '';
    console.log(t);
}


// Task 19
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let in_13 = document.querySelector('.in-13');
let in_14 = document.querySelector('.in-14');
let but_9 = document.querySelector('.but-9');
let out_11 = document.querySelector('.out-11');

but_9.onclick = function(){
    let summ = parseInt(in_13.value) + parseInt(in_14.value);
    out_11.innerHTML = summ;
    in_13.value = '';
    in_14.value = '';
}


// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let inputFirstName = document.querySelector('.in-firstname');
let inputLastName = document.querySelector('.in-lastname');
let inputAge = document.querySelector('.in-age');
let inputOccupation = document.querySelector('.in-occupation');
let buttonData = document.querySelector('.data');
let resultData = document.querySelector('.result-data');

buttonData.onclick = function(){
    resultData.innerHTML = 'Уважаемый(ая) ' + inputFirstName.value + ', ' + inputLastName.value + ', ваш возраст ' + inputAge.value + ' лет(года), по профессии вы - ' + inputOccupation.value + ' !!!';
}
