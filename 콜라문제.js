 function Restriction(a,b,n) {
    if (b < 1 || b >= a) return false;
    if (a < 1 || a > 10000000) return false;
    if (n < 1 || n > 10000000 || a > n) return false;
    return true;
}
 function solution(a,b,n) {
    if(!Restriction(a,b,n)){
        throw new Error("Restriction error");
    }
    let totalCoke = 0;

    while (n >= a) {
        // 교환 가능한 콜라 병 수를 계산
        let newCoke = Math.floor(n / a) * b;
        totalCoke += newCoke;  // 총 콜라 병 수에 더한다

        // 남은 빈 병의 수를 계산한다
        n = n % a + newCoke;
    }

    return totalCoke;  // 최종적으로 받은 콜라 병 수를 반환한다
}
console.log(solution(2,1,20));

