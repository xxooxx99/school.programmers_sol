//정수배열,찾을수없는 숫자,비교,조건문,반복문
//1~9까지 배열과 비교
//set 이용하여 중복 조건 제한
function isvalidelement(numbers) {
    if(numbers.length < 1 || numbers.length > 10) return false;
    for(let num of numbers){
        if(num<0 || num >9) return false;
    }
    return true;
}

function Duplicate_true(numbers){
    const unique = new set(numbers); //중복없는 set 배열
    return unique.size != numbers.length // 중복이 없으면 true 반환
}


function solution(numbers){
    if(!isvalidelement(numbers) && Duplicate_true(numbers)) {
        throw new Error("잘못된 입력")
    }
    let sum = 0;
    let sample = [1,2,3,4,5,6,7,8,9]
    const missnumbers = sample.filter(elemnet => !numbers.includes(elemnet));
    for(let num of missnumbers){
        sum += num
    }

    return sum;
}
console.log(solution([1,2,3,4,6,7,8,0]));