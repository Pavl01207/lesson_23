"use strict"
//
let result = `Я вивчаю` + ` верстку` + ` в 2022 році.`;
console.log(result);
//
let resultOne = `Pavlo ` + 29;
console.log(resultOne);
//
let resultTwo = 2 + `9`;
console.log(resultTwo);
//
let resultThree = 40 - 11 + ` My Age`;
console.log(resultThree);
//
let userName = ``;
let userNickName = `Slayer`;
let user = userName || userNickName || `Not found`;
console.log(user);
//
let admin = 0;
let userTwo = 1;
admin > userTwo || userTwo ++;
console.log(userTwo);
//
let someNumOne = 5 < 3;
let someNumTwo = 8 + 8;
console.log(someNumOne || someNumTwo);
//
console.log(5 && 0 || 2 && 1);
//
let users = 29;
(users > 0) && console.log(`User Age ${users}`);
//
console.log(!true && 10 || !1 && 20);
//
let numUno = 1.005 + Number.EPSILON;
let numTwo = Math.round(numUno * 100) / 100;
console.log(numTwo);
//
let value = "135.58px";
console.log(parseFloat(value));
//
let valueOne = 58 + `Pavlo`;
if (isNaN(valueOne)){
	console.log(`Result is NaN`);
};
//
console.log(Math.max(10,58,39,-150,0));
//
let someNumber = 58.858;
console.log(Math.floor(someNumber));
//
let text = 'фрилансер';
console.log(text[5]);
console.log(text.toUpperCase());
console.log(text.slice(3,6));
console.log(text.includes('лан',4));
//
let message = "Hello";
let messageOne;
messageOne = 5 > 10 ? ", Pavlo" :
5 > 30 ? ", Katya" :
5 > 20 ? ", Evgen" :
5 > 1 ?  ", Chack" : ", Yulia"
message += messageOne;
console.log(message);
//
if (1 === '1'){
	console.log('Правда');
} else {
	console.log('Не вірно');
}
//
if (5 == '5'){
	console.log('Правда');
} else {
	console.log('Не вірно');
}
//
let messageTwo = (92 > '11' && 58 < 100) ? 'Правда' : 'Не вірно';
console.log(messageTwo);
//
if (0) {
	console.log('Не вірно');
} else if (" "){
	console.log('Правда');
}
//Задача№1
let num = 1;
while (num < 6) {
	console.log(num);
	++num;
}
//Задача№2
let numb = 8;
while (numb) {
	console.log(numb);
	numb--;
}
//Задача№3
let numbe = 0;
while (numbe < 3) {
	console.log(`Число: ${numbe}`);
	numbe++;
}
//Задача№4
firstFor: for (let numberFirst = 0; numberFirst < 2; numberFirst++){
	for (let size = 0; size < 3; size++){
		if (size == 1){
			break firstFor;
		}
		console.log(size);
	}
}
//------------------------------------------------
let someString = `I learn JavaScript!`;
for (let i = 0; i < someString.length; ++i){
	console.log(someString[i]);
}
console.log(someString.length);
console.log(someString.toUpperCase());
console.log(someString.includes('Java'));
console.log(someString.startsWith('learn'));
console.log(someString.endsWith('!'));
console.log(someString.slice(8,19));
console.log(someString.replace('learn','know'));
//
let someNewString = `I know JavaScript!`;
let someResult = 10 > someNewString.length ? console.log(someString.toUpperCase()) : console.log(someNewString.toLowerCase());
//
let nameWife = `Kate`;
let nameHusband = `Pavlo`;
if (nameWife.length > nameHusband.length) {
	console.log(`In our family main is Wife ${nameWife}!`);
} else {
	console.log(`In our family main is Husband ${nameHusband}!`);
};
//
let dayOne = `Monday`, dayTwo = `Tuesday`, dayThree = `Wednesday`, dayFour = `Thursday`, dayFive = `Friday`, daySix = `Saturday`, daySeven = `Sunday`;
let a = 1;
while (a < 8 ){
	a++;
}
if (a == 1){
	console.log(`The day of week is ${dayOne}`);
} else if (a == 2) {
	console.log(`The day of week is ${dayTwo}`);
} else if (a == 3) {
	console.log(`The day of week is ${dayThree}`);
} else if (a == 4) {
	console.log(`The day of week is ${dayFour}`);
} else if (a == 5) {
	console.log(`The day of week is ${dayFive}`);
} else if (a == 6) {
	console.log(`The day of week is ${daySix}`);
} else if (a == 7) {
	console.log(`The day of week is ${daySeven}`);
} else {
	console.log(`Not today)`);
};
