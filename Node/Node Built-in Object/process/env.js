//Process.env

//NODE_OPTIONS = --max-old-space-size=8192
//UV_THREADPOOL_SIZE = 8
//노드의 메모리를 8GB까지 사용할 수 있게 하는 환경 변수
//첫번째 '='을 기준으로 왼쪽이 환경 변수의 이름, 오른쪽이 값

//시스템 환경 변수 외에도 임의로 환경 변수를 저장할 수 있음
//대표적으로 서비스의 중요한 키를 저장하는 공간(서버나 데이터베이스의 비밀번호와 각종 API키)
//따라서 중요한 비밀번호는 아래와 같이 process.env의 속성으로 대체

const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;
//이후 process.env에 직접 SECRET_ID와 SECRET_CODE를 넣으면 됨
//(넣는 방법은 운영체제마다 다름)
