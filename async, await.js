//async/await문법은 Promise의 반복되는 then, catch를 줄일 수 있다.

function findAndSaveUser(Users) {
	Users.findOne({})
		.then((user) => {
			user.name = 'zero';
			return user.save();
		})
		.then((user) => {
			return Users.findOne({ gender: 'm' });
		})
		.then((user) => {
			//생략
		})
		.catch((err) => {
			console.error(err);
		});
}

//Promise는 콜백과 다르게 코드의 깊이가 깊어지진 않지만, 코드는 여전히 길다. 아래는 async/await 문법을 사용한 코드.

async function findAndSaveUser(Users) {
	let user = await Users.findOne({});
	user.name = 'zero';
	user = await user.save();
	user = await Users.findOne({ gender: 'm' });
	//생략
}

//함수 선언부를 async function으로 교체.
//프로미스 앞에 await을 붙여 해당 프로미스가 resolve될 때까지 기다린 다음 로직으로 넘어감.

//위 코드는 에러를 처리하는 부분(reject된 경우)가 없으므로 아래와 같은 추가 작업 필요.

async function findAndSaveUser(Users) {
	try {
		let user = await Users.findOne({});
		user.name = 'zero';
		user = await user.save();
		user = await Users.findOne({ gender: 'm' });
		//생략
	} catch (error) {
		console.error(error);
	}
}

//for문과 async/await를 같이 써서 프로미스를 순차적으로 실행할 수 있다.(노드 10버전부터)

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
	for await (Promise of [promise1, promise2]) {
		console.log(promise);
	}
})();

//for await of문을 사용해 프로미스 배열을 순회.
//async 함수의 반환값을 항상 Promise로 감싼 후
//실행 후 then을 붙이거나 또 다른 async 함수 안에서 await을 붙여 처리 가능.

async function findAndSaveUser(Users) {
	//생략
}
findAndSaveUser().then(() => {
	/*생략*/
});
//또는
async function other() {
	const result = await findAndSaveUser();
}
