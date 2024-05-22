function isvalidelement(numbers){
    return 1<= numbers && numbers <=10000000000
}

function solution(numbers){
    if(!isvalidelement(numbers)){
        throw new Error("잘못된입력");

    }
    var answer=[];
    let number = numbers.toString().split('').map(number => parseInt(number))
    number.reverse();
    return number;
}

console.log(solution(12345));