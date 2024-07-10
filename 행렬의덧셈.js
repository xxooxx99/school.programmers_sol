function isValidElement(arr1,arr2){
    if(arr1.length > 500 || arr2.length > 500) return false;
    if(arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i].length !== arr2[i].length) return false;
    }
    return true;
}

function solution(arr1,arr2){
    if(!isValidElement(arr1,arr2)){
        throw new Error("잘못된 입력");
    }

    let result = [];
    for (let i = 0; i < arr1.length; i++){
        let row =[];
        for (let j = 0; j < arr1[i].length; j++){
            row.push(arr1[i][j] + arr2[i][j]);
        }   
        result.push(row);
    }
    return result;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));


