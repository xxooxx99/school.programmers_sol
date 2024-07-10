//sum prcie += (price(i) * count(i)) 


function isValidElement(price,money,count){
    if(price < 1 || price > 2500) return false;
    if(money < 1 || money > 1000000000) return false;
    if(count < 1 || count > 2500) return false; 
    return true;
}

function solution(price,money,count){
    if(!isValidElement(price,money,count)){
        throw new Error("잘못된 입력!");
        
    }
    let sum = 0;

    for(let i=1; i <= count; i++){
        sum += price * i;
    }
    let result = 0;
    result = sum - money;
    return result > 0 ? result : 0;
}


console.log(solution(3,20,4));
console.log(solution(4,30,3));