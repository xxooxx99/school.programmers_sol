// 이메일 주소 유효성 검사
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = emailPattern.test('thisissample@email.com');
console.log(isValidEmail); // 예상 출력: true