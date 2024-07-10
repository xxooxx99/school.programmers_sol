function isValidElement(s) {
    // 문자열의 길이가 4 혹은 6인지 확인
    return s.length === 4 || s.length === 6;
}

function solution(s) {
    if (!isValidElement(s)) {
        return false; // 잘못된 입력일 경우 false 반환
    }

    // 정규 표현식을 사용하여 문자열이 숫자로만 구성되어 있는지 확인
    if (/^[0-9]+$/.test(s)) {
        return true;
    } else {
        return false;
    }
}

console.log(solution('1234')); // true
console.log(solution('a1234')); // false
console.log(solution('12345')); // false, 에러 대신 false 반환
console.log(solution('123456')); // true
console.log(solution('123e4')); // false
console.log(solution('12 34')); // false
console.log(solution('0000')); // true
