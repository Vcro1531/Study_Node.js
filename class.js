//클래스 문법
//아래는 프로토타입 상속 예제 코드
var Human = function (type) {
	this.type = type || 'human';
};

Human.isHuman = function (human) {
	return human instanceof Human;
};

Human.prototype.breathe = function () {
	alert('h-a-a-a-m');
};

var Zero = function (type, firstName, lastName) {
	Human.apply(this.arguments);
	this.firstName = firstName;
	this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; //상속부분
Zero.prototype.sayName = function () {
	alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero); //true

//위 코드를 클래스 기반으로 바꾼 코드

class Human {
	constructor(type = 'human') {
		this.type = type;
	}

	static isHuman(human) {
		return human instanceof Human;
	}

	breathe() {
		alert('h-a-a-a-m');
	}
}

class Zero extends Human {
	constructor(type, firstName, lastName) {
		super(type);
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayName() {
		super.breathe();
		alert(`${this.firstName} ${this.lastName}`);
	}
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); //true
