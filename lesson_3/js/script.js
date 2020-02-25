//Task 1
//Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.
let a = 4;

if (a == 4) {
    console.log('Действительно a = 4');
}


//Task 2
//Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.
let b = 8;
let c = 10;

if (b > c) {
    console.log('Больше переменная "b"');
}
//Task 3
//Используя else if добавьте в предыдущую задачу проверку на равенство.
else if (b == c) {
    console.log('Переменные равны');
}
else {
    console.log('Переменная "c" больше');
}


// Task 4
// Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".
let inpCompareNumber_1 = document.querySelector('.inp-compare-number-1');
let inpCompareNumber_2 = document.querySelector('.inp-compare-number-2');
let butCompareNumber = document.querySelector('.but-compare-number');
let outCompareNumber = document.querySelector('.out-compare-number');

butCompareNumber.onclick = () => {
    let n1 = +inpCompareNumber_1.value;
    let n2 = +inpCompareNumber_2.value;

    if (n1 > n2) {
        outCompareNumber.innerHTML = 'Первое число больше!';
    }
    else if (n1 == n2) {
        outCompareNumber.innerHTML = 'Числа равны!';
    }
    else {
        outCompareNumber.innerHTML = 'Второе число больше!';
    }
}


// Task 5
// Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.
let inpYearBirth = document.querySelector('.inp-year-birth');
let butYearBirth = document.querySelector('.but-year-birth');
let outYearBirth = document.querySelector('.out-year-birth');

butYearBirth.onclick = () => {
    let birth = inpYearBirth.value;

    if (birth >= 2000) {
        console.log(2019 - birth);
    }
    else {
        outYearBirth.innerHTML = 2019 - birth;
    }
}


// Task 6
// Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.
let inpNumberFlat = document.querySelector('.inp-number-flat');
let butNumberFlat = document.querySelector('.but-number-flat');
let outNumberFlat = document.querySelector('.out-number-flat');

butNumberFlat.onclick = () => {
    let numFlat = inpNumberFlat.value;

    if (numFlat >= 1 && numFlat <= 32) {
        outNumberFlat.innerHTML = 'Такая квартира есть!!!';
    }
    else {
        outNumberFlat.innerHTML = 'Такой квартиры нет!!!';
    }
}


// Task 7
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.
let inpNumber = document.querySelector('.inp-number');
let butNumber = document.querySelector('.but-number');
let outNumber = document.querySelector('.out-number');

butNumber.onclick = () => {
    let num = inpNumber.value;

    if (num > 0) {
        outNumber.innerHTML = 'Число больше 0';
    }
    else if (num < 0) {
        outNumber.innerHTML = 'Число меньше 0';
    }
    else {
        outNumber.innerHTML = 'Число равно 0';
    }
}


// Task 8
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.
let inpRemain = document.querySelector('.inp-remain');
let butRemain = document.querySelector('.but-remain');
let outRemain = document.querySelector('.out-remain');

butRemain.onclick = () => {
    let rem = inpRemain.value;

    if (rem % 2 == 0) {
        outRemain.innerHTML = 'Число четное!!!';
    }
    else {
        outRemain.innerHTML = 'Число не четное!!!';
    }
}


// Task 9
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу. Как возвести в степень?
let inpExponen_1 = document.querySelector('.inp-exponen-1');
let inpExponen_2 = document.querySelector('.inp-exponen-2');
let butExponen = document.querySelector('.but-exponen');
let outExponen = document.querySelector('.out-exponen');

butExponen.onclick = () => {
    let exp1 = inpExponen_1.value;
    let exp2 = inpExponen_2.value;

    if (exp1 != '' && exp2 != '') {
        outExponen.innerHTML = exp1 ** exp2;
    }
    else {
        outExponen.innerHTML = 'Числа не введены! Введите числа в инпуты.';
    }
}


// Task 10
// Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...
let inpName = document.querySelector('.inp-name');
let butName = document.querySelector('.but-name');

