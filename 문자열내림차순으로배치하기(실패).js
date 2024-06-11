function isvalidelement(s) {
    if (s.length < 1) return false;
    return true;
}

function solution(s) {
    if (!isvalidelement(s)) {
        throw new Error("잘못된 입력");
    }
    
    // 해결 논리 1: 문자열을 배열로 변환 - split 사용
    var array1 = s.split('');
    
    // 해결 논리 2: 배열을 내림차순으로 정렬 - sort 사용
    array1.sort(function(a, b) {
        if (a.toLowerCase() > b.toLowerCase()) {
            return -1; // 소문자 a, b를 비교해서 a > b가 참이면 -1 -> 큰 문자 a를 앞으로 보낸다
        } else if (a.toLowerCase() < b.toLowerCase()) {
            return 1; // 소문자 a, b를 비교해서 a < b가 참이면 1 -> 작은 문자 a를 뒤로 보낸다
        } else {
            // 대문자와 소문자가 동일한 경우, 대문자가 뒤로 오게 설정
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        }
    });
    
    // 해결 논리 4: 배열을 다시 문자열로 변환 - join 사용
    return array1.join('');
}

console.log(solution("Zbcdefg")); // "gfedcbZ"
