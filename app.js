// const btn = document.getElementById('btn');
// let resultEle = document.getElementById('result');
// // console.log(btn);

// const celsius = (f) =>{
//     return (5/9)*(f-32);
// }
// btn.addEventListener('click', ()=> {
//     console.log('Hello');
//     btn.innerHTML = new Date();
// });

// let a=20;
// if(true) {
//     let a=10;
//     console.log(a);
// }

// console.log(a);

// var a;
// let a=20;
// console.log(a);

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// function someVal() {
//     return "last";
// }
// function add(a,b=someVal()){
//     return a+ " " + b;
// }

// console.log(add(10,20));
// console.log(add(50,20));
// console.log(add("First"));

// function main(a,b=main()) {
// return a+b;
// }
// console.log(main(10));
// let userName = "sanju";
//
// const age = (val)=> {
// return val;
// }

// console.log(userName + " " + age())
// console.log(`${userName} is ${age()} year old`);

// let data = [10,20,1,60,100,50,40];
// console.log(data);

// let result = data.find((item) => {
//     return item < 10;
// });

// let result1 = data.findIndex((item) => {
//     return item > 10;
// });

// console.log(result);
// console.log(result1);

// const custom = (item) => {
// return item>50;
// }

// let result = data.find(custom);
// let result = data.findIndex(custom);
// console.log(result);

// let data = [
//     {id:10, userName: "a"},
//     {id:70, userName: "b"},
//     {id:40, userName: "c"},
//     {id:30, userName: "d"},
//     {id:60, userName: "e"},
// ];

// console.log(data[0].id);

// let result = data.find((item) => {
//     return item.userName == "b";
// });

// console.log(result.id);

// let result2 = data.findIndex((item) => {
//     return item.userName == "d";
// });

// console.log(result);
// console.log(result2);

// arrow function

// normal function
// const test2 = function() {
//     return 1;
// }

// // arrow functtion
// const test3 = ()=> {
//     return 1;
// }
// console.log(test2());
// console.log(test3());

// let data = [10,20,30,40,50];

// let newData = data.map((item) => item*2);

// let newData2 = data.map((item) => {
//     return item*3;
// });
// console.log(newData2);
// console.log(newData);

// let data = [10,20,30,40,50];

// let item = {
//     userName: "Sanju",
//     age: 20,
//     adress: "Indore",
//     getName: function() {
//         // return `My name is ${this.userName} i am  ${this.age} years old and i am from ${this.adress}`;
//         return this;
//     },
//     getNameArrow: () => {
//         return this;
//     }
// }

// console.log(item.getName());
// console.log(item.getNameArrow());

// classes

// class Fruits{
//     name = "Orange";
//     catogory = "Fruits";
//     constructor() {
//         console.log(this.name);
//         console.log(this.catogory);
//     }

//     getFruits(name, sarName) {
//         return name + " " + sarName;
//     }
// }

// let f1 = new Fruits;
// console.log(f1.getFruits("Sanju", "Rajput"));

// let name = "sanju rajput \"from gwalior\"";
// document.getElementById('result').innerText = name.indexOf('gwalior');

// let str = "The rain in SPAIN stays mainly in the plain mohan name mohan mohan";
// let matchStr = str.match('rain');
// let numbers = [10,50,44,36,78,99,109];

// document.getElementById('btn').addEventListener('click', ()=> {

// if(str.match('rain')) {
//     console.log('Found');
//     document.getElementById('result').innerText = "Found";
// } else {
//     console.log('Not found');
// }
// document.getElementById('result').innerText = str.match(/mohan/g);
// document.getElementById('result1').innerText = "Length: " + str.length;

// let newStr = str.split();
// document.getElementById('result').innerText = newStr;
// document.getElementById('result').innerText = Math.max(10,50,44,36,78,99,109);

// document.getElementById('result').innerText = Math.floor(Math.random()*10)+1;

//         let today = new Date();
//         document.getElementById('result').innerText = ;

// });

// let result = document.getElementById("h");
// let m = document.getElementById('m');
// let s = document.getElementById('s');

// const displayTime = () => {
//   const today = new Date();
//   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   let seconds = today.getSeconds();

//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   result.innerText = `${hours}:${minutes}:${seconds}`;

//   setTimeout(displayTime, 1000);
// };
// displayTime();

// const arr = ['mohan','sanju','deepak','amit'];
// console.log(arr.length);

// for(let i=0; i<arr.length; i++) {

//     console.log(i+1 + " " + arr[i]);
// }

