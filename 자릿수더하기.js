//숫자를 문자열로 변환한뒤, 각 자릿수별로 나누어 배열에 저장, 그리고 다시 정수형으로 바꾸기
//배열의 합구하기

function isvalinumbers(numbers){
    return 0< numbers && numbers <= 100000000
}

function solution(numbers){
    //조건 불일치시
    if(!isvalinumbers(numbers)) {
        throw new Error("잘못된 입력!")
    }
    //조건 일치시
    let nums = numbers.toString().split('').map(num => parseInt(num));
    let sum = 0;
    for(let i = 0; i<nums.length; i++) {
        sum += nums[i];
    }
    return sum;


}

console.log(solution(12345))