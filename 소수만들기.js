//pseudocode 
//decimal 알고리즘 함수 만들기
//주어진 nums로 3개를 골라 숫자만들기(조합사용)



function Restriction(nums){
    if(nums.length < 3 || nums.length > 50) return false;
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] < 1 || nums[i] > 1000) return false;
    }
    return true;
}

function makecombi(nums){
    let combisum =[];
    for(let i = 0; i < nums.length-2; i++) {
        for(let j = 0; j < nums.length-1; j++) {
            for(let k = 0; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                combisum.push(sum);
            }
        }
        return combisum;
    }   
}

function isprime(combisum){
    for(let i = 0; i<combisum.length; i++) {
        if(combisum[i] % 1!== 0) return false;
    }
}
function solution(nums){
    if(!Restriction(nums)){
        throw new Error("Restriction violation!");
    }

}

console.log(solution([1,2,3,4]));