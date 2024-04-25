function solution(num1,num2) {
    var answer = 0;
    if (0 <= num1 <= 100 && 0<= num2 <= 100){
        answer = Math.floor(num1/num2);
    }
    return answer
}

console.log(solution(10,5))