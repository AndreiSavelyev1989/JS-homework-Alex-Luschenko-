// Task 1.
// С помощью вложенных циклов и символа * нарисуйте: *** *** ***
let out_1 = '';

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        out_1 += '*';
    }
    out_1 += ' ';
}
document.querySelector('#out_1').innerHTML = out_1;

// Task 2.
// С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    *****
//    *****
let out_2 = '';

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        out_2 += '*';
    }
    out_2 += '<br>';
}
document.querySelector('#out_2').innerHTML = out_2;


// Task 3.
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в зависимости от того четная или нет переменная внутреннего цикла.
//    101010
//    101010
//    101010
let out_3 = '';

for (let i = 0; i < 3; i++) {
    for (let k = 1; k < 7; k++) {
        if (k % 2 == 0) {
            out_3 += 0;
        }
        else {
            out_3 += 1;
        }
    }
    out_3 += '<br>';
}
document.querySelector('#out_3').innerHTML = out_3;


// Task 4.
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в зависимости от того четная или нет переменная внутреннего цикла. Каждый третий элемент заменяйте на x:
//    10x01x
//    10x01x
//    10x01x
let out_4 = '';

for (let i = 0; i < 3; i++) {
    for (let k = 1; k < 7; k++) {
        if (k % 3 == 0) {
            out_4 += 'x';
        }
        else if (k % 2 == 0) {
            out_4 += 0;
        }
        else {
            out_4 += 1;
        }
    }
    out_4 += '<br>';
}
document.querySelector('#out_4').innerHTML = out_4;


// Task 5.
// С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***
let out_5 = '';
let rows = 3;

for (let i = 1; i <= rows; i++) {
    for (let k = 1; k <= i; k++) {
        out_5 += '*';
    }
    out_5 += '<br>';
}
document.querySelector('#out_5').innerHTML = out_5;


// Task 6.
// С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    ****
//    ***
//    **
//    *
let out_6 = '';
let rows_2 = 4;
let cols_2 = 5;

for (let i = rows_2; i >= 0; i--) {
    for (let k = cols_2; k >= cols_2 - i; k--) {
        out_6 += '*';
    }
    out_6 += '<br>';
}
document.querySelector('#out_6').innerHTML = out_6;


// Task 7.
// С помощью вложенных циклов и символа * нарисуйте:
//      *****
//     *****
//    *****
let out_7 = '';
let out2_7 = '';
let rows_3 = 3;
let cols_3 = 7;
let cols_10 = 5;
let n1 = 2;
let n2 = 7;

// Первый вариант решения:
for (i = 1; i <= rows_3; i++) {
    for (k = 1; k <= cols_3; k++) {
        if (k <= n1 || k > n2) {
            out_7 += '&nbsp;&nbsp;';
        }
        else {
            out_7 += '*';
        }
    }
    n1--;
    n2--;
    out_7 += '<br>';
}
document.querySelector('#out_7').innerHTML = out_7;

// Второй вариант решения:
for (let i = 1; i <= rows_3; i++) {
    for (let k = 1; k <= rows_3 - i; k++) {
        out2_7 += '&nbsp;&nbsp;';
    }
    for (let j = 1; j <= cols_10; j++) {
        out2_7 += '*';
    }
    out2_7 += '<br>';
}
document.querySelector('#out2_7').innerHTML = out2_7;


// Task 8.
// С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***
//    **
//    *
let out_8 = '';
let rows_4 = 5;
let num_12 = 5;

for (let i = 1; i <= rows_4; i++) {
    for (let k = 1; k <= i; k++) {
        if (k > num_12) {
            out_8 += '&nbsp;&nbsp;';
        }
        else {
            out_8 += '*';
        }
    }
    num_12--;
    out_8 += '<br>';
}
document.querySelector('#out_8').innerHTML = out_8;


// Task 9.
// С помощью вложенных циклов и символа * нарисуйте:
// 	******
// 	*    *
// 	*    *
// 	*    *
//  ******
let out_9 = '';
let rows_5 = 5;
let cols_5 = 6;

for (let i = 1; i <= rows_5; i++) {
    for (let k = 1; k <= cols_5; k++) {
        if (i == 1 || k == 1 || i == rows_5 || k == cols_5)
            out_9 += '*';
        else {
            out_9 += '&nbsp&nbsp';
        }
    }
    out_9 += '<br>';
}
document.querySelector('#out_9').innerHTML = out_9;


// Task 10.
// С помощью вложенных циклов и символа который вводит пользователь нарисуйте:
// 	******
// 	*    *
// 	*    *
// 	*    *
//  ******
let out_10 = document.querySelector('#out_10');
let inp_10 = document.querySelector('#inp_10');
let rows_6 = 5;
let cols_6 = 6;

inp_10.oninput = () => {
    for (let i = 1; i <= rows_6; i++) {
        for (let k = 1; k <= cols_6; k++) {
            if (i == 1 || k == 1 || i == rows_6 || k == cols_6)
                out_10.innerHTML += inp_10.value;
            else {
                out_10.innerHTML += '&nbsp&nbsp';
            }
        }
        out_10.innerHTML += '<br>';
    }
    inp_10.value = '';
}


