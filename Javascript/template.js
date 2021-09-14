//템플릿 문자열

//기존 ES5 문법
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + "는 '" + result + "'";
console.log(string1); //1 더하기 2는 '3'

//ES2015 문법
const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`; //백틱(`)을 사용해 문자열 안에 변수를 넣을 수 있음
console.log(string2); //1 더하기 2는 '3'