butName.onclick = () => {
    let name = inpName.value;

    if (name == '' || name == ' ') {
        alert('Вы не ввели ни каких данных. Введите ваше имя.');
        inpName.value = '';
    }
    else {
        alert('Hello ' + name);
        inpName.value = '';
    }
}


// Task 11
// Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input.
let inpName_2 = document.querySelector('.inp-name-2');
let butName_2 = document.querySelector('.but-name-2');

butName_2.onclick = () => {
    let a = inpName_2.value;
    a = a.trim();

    if (a == '') {
        alert('Ошибка!!! Введите имя!');
        inpName_2.value = '';
    }
    else {
        alert('Hello ' + a);
        inpName_2.value = '';
    }
}


// Task 12
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch.
let inpNumber_2 = document.querySelector('.inp-number-2');
let butNumber_2 = document.querySelector('.but-number-2');

butNumber_2.onclick = () => {
    let num = +inpNumber_2.value;

    switch (num) {

        case 1:
            console.log('один');
            inpNumber_2.value = '';
            break;
        case 2:
            console.log('два');
            inpNumber_2.value = '';
            break;
        case 3:
            console.log('три');
            inpNumber_2.value = '';
            break;
        default:
            console.log('Введите число от 1 до 3');
            inpNumber_2.value = '';
    }
}


// Task 13
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.
let inpStreet = document.querySelector('.inp-street');
let butStreet = document.querySelector('.but-street');
let outStreet = document.querySelector('.out-street');

butStreet.onclick = () => {
    let str = inpStreet.value;

    if (str >= 1 && str <= 5) {
        outStreet.innerHTML = 'Дом находится на улице 1';
        inpStreet.value = '';
    }
    else if (str >= 6 && str <= 11) {
        outStreet.innerHTML = 'Дом находится на улице 2';
        inpStreet.value = '';
    }
    else if (str >= 12 && str <= 20) {
        outStreet.innerHTML = 'Дом находится на улице 3';
        inpStreet.value = '';
    }
    else {
        outStreet.innerHTML = 'Такого дома нет';
        inpStreet.value = '';
    }
}


// Task 14
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Больше 600 - смертность 100%. Вывод результатов сделайте на страницу.
let inpRad = document.querySelector('.inp-radiation');
let butRad = document.querySelector('.but-radiation');
let outRad = document.querySelector('.out-radiation');

butRad.onclick = () => {
    let rad = inpRad.value;

    if (rad >= 0 && rad <= 25) {
        outRad.innerHTML = 'Радиация не обнаружена!';
        inpRad.value = '';
    }
    else if (rad >= 26 && rad <= 50) {
        outRad.innerHTML = 'Cнижение числа лимфоцитов!';
        inpRad.value = '';
    }
    else if (rad >= 51 && rad <= 100) {
        outRad.innerHTML = 'Вялость, рвота!';
        inpRad.value = '';
    }
    else if (rad >= 101 && rad <= 150) {
        outRad.innerHTML = 'Cмертность 5%!';
        inpRad.value = '';
    }
    else if (rad >= 151 && rad <= 350) {
        outRad.innerHTML = 'Cмертность 50% за 30 суток!';
        inpRad.value = '';
    }
    else if (rad >= 351 && rad <= 600) {
        outRad.innerHTML = 'Cмертность 90% за 2 недели!';
        inpRad.value = '';
    }
    else if (rad < 0) {
        outRad.innerHTML = 'Отрицательного значения - не существует! Введите значение от 0 до 1000!';
        inpRad.value = '';
    }
    else {
        outRad.innerHTML = 'Cмертность 100%!';
        inpRad.value = '';
    }
}


//Task 15
//Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.
let x = 1;
let y = 0;

console.log(x && y);
console.log(x || y);
//логический оператор || вычисляет первое значение true с лева на право, а все остальные игнорируются, если все значения равны false тогда выводится последнее из них.
//оператор && вычисляет значения слева направо до первого false и возвращает его, а если все true – то последнее значение.


