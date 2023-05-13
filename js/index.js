// Получаем форму и элементы ввода
let form = document.querySelector("form");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let formbutton = document.querySelector('.formbutton')
let forma = document.querySelector('.forma')
let text  = document.querySelector('.text')
let otmena = document.querySelector('.otmena')
let thankbutt = document.querySelector('.thankbutt')
let thank = document.querySelector('.thank')
// Функция для проверки заполнения формы
function validateForm(event) {
    // Если какое-то поле не заполнено или не соответствует шаблону, отменяем отправку формы и выводим сообщение об ошибке
    if (!Name.value || !email.value || !phone.value || !phone.checkValidity()) {
        event.preventDefault();
        Name.style.border='2px solid red'
        email.style.border='2px solid red'
        phone.style.border='2px solid red'

    } else{ 
        Name.style.border='2px solid blue'
        email.style.border='2px solid blue'
        phone.style.border='2px solid blue'
    }
}
formbutton.onclick = () =>{
    forma.style.display='flex'
    text.style.display='none'
}

otmena.onclick = () =>{
    forma.style.display='none'
    text.style.display='flex'
}
// Добавляем обработчик события отправки формы
form.addEventListener("submit", validateForm);