// ```
// PSEUDO CODE 
// All students => 2 <= n <= 30
// students who lost => 1<= lost <= n
// students who have extra(reserve) clothes => 1<= reserve < = n , no duplicates
// only "reserve" can rent uniforms to n
// rent conditions => reserve[i]-1, reserve[i]+1
// if "reserve" get lost, they can't rent uniforms to n

// n =5, lost =[2,4], reserve =[1,3,5] 라면, 1번학생이 2번에게 빌려주고, 3번 학생이나 5번학생이 4번에게 밀려줄수 있으므로 총 5명이 체육수업에 참가할 수 있기때문에,
// return = 5

// n에서 Lost를 뺀 숫자만큼에서, lost 배열 내 숫자에서 +1, -1 범위 안에 reserve 숫자가 존재한다면 +1, 만약 똑같은 Lost 숫자에 대응하는 reserve숫자가 똑같다면, +1을 하지 않는다
// ex) lost가 [2,4]이고 reserve 가 [3]일때 [2,4] 모두 3에 대응하므로 2일때 +1, 4일때는 +1을 하지 않는다. 
// ```
function removeDuplicates(array) {
    return [...new Set(array)];
}

function RESTRICTION(n, lost, reserve) {
    // 중복 제거
    lost = removeDuplicates(lost);
    reserve = removeDuplicates(reserve);

    if (n < 2 || n > 30) return false;
    if (lost.length < 1 || lost.length > n) return false;
    if (reserve.length < 1 || reserve.length > n) return false;
    return true;
}

function solution(n, lost, reserve) {
    if (!RESTRICTION(n, lost, reserve)) {
        throw new Error("Restriction error");
    }

    // reserve와 lost에 중복되는 값을 제거
    let newReserve = reserve.filter(r => !lost.includes(r));
    let newLost = lost.filter(l => !reserve.includes(l));

    var answer = 0;
    var usedReserve = new Set();

    // 새로운 lost 배열을 순회하며 빌려줄 수 있는 학생을 찾음
    for (let i = 0; i < newLost.length; i++) {
        let lostStudent = newLost[i];

        if (newReserve.includes(lostStudent - 1) && !usedReserve.has(lostStudent - 1)) {
            answer++;
            usedReserve.add(lostStudent - 1);
        } else if (newReserve.includes(lostStudent + 1) && !usedReserve.has(lostStudent + 1)) {
            answer++;
            usedReserve.add(lostStudent + 1);
        }
    }

    let attend = n - newLost.length + answer;
    return attend;
}

// 예제
const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve)); 