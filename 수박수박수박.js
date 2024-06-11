function isvalidelement(n) {
    return n <= 10000;
}

function solution(n) {
    if (!isvalidelement(n)) {
        throw new Error("잘못된 입력");
    }
    // "수박" 패턴을 반복한 후 필요한 길이만큼 자르기
    return "수박".repeat(n).substring(0, n);
}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"