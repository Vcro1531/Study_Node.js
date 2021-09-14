//구조분해 할당

//아래는 객체의 속성을 같은 이름의 변수에 대입하는 코드
var candyMachine = {
	status: {
		name: 'node',
		count: 5,
	},
	getCandy: function () {
		this.status.count--;
		return this.status.count;
	},
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

//배열에 대한 구조분해 할당 문법

var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];
//array 배열의 첫 번째(0), 두 번째(1), 네 번째(3) 요소를 변수에 대입하는 코드.
//아래와 같이 바꿀 수 있음
const array = ['node.js', {}, 10, true];
const [node, obj, , bool] = array;
