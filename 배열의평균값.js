function isvalidelement(element){
    return 0 <= element && element <= 1000;
}

function isvalidarray(numbers){
    const isvalidlength = numbers.length >= 1 && numbers.length <= 100;
    const arevalidelements = numbers.every(isvalidelement);

    return isvalidlength && arevalidelements;
}

function solution(numbers) {
    //조건 불일치시
    if(!isvalidarray(numbers)) {
        throw new Error("잘못된 입력");
        //return false; 대신 구문 출력 시도
    }

    //조건 만족시
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i]
    }
    let average = sum /numbers.length;
    return average.toFixed(1)
}
console.log(solution([3, 4, 5, 6, 7, 8, 9, 10]));