// Task 1. 
// Создайте button - при нажатии на него выводите alert с номером задачи.
let btn_1 = document.querySelector('#btn-1');

btn_1.onclick = () => {
    alert('Task 1');
}


// Task 2.
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.
let inpBtn = document.querySelector('#inp-btn');

inpBtn.onclick = () => {
    alert('Task 2');
}


// Task 3.
// Создайте p - при нажатии на него выводите alert с номером задачи.
let pushP = document.querySelector('.push');

pushP.onclick = () => {
    alert('Task 3');
}


// Task 4.
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.
let inpCheck = document.querySelector('#inp-check');
let btnCheck = document.querySelector('#btn-check');

btnCheck.onclick = () => {
    let check = inpCheck.checked;

    if (check) {
        alert('True');
        inpCheck.checked = '';
    }
    else {
        alert('False');
    }
}


// Task 5.
// Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.
let inpCheck_2 = document.querySelector('#inp-check-2');
let btnCheck_2 = document.querySelector('#btn-check-2');

btnCheck_2.onclick = () => {
    let check = inpCheck_2.checked;

    if (check) {
        alert(inpCheck_2.value);
        inpCheck_2.checked = '';
    }
    else {
        alert('False');
    }
}


// Task 6.
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.
let inpHid = document.querySelector('#inp-hid');
let btnHid = document.querySelector('#btn-hid');

btnHid.onclick = () => {
    let hid = inpHid.value;
    alert(hid);
}


// Task 7.
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.
let pass = document.querySelector('#pass');
let btnPass = document.querySelector('#btn-pass');

btnPass.onclick = () => {
    alert(pass.value);

    if (pass.value.length < 6) {
        console.log('Warning!!! Password is very short. Please enter a password of more than 6 characters.');
    }
    pass.value = '';
}


// Task 8.
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.
let divInput = document.querySelector('.div-input');
let btnInp = document.querySelector('.btn-inp');

btnInp.onclick = function () {

    divInput.innerHTML = '<input class="inp-in"><button class="btn-in">Push</button>';

    let btnIn = document.querySelector('.btn-in');
    let inpIn = document.querySelector('.inp-in');

    btnIn.onclick = function () {
        alert(inpIn.value);
        inpIn.value = '';
    }
}


// Task 9.
// Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.
let inpRadio = document.querySelector('#inp-radio');
let btnRadio = document.querySelector('#btn-radio');

btnRadio.onclick = () => {
    let radio = inpRadio.checked;

    if (radio) {
        alert('True');
        inpRadio.checked = '';
    }
    else {
        alert('False');
    }
}


// Task 10.
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.
let inpColor = document.querySelector('#inp-color');
let divColor = document.querySelector('#div-color');
let btnColor = document.querySelector('#btn-color');

btnColor.onclick = () => {
    divColor.style.backgroundColor = inpColor.value;
}


// Task 11.
// Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.
let inpColor_2 = document.querySelector('#inp-color-2');
let inpColor_3 = document.querySelector('#inp-color-3');
let btnColor_2 = document.querySelector('#btn-color-2');

btnColor_2.onclick = () => {
    inpColor_3.value = inpColor_2.value;
}


// Task 12.
// Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.
let inpDate = document.querySelector('#inp-date');
let btnDate = document.querySelector('#btn-date');
let outDate = document.querySelector('#out-date');

btnDate.onclick = () => {
    outDate.innerHTML = inpDate.value;
    inpDate.value = '';
}


// Task 13.
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу.
let inpRange = document.querySelector('#inp-range');
let btnRange = document.querySelector('#btn-range');
let outRange = document.querySelector('#out-range');
let outRange_2 = document.querySelector('#out-range-2');

btnRange.onclick = () => {
    outRange.innerHTML = inpRange.value;
}

inpRange.oninput = () => {
    outRange_2.innerHTML = inpRange.value;
}


// Task 14.
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.
let textArea = document.querySelector('#text-area');
let btnArea = document.querySelector('#btn-area');
let outArea = document.querySelector('#out-area');

btnArea.onclick = () => {
    outArea.innerHTML = textArea.value;
    textArea.value = '';
}


// Task 15.
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.
let inpArea = document.querySelector('#inp-area');
let textArea_2 = document.querySelector('#text-area-2');
let btnInpArea = document.querySelector('#btn-inp-area');
let outInpArea = document.querySelector('#out-inp-area');

btnInpArea.onclick = () => {
    outInpArea.innerHTML = textArea_2.innerHTML = inpArea.value;
    inpArea.value = '';
}


// Task 16.
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.
let selAnimal = document.querySelector('#sel-animal');
let btnSel = document.querySelector('#btn-sel');
let outSel = document.querySelector('#out-sel');

btnSel.onclick = () => {
    outSel.innerHTML = selAnimal.value;
}


// Task 17.
// Эту задачу пока не делаем!!!!!


// Task 18.
// Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.
let selAuto = document.querySelector('#sel-auto');
let outSelAuto = document.querySelector('#out-sel-auto');

selAuto.onchange = () => {
    outSelAuto.innerHTML = selAuto.value;
}


// Task 19.
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!.
let inpTextForm = document.querySelector('#in_text_form');
let inpPassForm = document.querySelector('#in_pass_form');
let btnForm = document.querySelector('#btn-form');

btnForm.onclick = (event) => {
    let form = document.querySelector('#form_1');
    event.preventDefault();

    console.log(inpTextForm.value);
    console.log(inpPassForm.value);

    inpTextForm.value = '';
    inpPassForm.value = '';
}


// Task 20.
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать)
let btnForm_2 = document.querySelector('#btn_form_2');

btnForm_2.onclick = (event) => {
    let form = document.querySelector('#form_2');
    event.preventDefault();

    console.log(form.elements.in_text_form_2.value);
    console.log(form.elements.in_pass_form_2.value);

    form.elements.in_text_form_2.value = '';
    form.elements.in_pass_form_2.value = '';
}