"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a : 50
};

obj.a = 10;

console.log(obj);

console.log(name);
var name = 'Ivan';

// {
//     let result = 50;
// }

// console.log(result);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt("Вам есть 18?", "");  //все данные от пользователей приходят в виде string
// const answer = +prompt("Вам есть 18?", ""); //вот с + будет в виде number  - динамическа типизация
// console.log(typeof(answer + 5));
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// // document.write(answers);

// console.log(typeof(answers));

// console.log(typeof(null));    //официально признанная ошибка null - тип данных возвращается object

// const category = 'toys';

// console.log(`https:/someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + +"5");              //+ перед "5" это бинарный плюс и он 5 из строкового значения превращает в число

let incr = 10, 
    decr = 10;

    // incr++;
    // decr--;

    console.log(incr);
    console.log(decr);

    console.log(++incr);
    console.log(--decr);

    console.log(5 % 2);     //остаток от деления

    console.log(2 * 4 == 8); //будет true
    console.log(2 * 4 == '8'); //и так будет true
    console.log(2 * 4 === '8'); //а так будет false, потому что === - это строгое сравнение по типам данных

    const isChecked1 = true,
          isClose1 = false;

          console.log(isChecked1 && isClose1);   //будет false

    const isChecked2 = true,
          isClose2 = false;

          console.log(isChecked2 || isClose2);   //будет true


    const isChecked3 = false,
          isClose3 = false;

          console.log(isChecked3 || !isClose3);   //с оператором отрицания ! false становится true, поэтому будет true