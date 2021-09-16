//setTimeout(콜백 함수, 밀리초): 주어진 밀리초(1,000분의 1초) 이후에 콜백 함수를 실행
//setInterval(콜백 함수, 밀리초): 주어진 밀리초(1,000분의 1초) 이후에 콜백 함수를 반복 실행
//setImmediate(콜백 함수): 콜백 함수를 즉시 실행

//위 타이머들은 모두 아이디를 반환하며, 아이디를 사용해 타이머 취소 가능

//clearTimeout(아이디)
//clearInterval(아이디)
//clearImmediate(아이디)

//아래는 코드 실행 순서 예측해보기

const timeout = setTimeout(() => {
	console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
	console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
	console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
	clearTimeout(timeout2);
	clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
	console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
	console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);
