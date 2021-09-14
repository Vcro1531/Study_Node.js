//객체 리터럴

var sayNode = function () {
	console.log('Node');
};
var es = 'ES';
var oldObject = {
	sayJS: function () {
		console.log('JS');
	},
	sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); //Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //Fantastic

//위 코드를 아래와 같이 쓸 수 있음

const newObject = {
	sayJS() {
		console.log('JS');
	},
	sayNode, //속성명과 변수명이 동일한 경우에는 한 번만 써도 되게 바뀜.
	//{name: name, age: age} -> { name, age}
	[es + 6]: 'Fantastic',
};
newObject.sayNode(); //Node
newObject.sayJS(); //JS
console.log(newObject.ES6); //Fantastic
//객체의 메서드에 함수를 연결할 때 콜론(:)과 function을 붙이지 않음.
