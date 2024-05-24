function isvalidelement(num){
    return 1<= num && num<= 50000000000000
}

function solution(num) {
    if(!isvalidelement(num)) {
        throw new Error("잘못된 입력!")
    }
    var answer = 0;
    const sqrtnum = Math.sqrt(num);
    if(Number.isInteger(sqrtnum)) {
        return Math.pow(sqrtnum + 1,2);
    }
    else
    {
        return -1;
    }
    return answer;
}

console.log(solution(144))