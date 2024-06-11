function isValidElement(n) {
    return -10000000 <= n && n <= 10000000;
}

function solution(a, b) {
    if (!isValidElement(a) || !isValidElement(b)) {
        throw new Error('입력 오류');
    }
    
    let minValue = Math.min(a, b);
    let maxValue = Math.max(a, b);
    let n = maxValue - minValue + 1;
    let totalSum = (n * (minValue + maxValue)) / 2;

    return totalSum;
}