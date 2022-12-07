// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age = prompt("скільки Вам років?");
if (age <= 11) {
  alert("Ви дитина");
} else if (age <= 17) {
  alert("Ви підліток");
} else if (age <= 59) {
  alert("Ви дорослий");
} else if (age <= 100) {
  alert("Ви пенсіонер");
} else if (age > 100) {
  alert("Ви невірно ввели свій вік");
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let number = prompt("введіть число від 0 до 9");
switch (+number) {
  case 1:
    alert(`!`);
    break;
  case 2:
    alert(`@`);
    break;
  case 3:
    alert(`№`);
    break;
  case 4:
    alert(`;`);
    break;
  case 5:
    alert(`%`);
    break;
  case 6:
    alert(`:`);
    break;
  case 7:
    alert(`?`);
    break;
  case 8:
    alert(`*`);
    break;
  case 9:
    alert(`(`);
  case 0:
    alert(`)`);
    break;
  default:
    alert("Нет таких значений");
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let a = +prompt("введіть початок діапозону");
let b = +prompt("введіть кінець діапозону");
let sum = 0;
for (let i = a; i <= b; i++) {
  sum = sum + i;
}
alert(sum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let x = +prompt("введіть перше число ");
let y = +prompt("введіть друге число");

while (y != 0) {
  let temp = y;
  console.log(temp);
  y = x % y;
  console.log(y);
  x = temp;
  console.log(x);
}

alert(x);
