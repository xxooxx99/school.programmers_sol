function isvalidelement(left,right){
    return (1 <= left && left <= right && right <= 1000);
}

function countDivide(n) { //약수의 개수를 구하는 함수
    let count = 0; //약수의 개수를 세기 위한 변수 초기화
    for (let i = 1; i <= Math.sqrt(n); i++) { //1부터 n의 제곱근까지 반복문
        //제곱근 까지만 반복하는 이유 : 약수 쌍을 한번에 고려하기 위함
        //예를 들어 n이 36일 경우
        if ( n % i === 0){  //i가 n의 약수인경우
            if ( i === n / i) { //i와 n/i가 같은 경우, i=6, n=36 일때를 생각하면 됨(완전 제곱수)
                count += 1; // 중복을 피하기 위해 약수를 한번만 추가
            }
            else{
                count += 2; //그 이외에는 두약수를 추가
            }
        }
    }
    return count; //약수의 총 개수를 반환

}

function solution(left,right){
    if(!isvalidelement(left,right)){
        throw new Error("잘못된입력");
    }
    let result = 0 ; //result 변수 초기화

    for(let i = left; i<= right; i++){
        let divisorcount = countDivide(i);
        if(divisorcount % 2 ===0){
            result += i; //약수의 개수가 짝수인 경우 +
        } else {
            result -= i; //약수의 개수가 홀수인 경우 -
        }
    }
    for(let i = left; i<= right; i++){
        console.log(i,countDivide(i));
    }
    return result;

}

console.log(solution(13,17))


