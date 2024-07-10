function isValidElement(s) {
    // 문자열의 길이가 4 혹은 6인지 확인
    return s.length === 4 || s.length === 6;
}

function solution(s) {
    if (!isValidElement(s)) {
        return false; // 잘못된 입력일 경우 false 반환
    }

    // 문자열이 숫자로만 구성되어 있는지 확인
    // isNaN이 숫자가 아닌 것을 true로 반환하므로, 전체 문자열이 숫자인지 확인
    if (!isNaN(s) && !isNaN(parseFloat(s))) {
        return true;
    } else {
        return false;
    }
}

console.log(solution('1234')); // true
console.log(solution('a1234')); // false
console.log(solution('12345')); // false, 에러 대신 false 반환
console.log(solution('123456')); // true




//isNaN(s) s가 숫자로 변환될 수 없음?  O-> true X -> false
//!isNan(s) s가 숫자로 변환될 수 있음? O-> ture X -> false
//parseFlost(s) s를 부동 소수점 숫자로 변환 시도 -> 
//변환이 가능하다면 숫자로 반환, 아니면 NaN(Not a Number)을 반환
//!isNan(parseFloat(str)) -s를 부동 소수점 숫자로 변환 했을때 Nan이 아니면 
//true 반환, 문자열이 숫자로 변환될 수 있음(숫자임)