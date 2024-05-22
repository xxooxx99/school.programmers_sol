function isvalidelement(num) {
    return -2147483648 <= num && num <=2147483647
}

function solution(num){
    if(!isvalidelement(num)){
        throw new Error("잘못된 입력!")
    }
    var answer = ''
        if(num % 2 === 0){
            return 'Even'
        }
        else
            return 'Odd'
    return answer;
}

console.log(solution(24))