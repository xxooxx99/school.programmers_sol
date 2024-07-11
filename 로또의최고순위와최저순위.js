function Restriction(lottos, win_nums) {
    // 배열의 길이를 확인
    if (lottos.length !== 6) return false;
    if (win_nums.length !== 6) return false;

    // 배열의 값이 0~45 범위에 있는지 확인
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] < 0 || lottos[i] > 45) return false;
    }
    for (let i = 0; i < win_nums.length; i++) {
        if (win_nums[i] < 0 || win_nums[i] > 45) return false;
    }


    // 0을 제외한 값들의 중복을 확인합니다.
    let lottosWithoutZero = lottos.filter(value => value !== 0);
    let lottosSet = new Set(lottosWithoutZero);
    if (lottosWithoutZero.length !== lottosSet.size) return false;
    
    let win_numsWithoutZero = win_nums.filter(value => value !== 0);
    let win_numsSet = new Set(win_numsWithoutZero);
    if (win_numsWithoutZero.length!== win_numsSet.size) return false;


    return true;
}

function getranks(mathces){
    rank = [6,6,5,4,3,2,1];
    return rank[mathces];
}
function solution(lottos,win_nums){
    if(!Restriction(lottos,win_nums)){
        throw new Error("RESTICTION VIOLATION");
    }   

    //최저 순위 계산, win_nums와 lottos를 비교하여 일치하는 갯수를 확인
    //최고 순위 계산, 최저 순위계산에서 0의 갯수만큼 일치결과를 올림

    let correct = 0; //일치하는 갯수
    for(let value of lottos){
        if(win_nums.includes(value)) 
            correct++;
    }
    let Zerocount = lottos.filter(value => value === 0).length;
    let highscore = correct + Zerocount;

    let minrank = getranks(correct);
    let maxrank = getranks(highscore);
    return [maxrank, minrank];
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]));