// Task 16
// В Казахстане, налог на объем двигателя составляет:
// от 0 до 499 кубов - 2525 тенге
// от 500 до 1199 кубов - 5050 тенге
// от 1200 до 1599 кубов - 8275 тенге
// от 1600 до 1899 кубов - 9675 тенге
// от 1900 до 1999 кубов - 11075тенге
// от 2000 и выше кубов - 15000 тенге
// Напишите программу, где пользователь может ввести в input объем двигателя и получить налог на данный двигатель
let inpEngVol = document.querySelector('.inp-eng-vol');
let butEngVol = document.querySelector('.but-eng-vol');
let outEngVol = document.querySelector('.out-eng-vol');

butEngVol.onclick = () => {
    let vol = inpEngVol.value;

    if (vol < 0) {
        outEngVol.innerHTML = 'Такого объема двигателя не существует!!!'
        inpEngVol.value = '';
    }
    else if (vol >= 0 && vol <= 499) {
        outEngVol.innerHTML = 'Налог составляет - 2525 тенге.'
        inpEngVol.value = '';
    }
    else if (vol >= 500 && vol <= 1199) {
        outEngVol.innerHTML = 'Налог составляет - 5050 тенге.'
        inpEngVol.value = '';
    }
    else if (vol >= 1200 && vol <= 1599) {
        outEngVol.innerHTML = 'Налог составляет - 8275 тенге.'
        inpEngVol.value = '';
    }
    else if (vol >= 1600 && vol <= 1899) {
        outEngVol.innerHTML = 'Налог составляет - 9675 тенге.'
        inpEngVol.value = '';
    }
    else if (vol >= 1900 && vol <= 1999) {
        outEngVol.innerHTML = 'Налог составляет - 11075 тенге.'
        inpEngVol.value = '';
    }
    else {
        outEngVol.innerHTML = 'Налог составляет - 15000 тенге.'
        inpEngVol.value = '';
    }
}


// Task 17
// Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.
let inpSumCash = document.querySelector('.inp-sum-cash');
let inpCurrency = document.querySelector('.inp-currency');
let butCash = document.querySelector('.but-cash');
let outCash = document.querySelector('.out-cash');

butCash.onclick = () => {
    let cash = inpSumCash.value;
    let curr = inpCurrency.value;

    if (curr == 'EURO') {
        outCash.innerHTML = cash * 0.9046 + ' <img width = "20px" height = "20px" src = https://img2.freepng.ru/20180419/rce/kisspng-euro-sign-currency-symbol-euro-symbol-5ad8a190ce3b54.2324297415241465768447.jpg />';
        inpCurrency.value = '';
    }
    else if (curr == 'RUB') {
        outCash.innerHTML = cash * 64.4232 + ' <img width = "20px" height = "20px" src = https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Russian_rouble_sign_%28PT_Serif_1.000%29.svg/1200px-Russian_rouble_sign_%28PT_Serif_1.000%29.svg.png />';
        inpCurrency.value = '';
    }
    else if (curr == 'UAH') {
        outCash.innerHTML = cash * 24.67 + ' <img width = "20px" height = "20px" src = http://malinnikov.ru/wp-content/uploads/2009/03/hrn.png />';
        inpCurrency.value = '';
    }
    else {
        alert('Ошибка!!! Введенная валюта не известна или не поддерживается данной программой. Введите валюту: EURO, RUB или UAH.');
    }
}


// Task 18
// Проделайте предыдущую задачу с помощью switch case.
let inpSumCash_2 = document.querySelector('.inp-sum-cash-2');
let inpCurrency_2 = document.querySelector('.inp-currency-2');
let butCash_2 = document.querySelector('.but-cash-2');
let outCash_2 = document.querySelector('.out-cash-2');

