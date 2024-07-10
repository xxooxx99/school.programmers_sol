// 유효성 검사 함수
function isValidString(strings, n) {
    // strings의 길이 확인
    if (strings.length < 1 || strings.length > 50) return false;
    
    for (let str of strings) {
        // 각 문자열의 길이 확인
        if (str.length < 1 || str.length > 100) return false;
        // 문자열의 길이가 n보다 큰지 확인
        if (str.length <= n) return false;
    }
    return true;
}

// 정렬 함수
function solution(strings, n) {
    // 유효성 검사
    if (!isValidString(strings, n)) return strings;

    // 정렬 수행
    strings.sort((a, b) => {
        // n번째 문자를 기준으로 비교
        if (a[n] < b[n]) return -1;
        if (a[n] > b[n]) return 1;
        // n번째 문자가 같으면 사전순으로 비교
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    return strings;
}

// 테스트
console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
