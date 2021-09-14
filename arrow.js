//화살표 함수
function add1(x, y) {
	//기존 function() {}
	return x + y;
}

const add2 = (x, y) => {
	return x + y;
};

const add3 = (x, y) => x + y; //return문 밖에 없는 경우 add3, add4처럼 바로 적어도 됨.

const add4 = (x, y) => x + y;

function not1(x) {
	return !x;
}

const not2 = (x) => !x;

//기존 function문과 다른 점은 this 바인드 방식임.
var relationship1 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends: function () {
		var that = this; //relationship1을 가리키는 this를 that에 저장
		this.friends.forEach(function (friend) {
			//function을 사용해서 간접적으로 접근.
			console.log(that.name, friend);
		});
	},
};
relationship1.logFriends();

const relationship2 = {
	name: 'zero',
	friend: ['nero', 'hero', 'xero'],
	logFriends() {
		this.friends.forEach((friend) => {
			//바깥 스코프인 logFriends()의 this를 그대로 사용 가능.
			console.log(this.name, friend);
		});
	},
};
relationship2.logFriends();