butCash_2.onclick = () => {
    let cash = inpSumCash_2.value;
    let curr = inpCurrency_2.value;

    switch (curr) {
        case 'EURO':
            outCash_2.innerHTML = cash * 0.9046 + ' <img width = "20px" height = "20px" src = https://cdn.turkaramamotoru.com/ru/simvol-evro-3498.jpg />';
            inpCurrency_2.value = '';
            break;
        case 'RUB':
            outCash_2.innerHTML = cash * 64.4232 + ' <img width = "20px" height = "20px" src = https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Russian_rouble_sign_%28PT_Serif_1.000%29.svg/1200px-Russian_rouble_sign_%28PT_Serif_1.000%29.svg.png />';
            inpCurrency_2.value = '';
            break;
        case 'UAH':
            outCash_2.innerHTML = cash * 24.67 + ' <img width = "20px" height = "20px" src = http://malinnikov.ru/wp-content/uploads/2009/03/hrn.png />';
            inpCurrency_2.value = '';
            break;
        default:
            alert('Ошибка!!! Введенная валюта не известна или не поддерживается данной программой. Введите валюту: EURO, RUB или UAH.');
            break;
    }
}


// Task 19
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.
let inpArithNumber = document.querySelector('.inp-arithmetic-number');
let inpArithNumber_2 = document.querySelector('.inp-arithmetic-number-2');
let inpArithSign = document.querySelector('.inp-arithmetic-sign');
let butArith = document.querySelector('.but-arithmetic');
let outArith = document.querySelector('.out-arithmetic');

butArith.onclick = () => {
    let ar_1 = +inpArithNumber.value;
    let ar_2 = +inpArithNumber_2.value;
    let sign = inpArithSign.value;

    if (ar_1 == ar_1 && ar_2 == ar_2 && sign == '+') {
        outArith.innerHTML = ar_1 + ar_2;
        inpArithNumber.value = '';
        inpArithNumber_2.value = '';
        inpArithSign.value = '';
    }
    else if (ar_1 == ar_1 && ar_2 == ar_2 && sign == '-') {
        outArith.innerHTML = ar_1 - ar_2;
        inpArithNumber.value = '';
        inpArithNumber_2.value = '';
        inpArithSign.value = '';
    }
    else if (ar_1 == ar_1 && ar_2 == ar_2 && sign == '*') {
        outArith.innerHTML = ar_1 * ar_2;
        inpArithNumber.value = '';
        inpArithNumber_2.value = '';
        inpArithSign.value = '';
    }
    else if (ar_1 == ar_1 && ar_2 == ar_2 && sign == '/') {
        outArith.innerHTML = ar_1 / ar_2;
        inpArithNumber.value = '';
        inpArithNumber_2.value = '';
        inpArithSign.value = '';
    }
    else {
        alert('Неизвестное арифметическое выражение. Данная программа выполняет только действия: +, -, *, и /');
    }

}


// Task 20
// Проделайте предыдущую задачу с помощью switch case.
let inpArithNumber_3 = document.querySelector('.inp-arithmetic-number-3');
let inpArithNumber_4 = document.querySelector('.inp-arithmetic-number-4');
let inpArithSign_2 = document.querySelector('.inp-arithmetic-sign-2');
let butArith_2 = document.querySelector('.but-arithmetic-2');
let outArith_2 = document.querySelector('.out-arithmetic-2');

butArith_2.onclick = () => {
    let ar_1 = +inpArithNumber_3.value;
    let ar_2 = +inpArithNumber_4.value;
    let sign = inpArithSign_2.value;

    switch (sign) {
        case '+':
            outArith_2.innerHTML = ar_1 + ar_2;
            inpArithNumber_3.value = '';
            inpArithNumber_4.value = '';
            inpArithSign_2.value = '';
            break;
        case '-':
            outArith_2.innerHTML = ar_1 - ar_2;
            inpArithNumber_3.value = '';
            inpArithNumber_4.value = '';
            inpArithSign_2.value = '';
            break;
        case '*':
            outArith_2.innerHTML = ar_1 * ar_2;
            inpArithNumber_3.value = '';
            inpArithNumber_4.value = '';
            inpArithSign_2.value = '';
            break;
        case '/':
            outArith_2.innerHTML = ar_1 / ar_2;
            inpArithNumber_3.value = '';
            inpArithNumber_4.value = '';
            inpArithSign_2.value = '';
            break;
        default:
            alert('Неизвестное арифметическое выражение. Данная программа выполняет только действия: +, -, *, и /');
    }
}
