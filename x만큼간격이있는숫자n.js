function isvalidelement(x,n){
    return -10000000 <= x && x <= 10000000 && 1 <= n && n<=1000
}

function solution(x,n){
    if(!isvalidelement(x,n)) {
        throw new Error("잘못된입력");
    }
    var answer = [];
    for(let i = 0; i<n; i ++){
        answer.push(x * (i + 1));
        
    }
    return answer;
}


console.log(solution(2,5));