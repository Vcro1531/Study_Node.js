//console 객체는 보통 디버깅에 사용
//개발 진행 중 변수에 값이 제대로 들어 있는지 확인하기 위해 사용

const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
	outside: {
		inside: {
			key: 'value',
		},
	},
};
console.time('전체 시간'); //console.time(레이블): console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정
console.log('평범한 로그. 쉼표로 구분해 여러 값을 찍을 수 있음.');
console.log(string, number, boolean);
console.log('에러 메세지는 console.error에 담아야함.');

console.table([
	//console.table(배열): 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됨
	{ name: '제로', birth: 1994 },
	{ name: 'hero', birth: 1988 },
]);

console.dir(obj, { colors: false, depth: 2 }); //console.dir(객체, 옵션): 객체를 콘솔에 표시할 때 사용
console.dir(obj, { colors: true, depth: 1 }); //첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣음
//colors를 true로 하면 콘솔에 색이 추가되어 보기 편함, depth는 객체 안의 객체를 몇 단계까지 보여줄지 결정함

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정');

function b() {
	console.trace('에러 위치 추적'); //에러가 어디서 발생했는지 추적할 수 있게 함
	//일반적으로 사용하지 않지만 위치가 나오지 않는다면 사용
}
function a() {
	b();
}
a();

console.timeEnd('전체 시간');

/*
아래는 출력 결과 : 

평범한 로그. 쉼표로 구분해 여러 값을 찍을 수 있음.
abc 1 true
에러 메세지는 console.error에 담아야함.
┌─────────┬────────┬───────┐
│ (index) │  name  │ birth │
├─────────┼────────┼───────┤
│    0    │ '제로' │ 1994  │
│    1    │ 'hero' │ 1988  │
└─────────┴────────┴───────┘
{ outside: { inside: { key: 'value' } } }
{ outside: { inside: [Object] } }
시간 측정: 3.579ms
Trace: 에러 위치 추적
    at b (C:\Study_Node.js\Node\Node Built-in Object\console\console.js:34:10)
    at a (C:\Study_Node.js\Node\Node Built-in Object\console\console.js:38:2)
    at Object.<anonymous> (C:\Study_Node.js\Node\Node Built-in Object\console\console.js:40:1)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
전체 시간: 24.16ms
*/
