 //задається значення для змінної age
 //let age = prompt ( 'Скільки тобі років?', 100);
//alert ( `Тобі $ {age} років!`);
 // Тобі 100 років!== 

// let isBoss = confirm( "Ти тут головний?");
//  console.log(isBoss); // true, якщо натиснута OK



/* дЗ11
const firstNumber = +prompt ( 'Input first number',  '');
const secondNumber = +prompt ( 'Input second number', '' );

console.log(firstNumber);
console.log(secondNumber);

console.log(firstNumber+secondNumber)

console.log(firstNumber-secondNumber)

console.log(firstNumber*secondNumber)

console.log(firstNumber/secondNumber)

*/
/*
let x = 100;
x = -x;

console.log(x)

let y = -x;
console.log(y)

console.log(-0 === 0);
*/
/*
let a = '1';
console.log(a, typeof a);

a = a + 1;
console.log(a, typeof a);
a = a - '1';

console.log(a);
console.log('a:', a);
*/
//(7 && '5' || 3 || false && 0) && (true || 6 && 0)
//console.log((7 && '5' || 3 || false && 0) && (true || 6 && 0))

/*
const myNumber = 17;
const userNumber = +prompt( "Вгадай число" , 0)
if (userNumber === myNumber) {
    alert ("Yes!");
} else if (userNumber < myNumber) {
    alert("More!");
} else if (userNumber - myNumber > 10) {
    alert("Less!");
} else if (userNumber > myNumber ) {
    alert("less");
}
*/

/*
дз13

let message;
if (login == 'Співробітник') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Добрий день!';
} else if (login == '') {
  message = 'Нема логіну';
} else {
  message = '';
}

let message = (login == 'Співробітник') ? 'Привіт' :
  (login == 'Директор') ? 'Добрий день!' :
  (login == '') ? 'Нема логіну' :
  '';
*/

/*
дз14 ч1
вивести числа крім тих що /3 /5 і зупинити які /3 і /5

for (let num = 1; ; num++){
  if (num % 3 == 0 && num % 5 == 0){
  break;
  } else{
  if (num % 3 == 0 || num % 5 == 0){
  continue;
  } else{
  console.log(num);
  }
  }
}
дз 14 2.
const myNumber = 25;
let num = +promt('Відгадай додатнє число', 0);

if(num === myNumber){
alert('Правильно!');
} else if( myNumber - num > 10){
  alert('Значно більше');
} else if (myNumber - num > 0){
  alert('Більше');
} else if(num - myNumber > 10){
  alert('Значно менше');
} else if(num - myNumber > 0){
  alert('Менше');
}else (num === myNumber){
  alert('Вірно!');
}
/*

/* дз 15 Функції
let firstNumber = +promt('Перше число','');
let secondNumber = +promt('Друге число','');
let operation = promt('Операція','');

function calcnums(a, b){
  a = firstNumber;
  b = secondNumber;

  if (operation == '+'){
  return a+b:
  } else if (operation == '-'){
  return a-b;
  } else if (operation == '*'){
  return a*b;
  } else if (operation == '/'){
  return a/b;
  } else if (operation == '**'){
  return a**b;
  } else{
  return 'Немає такої операції';
  }
}
let result = calcnums(firstNumber, secondNumber, operation);
alert (result);
*/

/*дз16 n кількість *
function step(n){
  let result = '*';
  for(let i = 0; i <= n; i++ ){
  result = result + step;
  }
}







/*
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( "Нет таких значений" );
}
*/


/*
let i = 10;
while ( i <= 50); {
    console.log(i);
    i += 1;
}
*/

/*
let i = 0;

while (i <= 10) {
    console.log(i);
    i += 2;
} */

/*
for (let i = 10; i <= 50; i += 1  ) {
    console.log(i);
}

for (let j = 0; j <= 10; j += 2) {
    console.log(j);
}
*/


// str n  кількість раз
/*
function repeat (str, n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    res = res + str;
  }
  return res;
}

const string = prompt('Input string');
const count = +prompt('Input count');

const resultString = repeat(string, count);
console.log(resultString);
*/

//розділення на парні і не парні цифри від загального числа
/*
function check(n) {
  let evenNum = '';
  let oddNum = '';
  while (n >10){
  let last = n % 10;
  if (last % 2 == 0) {
     //even
    evenNum += last;
  } else {
    // odd
    oddNum += last;
    }
  }
  //return evenNum + '' + oddNum;
  n = (n - last) / 10;

}
const num = 12346576767854;

const result = check(num);
console.log(result)
*/
// зміна стилів через js
/* function changeActive() {
  function addClass(el, className) {
    el.classList.add(className);
  }
  function removeClass(el, className) {
    el.classList.remove(className);
  }
  function checkclass(el, className) {
    return el.classList.contains(className); // true/false
  }

  const homeTab = document.getElementById( 'home.');
  const aboutTab = document.getElementById( 'about');
  const contactTab = document.getElementById( 'contact');
  const loginTab = document.getElementById( 'login');

  // homeTab.remove()
  //homeTab.classList.remove( 'active');
  //contactTab.classList.remove('contact');
  removeClass(homeTab, 'active');
  removeClass(contactTab, 'active');

  addClass(aboutTab, 'active');
  addClass(loginTab, 'active');

}
*/

/* дз 17 сортування
let arr = [4, 6, 3, 10, 9, 4, 3, 2];

arr.sort((a, b) => a - b);

alert( arr );
*/
//дз 18 список продуктів
/*const bag ={};
const fruit = prompt('Input your product list:', '');
const fruitArray = fruit.split(' ');
for (let item of fruitArray) {
  bag[item] = prompt(`Input ${item} count:`, '');
}
alert(bag);
console.log(bag);
*/



































