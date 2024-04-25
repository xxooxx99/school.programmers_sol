function solution(num1,num2) {
    var answer = 0;
    if((0<= num1 && num1 <= 10000) && ( 0<= num2 && num2 <= 10000)){
        answer = num1 == num2 ? 1: -1;
        return answer;
    } else{
        console.log("잘못된 입력")
        return null;
    }

}

console.log(solution(2,3))
console.log(solution(5,5))