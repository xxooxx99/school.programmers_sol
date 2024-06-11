//절대값, 변수 absolutes, signs, 배열 더하기
//조건문,반복문

// function isvalidelement(absolutes,signs){
//     return 1 <= absolutes && absolutes <= 1000 && 1 <= absolutes.length && absolutes.length <= 1000 && signs.length === absolutes.length   
// }


// function solution(absolutes,signs){
//     if(!isvalidelement(absolutes[0],signs[0])){
//         throw new Error("잘못된 입력!")
//     }
//     else{
//     let result = [];
//     let sum = 0;

//     for(let i = 0; i < absolutes.length; i++) {
//         if(signs[i] === true) {
//             result.push(absolutes[i] * 1)
//         }
//         else if(signs[i] === false){
//             result.push(absolutes[i] * -1 )
//         }
//     }    
//     return result;
//     }
// }
// console.log(solution([4,7,12],[true,false,true]))


function isvalidelement(absolutes,signs) {
    if(absolutes.length < 1 || absolutes.length > 1000) return false;
    if(signs.length !== absolutes.length) return false;
    for (let i = 0; i< absolutes.length; i++){
        if(absolutes[i] < 1 || absolutes[i] >1000) return false;
        if(typeof signs[i] !== 'boolean') return false;
    }
    return true;
}

function solution(absolutes,signs){
    if(!isvalidelement(absolutes,signs)) {
        throw new Error("잘못된입력");
    }
    
    let sum = 0;

    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === true) {
            sum += absolutes[i]
        }
        else{
            sum -= absolutes[i] 
        }
    }
    return sum;
}
console.log(solution([4, 7, 12], [true, false, true]));
