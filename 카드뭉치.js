function Restriction(cards1,cards2,goal) {
    if (cards1.length < 1 || cards1.length > 10 || cards2.length < 1 || cards2.length > 10) return false;
    return true;
    }

function solution(cards1, cards2, goal){
if(!Restriction(cards1,cards2,goal)) {
    throw new Error("Restriction vioation");
} 
    // 각 배열의 인덱스를 초기화합니다.
    let index1 = 0;
    let index2 = 0;

    // goal 배열의 각 단어를 하나씩 순회합니다.
    for (let word of goal) {
        // cards1 배열에 더 확인할 단어가 남아있고,
        // 현재 goal의 단어와 cards1의 현재 인덱스 단어가 같다면
        if (index1 < cards1.length && word === cards1[index1]) {
            // cards1의 다음 단어로 이동합니다.
            index1++;
        }
        // 그렇지 않고, cards2 배열에 더 확인할 단어가 남아있고,
        // 현재 goal의 단어와 cards2의 현재 인덱스 단어가 같다면
        else if (index2 < cards2.length && word === cards2[index2]) {
            // cards2의 다음 단어로 이동합니다.
            index2++;
        }
        // 위 두 조건에 해당하지 않으면 goal을 만들 수 없으므로 "No"를 반환합니다.
        else {
            return "No";
        }
    }

    // 모든 단어를 순서대로 확인했다면 "Yes"를 반환합니다.
    return "Yes";
}
// 입출력 예제 테스트
let cards1_1 = ["i", "drink", "water"];
let cards2_1 = ["want", "to"];
let goal_1 = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1_1, cards2_1, goal_1)); // "Yes"

let cards1_2 = ["i", "water", "drink"];
let cards2_2 = ["want", "to"];
let goal_2 = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1_2, cards2_2, goal_2)); // "No"
