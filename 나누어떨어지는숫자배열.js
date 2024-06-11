function isvalidelement(element,divisor){
    return 0< divisor && 0< element     
}

function isvalidarray(arr){
    return 1 <= arr.length 
}

function solution(arr,divisor){
    if(!isvalidarray(arr) || !isvalidelement(arr[0],divisor)) {
        throw new Error("잘못된입력");
    }

    let result = [];

    for (let i =0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            result.push(arr[i]);
        }
    }

    if (result.length === 0 ) {
        return [-1];
    }

    result.sort((a,b) => a-b);

    return result;
    //조건문
    //반복문사용
    //나눗셈
    //오름차순 정렬
}
