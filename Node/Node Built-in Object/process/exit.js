//process.exit

//실행 중인 노드 프로세스를 종료함
//이 함수를 사용하면 서버가 멈추므로 특수한 경우를 제외하고 사용하지 않음
//서버 외 독립적인 프로그램에서 수동으로 노드 정지를 위해 사용

//아래는 setInterval로 반복되는 코드를 process.exit()로 멈추는 코드

let i = 1;
setInterval(() => {
	if (i > 5) {
		console.log('종료');
		process.exit();
	}
	console.log(i);
	i += 1;
}, 1000);

/*
출력결과:
1
2
3
4
5
종료
*/
