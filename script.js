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

// Запитай у користувача число і виведи всі дільники цього числа.

let n = +prompt("Введите число");

for (let i = 2; i * 2 <= n; i++) {
  if (n % i == 0) {
    alert(`Делители этого числа: ${i}`);
  }
}

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let number = prompt("введіть п’ятирозрядне число");
let firstResult = number % 10;
console.log(firstResult);
let secondNumber = Math.floor(number / 10);
console.log(secondNumber);
let secondResult = secondNumber % 10;
console.log(secondResult);
let thirdNumber = Math.floor(number / 100);
console.log(thirdNumber);
let thirdResult = thirdNumber % 10;
console.log(thirdResult);
let fourthNumber = Math.floor(number / 1000);
console.log(fourthNumber);
let fourthResult = fourthNumber % 10;
console.log(fourthResult);
let fifthNumber = Math.floor(number / 10000);
console.log(fifthNumber);
let fifthResult = fifthNumber % 10;
console.log(fifthResult);

let result =
  " " + firstResult + secondResult + thirdResult + fourthResult + fifthResult;

if (+number == +result) {
  alert("число є паліндромом");
} else {
  alert("число не є паліндромом");
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let number = +prompt("сума покупки");
let sum = 0;
if (number <= 0) {
  alert("число не може бути меньше або рівним нолю ");
} else if (number < 200) {
  alert(number);
} else if (number <= 300) {
  let sum = number * 0.97;
  alert(sum);
} else if (number <= 500) {
  let sum = number * 0.95;
  alert(sum);
} else if (number > 500) {
  let sum = number * 0.93;
  alert(sum);
}


let number = +prompt("сума покупки");
let sum = 0;
if(number < 200){
  alert(number);
}
if(number >=200 && number <300){

}

if(number >=300 && number<500){

}
let sum = number * 0.93;
alert(sum);





if (number <= 0) {
  alert("число не може бути меньше або рівним нолю ");
} else if (number < 200) {
  alert(number);
} else if (number <= 300) {
  let sum = number * 0.97;
  alert(sum);
} else if (number <= 500) {
  let sum = number * 0.95;
  alert(sum);
} else if (number > 500) {
  let sum = number * 0.93;
  alert(sum);
}


let n = 56778
n = n + ''
let reverse = n.split('').reverse().join('')
console.log(reverse)