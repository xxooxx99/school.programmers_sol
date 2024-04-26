function solution(n) {
    var answer = 0;

    if(0<= n && n <= 1000) {
        for  (let i = 2; i <= n; i +=2){
            answer += i;
        }
    return answer;
    }
    else {
        return false;
    }
    
}

console.log(solution(10))