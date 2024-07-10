function Restriction(number,limit,power){
    if(number < 1 || number > 100000) return false;
    if(limit < 1 || limit > 100) return false;
    if(power < 1 || power > limit) return false;
    return true;
}

function solution(number,limit,power){
    if(!Restriction(number,limit, power)) {
        throw new Error("RESTRICTION VIOLIATION")
    }
    //math.sqrt 이용하여 number의 약수구하기
    //1부터 number까지 각 번호의 약수의 갯수구하고, limit 보다 작으면 str 배열에 추가, limit보다 크면 power에 해당하는 숫자 추가
    let str = [];
    for(let j = 1; j <= number; j++){
        let count = findDivisor(j);
        console.log(count);
        if(count <= limit){
            str.push(count);
        }else if(count > limit){
            str.push(power);
            }
        }
        console.log(str);
        return arraySum(str);
    }


function arraySum(arr){
    let sum = 0;
    for(let k =0; k < arr.length; k++){
        sum += arr[k];
    }
    return sum;
}
function findDivisor(number){
    let result = [];
    for(let i = 1; i <= Math.sqrt(number); i++){
        if(number % i  === 0) {
            result.push(i);
            if(number / i !== i) 
                result.push(number / i );
        }
    }
    return result.length;
    }

console.log(solution(10, 3, 2));