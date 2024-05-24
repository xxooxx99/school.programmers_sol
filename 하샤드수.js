function isvalinumbers(x){
    return 1<= x && x <= 10000 
}

function getDigitSum(x) {
    let str = String(x);
    let arr = str.split('');
    let sum = 0;

    for (let i = 0; i< arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
function solution(x){
    if(!isvalinumbers(x)) {
        throw new Error("잘못된 입력!");
    }

    return isHarshadNumber(x);
}

function isHarshadNumber(x) {
    let sum = getDigitSum(x);
    return x % sum === 0;
}

console.log(solution(10));