// JSON
// JSON 은 값이나 객체를 나타내주는 범용 포맷
// 클라이언트와 서버 간 데이터 교환 목적으로 사용하는 경우가 많음

// 메서드
JSON.stringify // 객체를 JSON으로 바꿔줌
JSON.parse // JSON을 객체로 바꿔줌

// 객체가 JSON으로 변경된 경우 타입이 문자열로 바뀜
// 이렇게 변경된 문자열은 JSON으로 인코딩된, 직렬화 처리된, 문자열로 변환된,
// 결집된 객체라고 부름
// JSON 특징
// 1. 문자열은 큰따옴표로 감싸야 함. 작은따옴표나 백틱은 X
// 2. 객체 프로퍼티 이름은 큰따옴표로 감싸야 함

// JSON.stringify 는 객체,배열,문자형,숫자형,불린형,null값에 적용가능
// 그러나 함수 프로퍼티(메서드), 심볼형 프로퍼티, 값이 undefined인 프로퍼티는 무시됨

// JSON.parse
// JSON으로 인코딩된 객체를 다시 객체로 디코딩 할수 있음