function displayDeveloperInfo(lastName, firstName, position = "розробник") {
    lastName = prompt("Введіть прізвище :");
    firstName = prompt("Введіть  ім'я:");
    alert("Розробник сторінки:\nПрізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}
function showDialog() {
    let name = prompt("Введіть ваше ім'я:");
    if (name !== null && name !== "") {
        alert("Привіт, " + name + "!");
    } else {
        alert("Ви не ввели ім'я!");
    }
}
function compareStrings() {
    let str1 = "Hello";
    let str2 = "World 1";
    if (str1 > str2) {
        alert(str1);
    } else {
        alert(str2);
    }
}