// let fruits = ['Banana', 'Mango', 'Papaya','Orange'];
// let resultEle = document.querySelector('.result');
// let btnEle = document.getElementById('btn');
// let inputEle = document.getElementById('inData');
// let h1Ele = document.getElementById('data');

// const displayData = ()=> {
//     if(inputEle.value === "") {
//         alert("Input field can't be empty!");
//     } else {
//         fruits.push(inputEle.value);
//     }
// }

// btnEle.addEventListener('click', () => {
//     displayData();
//     inputEle.value = "";
// });

// setTimeout(() => {
//     for(let i = 0; i<fruits.length; i++) {
//         resultEle.innerHTML += `<p>${fruits[i]}</p>`;
//     }
// },2000);

// let data1 = ['mohan', 'deepak', 'rajesh', 'saloni'];
// let data2 = ['janvi', 'sonam', 'rashmi', 'rakshita'];
// let data3 = ['chetan', 'nihal', 'shivani', 'lokesh'];

// console.log(data.join(' + '));
// console.log(data1.concat(data2, data3));
// data1.splice(2,0,'soma','janvi');

// const mergeData = data1.concat(data2, data3);

// // console.log(mergeData.toString());
// let name1 = 'janki';
// let name2 = 'sama';
// let name3 = 'shivani';

// data1.unshift(name1, name2, name3);

// console.log(data1);

// let myData = data2.slice(1,4);

// console.log(data2);
// console.log(myData);

// let data1 = ["mohan", "deepak", "rajesh", "saloni"];
// let data2 = ["janvi", "sonam", "rashmi", "rakshita"];
// let data3 = ["chetan", "nihal", "shivani", "lokesh"];

// const sortData1 = data1.sort();
// const sortData2 = data2.sort();
// const sortData3 = data3.sort();
//
// console.log(sortData1);
// console.log(sortData2);
// console.log(sortData3);
//
// console.log(sortData1.reverse());
// console.log(sortData2.reverse());
// console.log(sortData3.reverse());

/*

let numbers1 = [4, 2, 6, 9, 7, 8, 3, 1, 11, 15, 46, 78];
let numbers2 = [55,46,8,78,88,99,22,33,66,100,200,300,500,400];

let sortNumbersAccending = numbers1.sort((a, b) => a - b);

let sortNumbersDeccending = numbers2.sort((a, b) => b - a);

console.log(sortNumbersAccending);
console.log(sortNumbersDeccending);

const res1Ele = document.querySelector('.res1');
const res2Ele = document.querySelector('.res2');
const btn1Ele = document.querySelector('.btn1');
const btn2Ele = document.querySelector('.btn2');


const sortAlphabetically = () => {
    let sortNumbers1 =  numbers1.sort();
    res1Ele.innerText = sortNumbers1;
}

const sortNumerically = () => {
    let sortNumbers2 = numbers1.sort((a,b) => a-b);
    res2Ele.innerText = sortNumbers2;
}

btn1Ele.addEventListener('click', sortAlphabetically);
btn2Ele.addEventListener('click', sortNumerically);
 */

/*
const points = [10, 55, 66, 9, 4, 33, 22, 11];

document.querySelector(".res1").innerText = points;

const randomData = () => {
  points.sort(() => {
    return 0.5 - Math.random();
  });
  document.querySelector(".res1").innerText = points;
};

document.querySelector(".btn1").addEventListener("click", randomData);
*/

/*
const points = [10, 55, 66, 9, 4, 33, 22, 11];


// const lowestNumberArr = ()=> {
//     let lowestNumber = points.sort((a,b) => a-b);
//     document.querySelector('.res1').innerText = lowestNumber[0];
// }

// document.querySelector('.btn1').addEventListener('click', lowestNumberArr);

const largestNumberArr = ()=> {
    let largestNumber = points.sort((a,b) => b-a);
    document.querySelector('.res1').innerText = largestNumber[0];
}

document.querySelector('.btn1').addEventListener('click', largestNumberArr);
*/

/*

let numbers = [5,6,99,4,3,55,44,66];

// const minNumber = () => {
//     document.querySelector('.res1').innerText =  Math.min(...numbers);
// }

// document.querySelector('.btn1').addEventListener('click', minNumber);

const maxNumber = () => {
    document.querySelector('.res1').innerText =  Math.max(...numbers);
}

document.querySelector('.btn1').addEventListener('click', maxNumber);

*/

