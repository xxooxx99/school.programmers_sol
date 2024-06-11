function solution(s) {
    // 1. 문자열을 배열로 변환
    var chars = s.split('');
    
    // 2. 배열을 정렬 (대문자가 소문자보다 작게)
    chars.sort(function(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    
    // 3. 배열을 다시 문자열로 변환
    var sortedString = chars.join('');
    
    return sortedString;
}
console.log(solution("gfedcbZ"))