//브라우저의 window와 같은 전역 객체.
//모든 파일에서 접근 가능하며 생략 가능함(global.require -> require)

module.exports = () => global.message;
