function solution(num1, num2) {
    var answer;
    if ((0 <= num1 && num1 <= 100) && (0 <= num2 && num2 <= 100)) {
        answer = Math.floor((num1 / num2) * 1000); // 소수점 아래를 버림
        return answer;
    } else {
        return null;  
    }
}

console.log(solution(1, 16));