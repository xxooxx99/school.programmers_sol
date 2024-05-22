function isvalidelement(element){
    return -10000 <= element && element <= 10000;
}

function isvalidarray(numbers) {
    const isvalidlength = numbers.length >=1 && numbers.length <= 100;
    const arevalidelements = numbers.every(isvalidelement);

    return isvalidlength&& arevalidelements;
}


function solution(numbers) {
    //제한사항 불일치시
    if(!isvalidarray(numbers)) {
        throw new Error("잘못된 입력!");
        
    }

    //일치시
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    let average = sum /numbers.length
    return average
}

console.log(solution([1,2,3,4]));