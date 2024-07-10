//제한조건
//2 ≤ food의 길이 ≤ 9
// 1 ≤ food의 각 원소 ≤ 1,000
// food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
// food[i]는 i번 음식의 수입니다.
// food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
// 정답의 길이가 3 이상인 경우만 입력으로 주어집니다.

function isvalidinput(food) {
    if(food.length < 2 || food.length > 9) return false;
    for(let num of food) {
        if(num < 1 || num > 1000) return false;
    }
    if(food[0]!= 1) return false;
    return true;
}

function solution(food) {
    if(!isvalidinput(food)) {
        throw new Error("잘못된 입력");
    }

    let left = "";

    for (let i = 1; i < food.length; i++) {
        left += String(i).repeat(Math.floor(food[i] / 2));
    }

    let answer = left + "0" + left.split("").reverse().join("");

    return answer;
}

console.log(solution([1, 7, 1, 2]));