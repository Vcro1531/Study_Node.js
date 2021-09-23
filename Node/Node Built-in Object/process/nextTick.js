//process.nextTick(콜백)
//이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만듦

setImmediate(() => {
	console.log('immediate');
});
process.nextTick(() => {
	console.log('nextTick');
});
setTimeout(() => {
	console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

/*
출력 결과 : 
nextTick
promise  
timeout  
immediate

*/