// Task 11.
// С помощью вложенных циклов вывените таблицу умножения на 6 и 7.
let out_11 = '';

for (let i = 1; i < 10; i++) {
    for (let k = 6; k < 7; k++) {
        out_11 += `${i} * ${k} = ${i * k} <br>`;
    }
}
out_11 += '<hr>';

for (let i = 1; i < 10; i++) {
    for (let k = 7; k < 8; k++) {
        out_11 += `${i} * ${k} = ${i * k} <br>`;
    }
}
document.querySelector('#out_11').innerHTML = out_11;


// Task 12.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let out_12 = '';

for (let i = 1; i < 6; i++) {
    for (let k = 1; k <= i; k++) {
        out_12 += k + ' ';
    }
    out_12 += '<br>';
}
document.querySelector('#out_12').innerHTML = out_12;


// Task 13.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
let out_13 = '';
let num_1 = 1;
let num_2 = 10

for (let i = 1; i <= 5; i++) {

    for (let k = num_1; k <= num_2; k++) {
        if (k < 10) {
            out_13 += `0${k} `;
        }
        else {
            out_13 += `${k} `;
        }
    }
    num_1 += 10;
    num_2 += 10;
    out_13 += '<br>';
}
document.querySelector('#out_13').innerHTML = out_13;


// Task 14.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
let out_14 = '';
let data = 5;

for (let i = data; i >= 1; i--) {
    for (let k = i; k >= 1; k--) {
        out_14 += `${k} `;
    }
    out_14 += '<br>';
}
document.querySelector('#out_14').innerHTML = out_14;


// Task 15.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1
let out_15 = '';
let rows_7 = 5;
let cols_7 = 5;
let num_3 = 2;

for (let i = rows_7; i >= 1; i--) {
    for (let k = cols_7; k >= 1; k--) {
        if (k >= num_3) {
            out_15 += `x `;
        }
        else {
            out_15 += `${k} `;
        }
    }
    num_3++;
    out_15 += '<br>';
}
document.querySelector('#out_15').innerHTML = out_15;


// Task 16.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2  2
// 3  3  3
// 4  4  4  4
// 5  5  5  5  5
let out_16 = '';
let rows_8 = 5;


for (let i = 1; i <= rows_8; i++) {
    for (let k = 1; k <= i; k++) {
        out_16 += `${i} `;
    }
    out_16 += '<br>';
}
document.querySelector('#out_16').innerHTML = out_16;


// Task 17.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5   
// 4  4   
// 3  3  3   
// 2  2  2  2   
// 1  1  1  1  1 
let out_17 = '';
let rows_9 = 5;
let num_4 = 2;

for (let i = rows_9; i >= 1; i--) {
    for (let k = rows_9; k >= 1; k--) {
        if (k >= num_4) {
            out_17 += ' ';
        }
        else {
            out_17 += `${i} `;
        }
    }
    num_4++;
    out_17 += '<br>';
}
document.querySelector('#out_17').innerHTML = out_17;


// Task 18.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1
let out_18 = '';
let rows_10 = 5;
let num_5 = 2;

for (let i = rows_10; i >= 1; i--) {
    for (let k = rows_10; k >= 1; k--) {
        if (k >= num_5) {
            out_18 += ' ';
        }
        else if (i % 2 == 0) {
            out_18 += 'x ';
        }
        else {
            out_18 += `${i} `;
        }
    }
    num_5++;
    out_18 += '<br>';
}
document.querySelector('#out_18').innerHTML = out_18;


// Task 19.
// С помощью вложенных циклов и символа * нарисуйте:
//      *****
//     *******
//    *********
let out_19 = '';
let rows_11 = 3;
let cols_8 = 9;
let num_6 = 2;
let num_9 = 8;

for (let i = 1; i <= rows_11; i++) {

    for (let k = 1; k <= cols_8; k++) {
        if (k <= num_6 || k >= num_9) {
            out_19 += '&nbsp;&nbsp;';
        }
        else {
            out_19 += '*';
        }
    }
    num_6--;
    num_9++;
    out_19 += '<br>';
}
document.querySelector('#out_19').innerHTML = out_19;


// Task 20.
// С помощью вложенных циклов и символа * нарисуйте:

//      **
//     ****
//    ******
//     ****
//      **
let out_20 = '';
let rows_12 = 3;
let rows_13 = 2;
let cols_9 = 6;
let num_7 = 2;
let num_8 = 5;
let num_11 = 1;
let num_10 = 6;

for (let i = 1; i <= rows_12; i++) {
    for (let k = 1; k <= cols_9; k++) {
        if (k <= num_7 || k >= num_8) {
            out_20 += '&nbsp;&nbsp;';
        }
        else {
            out_20 += '*';
        }
    }
    num_7--;
    num_8++;
    out_20 += '<br>';
}
for (let i = 1; i <= rows_13; i++) {
    for (let k = 1; k <= cols_9; k++) {
        if (k <= num_11 || k >= num_10) {
            out_20 += '&nbsp;&nbsp;';
        }
        else {
            out_20 += '*';
        }
    }
    num_11++;
    num_10--;
    out_20 += '<br>';
}
document.querySelector('#out_20').innerHTML = out_20;