function isvalidelement(element){
    return 3<= element && element <= 1000000
}
function solution(numbers) {
    if(!isvalidelement(numbers)) {
        throw new Error("잘못된 입력");
    }
    var answer = 0;
    for(let x =1; x<numbers; x++){
        if (numbers % x === 1) {
            return x;
        }
    }
    return answer;
}
console.log(solution(10)); // 예상 출력: 3
console.log(solution(12)); // 예상 출력: 11