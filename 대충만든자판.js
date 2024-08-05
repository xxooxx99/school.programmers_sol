/*
    제한사항 
    1 ≤ keymap의 길이 ≤ 100
    1 ≤ keymap의 원소의 길이 ≤ 100
    keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
    예를 들어 keymap[0] = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
    keymap의 원소의 길이는 서로 다를 수 있습니다.
    keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.
    1 ≤ targets의 길이 ≤ 100
    1 ≤ targets의 원소의 길이 ≤ 100
    targets의 원소는 알파벳 대문자로만 이루어져 있습니다.

    PSEUDO CODE
    targets 배열의 첫번째 인덱스 확인
    반복문으로 targets 배열의 첫번째 문자열에 대해서 keymap에 각인덱스의 문자열에서 어느것이 가장 가까운것인지 확인
    존재한다면 해당 인덱스 위치의-1만큼 count 증가, result의 첫번쨰 인덱스에 저장

*/

function RESTRICTION(keymap, targets) {
    if (keymap.length < 1 || keymap.length > 100) return false;
    for (let i = 0; i < keymap.length; i++) {
        if (keymap[i].length < 1 || keymap[i].length > 100) return false;
        if (!/^[A-Z]+$/.test(keymap[i])) return false;
    }
    if (targets.length < 1 || targets.length > 100) return false;
    for (let j = 0; j < targets.length; j++) {
        if (targets[j].length < 1 || targets[j].length > 100) return false;
        if (!/^[A-Z]+$/.test(targets[j])) return false;
    }
    return true;
}

//keymap에서 target 문자열에 대해 각 인덱스에서 몇번의 클릭을 해야하는지 count 하는 함수
function mincount(keymap,target_char) {
    const distances = keymap.map(function(str) {
        const index = str.indexOf(target_char);
        //클릭수를 계산해야하기때문에 index +1
        return index === -1 ? Infinity : index + 1;
    });

    //둘중에 최소 거리 찾기

    const Mindistance = Math.min(...distances);

    //모든 문자열에 타켓 문자가 없는경우 -1 반환

    return Mindistance === Infinity ? -1 : Mindistance;
    }


function solution(keymap,targets){
    if(!RESTRICTION(keymap,targets)){
        throw new Error("RESTRICTION ERROR")
    }
    let result = [];

    //각 문자열을 분리
    for (let i = 0; i < targets.length; i++) {
        let  target_string = targets[i];
        let total_distance = 0;

    //분리된 문자열의 문자에 대해 거리를 count
        for(let j = 0; j < target_string.length; j++) {
            let char_distance = mincount(keymap, target_string[j]);
            if(char_distance === -1) {
                total_distance = -1;
                break;
            }
            total_distance += char_distance;
        }
        result.push(total_distance);
    }
    return result;
}

// TEST CASE

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]