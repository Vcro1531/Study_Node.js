//프로미스
//ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스(Promise)기반으로 재구성됨.

const condition = true; //true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
	if (condition) {
		resolve('성공');
	} else {
		reject('실패');
	}
});
//다른 코드가 들어갈 수 있음
promise
	.then((message) => {
		console.log(message); //성공(resolve)한 경우 실행
	})
	.catch((error) => {
		console.error(error); //실패(reject)한 경우 실행
	})
	.finally(() => {
		//끝나고 무조건 실행
		console.log('무조건');
	});

//then이나 catch에서 다시 다른 then이나 catch를 붙일 수 있다.
//이전 then의 return 값을 다음 then의 매개변수로 넘김.

promise
	.then((message) => {
		return new Promise((resolve, reject) => {
			//then에서 new Promise를 return해야 다음 then에서 받을 수 있음
			resolve(message);
		});
	})
	.then((message2) => {
		console.log(message2);
		return new Promise((resolve, reject) => {
			resolve(message2);
		});
	})
	.then((message3) => {
		console.log(message3);
	})
	.catch((error) => {
		console.error(error);
	});

//콜백 함수를 쓰는 코드 예제
function findAndSaveUser(Users) {
	Users.findOne({}, (err, user) => {
		//첫 번째 콜백
		if (err) {
			return console.error(err);
		}
		user.name = 'zero';
		user.save((err) => {
			//두 번째 콜백
			if (err) {
				return console.error(err);
			}
			Users.findOne({ gender: 'm' }, (err, user) => {
				//세 번째 콜백
				//내용 생략
			});
		});
	});
}

//위 코드는 3개의 콜백 함수가 중첩되어 있음.

//아래는 Promise를 사용해 수정한 코드.

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
//따로 처리해야 했던 에러를 마지막 catch에서 한 번에 처리할 수 있음.
//모든 콜백 함수를 위와 같이 바꿀 수 있지는 않으며 메서드가 프로미스 방식을 지원해야함.

//Promise 여러 개를 실행하는 방법 : Promise.all

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
	.then((result) => {
		console.log(result); //['성공1','성공2']
	})
	.catch((error) => {
		console.error(error);
	});

//이외에도 Promise.resolve(즉시 resolve하는 프로젝트를 만듦)
//Promise.reject(위와 동일) 등이 있다.