/*

let numbers = [5,6,99,4,3,55,44,66];
const resultEle = document.querySelector('.res1'); 

// const minNumber = (arr) => {
//     let arrLength = numbers.length;
//     let min = Infinity;
//     while (arrLength--) {
//         if(arr[arrLength] < min) {
//             min = arr[arrLength];
//         }
//     }
//     return min;
// }

const maxNumber = (arr) => {
    let lengthArr = arr.length;
    let max = -Infinity;
    while (lengthArr--) {
        if(arr[lengthArr] > max) {
            max = arr[lengthArr];
        }
    }
    return max;
}

document.querySelector('.btn1').addEventListener('click', () => {
    resultEle.innerHTML = maxNumber(numbers);
});

*/

/*

const cars = [
    {type: "Volvo", year:2016},
    {type: "Saab", year: 2001},
    {type: "Honda", year: 2010}
];

const displayCars1 = () => {
    document.querySelector('.res1').innerHTML = 
    `${cars[0].type} ${cars[0].year} <br>
    ${cars[1].type} ${cars[1].year} <br>
    ${cars[2].type} ${cars[2].year} <br>
    `
}

displayCars1();

cars.sort((a,b) => a.year - b.year);

// console.log(cars);
const displayCars2 = () => {
    document.querySelector('.res2').innerHTML = 
    `${cars[0].type} ${cars[0].year} <br>
    ${cars[1].type} ${cars[1].year} <br>
    ${cars[2].type} ${cars[2].year} <br>
    `
}



document.querySelector('.btn1').addEventListener('click', displayCars2);
*/

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "Honda", year: 2010 },
// ];

// const displayCars1 = () => {
//   document.querySelector(
//     ".res1"
//   ).innerHTML = `${cars[0].type} ${cars[0].year} <br>
//     ${cars[1].type} ${cars[1].year} <br>
//     ${cars[2].type} ${cars[2].year} <br>
//     `;
// };

// displayCars1();

// const mySortFunction = () => {
//   cars.sort((a, b) => {
//     let x = a.type.toLowerCase();
//     let y = b.type.toUpperCase();
//     if (x < y) {
//       return -1;
//     }
//     if (x > y) {
//       return 1;
//     }
//     return 0;
//   });
//   displayCars2();
// };

// // console.log(cars);
// const displayCars2 = () => {
//   document.querySelector(
//     ".res2"
//   ).innerHTML = `${cars[0].type} ${cars[0].year} <br>
//       ${cars[1].type} ${cars[1].year} <br>
//       ${cars[2].type} ${cars[2].year} <br>
//       `;
// };
// displayCars2();

// document.querySelector(".btn1").addEventListener("click", mySortFunction);


/*-------------------Destructring of array-------------------*/

const fruits = ["Banana", "Orange", "Pineapple", "Guava", "Papaya"];
// console.log(fruits);

// let [,,, fruit4, fruit5 = "Unknow fruit"] = fruits;

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// console.log(fruit4);
// console.log(fruit5);


/*-------------------Rest operator-------------------*/

// let [fruit1,fruit2, ...fruitx] = fruits;

// console.log(fruit1);
// console.log(fruitx);


/* -------------------destructring of object------------------- */

let user = {
    name: "Sanju",
    email: "sanju@test.com",
    phone: 9522543648,
    address: "Indore"
};

// console.log(user);

// let {name, email, phone, address, state = "MP"} = user;

// console.log(name);
// console.log(email);
// console.log(phone);
// console.log(address);
// console.log(state);

/*-------------------rest operator-------------------*/

let {phone, ...email} = user;

// console.log(name);
// console.log(phone);
// console.log(email);

/*------------------- REST PARAMETER---------------------*/
function sum(a,b,...c) {
    console.log(c);
    return a+b;
}

// console.log(sum(2,4,3,5));

function sumAll(...args) {
    let sum = 0;
    // return args;
    for(let arg of args) {
        sum += arg;
    }
    return sum;
}

// console.log("Sum = ",sumAll(2,4,6,7,1));

function showName(first, last, ...etc) {
    console.log(first + " " + last);
    console.log(etc);
}

// showName('Sanju', 'Rajput', 9522543648, 'Indore');

function names() {
    console.log(arguments.length);
    for(let name of arguments) {
        console.log(name);
    }
}

// names('sanju','mohan','deepak','raja');
function f() {

let showArg = () => {
    // console.log(arguments);
    for(let name of arguments) {
        console.log(name);
    }
}

// showArg();
}
// f('sanju','mohan','deepak','raja')

/*-------------------SPREAD OPERATOR-------------------*/

// console.log(Math.max(5,6,9,8,2));

let list1 = [5,4,7,8,9,3,2,10,11,55];
let list2 = [52,44,75,83,93,33,23,103,121,055];

console.log(Math.max(...list1, ...list2,50));































