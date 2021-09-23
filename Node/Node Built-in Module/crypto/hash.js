//다양한 방식의 암호화를 도와주는 모듈
//비밀번호는 보통 단방향 암호화 알고리즘을 사용해 암호화함
//복호화할 수 없으므로 암호화라고 표현하는 대신 해시 함수라고 부르기도 함

const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/*
createHash(알고리즘): 사용할 해시 알고리즘을 넣음. md5, sha1, sha256, sha512 등이 가능.
md5, sha1은 취약점이 발견되어 쓰지 않으며, 현재는 sha512를 사용함

잠시 멈춤
*/
