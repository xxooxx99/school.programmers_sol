function isValidElement(n){
    if(n < 1 || n > 100000000) return false;
    return true;
}
    //10진수 -> 3진수 -> 앞뒤 반전 -> 10진수
function solution(n){
    if(!isValidElement(n)) {
        throw new Error("잘못된입력");
        
    }
    //10진수 -> n진수
    //10진수를 n으로 나눈 몫이 0이 될때까지 n으로 나눔
    //n으로 나눌때마다 그 나머지가 n진수의 자릿수
    let three = ''; //3진수변수 빈 문자열로 초기화
    while(n>0) {
        three = (n % 3) + three; 
        n = Math.floor(n/3) ; //나머지 자릿수로 넘겨줌

    }
    //3진수 -> 앞뒤반전
    let reverse = '';
    for(let i = 0; i< three.length; i++){
        reverse += three[i];
    }

    //앞뒤반전 -> 10진수
    
    let decimal = 0;
    for (let i = 0; i< reverse.length; i++) {
        decimal += reverse[i] * Math.pow(3,i);
    }

    return decimal;

}

console.log(solution(45));