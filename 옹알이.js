// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 30
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

function Restriction(babbling){
    if(babbling.length < 1 || babbling.length > 100) return false; //배멸 babbling의 문자 개수는 1이상 100개 이하
    for(let i = 0; i < babbling.length; i++){ //babbling의 모든 원소는
        if(!/[a-z]/.test(babbling[i])) return false; //다음과 같은 정규표현식(a-z)로만 이루어져야한다. 아니면 return false
        if(babbling[i].length < 1 || babbling[i].length > 30) return false; //babbling의 모든 원소의 길이는 1이상 30이하
    }
   return true;
}

function solution(babbling){
    if(!Restriction(babbling)){
        throw new Error("RESTRICTION VIOLATION"); //제한 조거 위반시 에러문 출력
    }
    let pronoun =["aya", "ye", "woo", "ma"]
    let count = 0;
    for(let i = 0; i < babbling.length; i++){
    //include로 babbling의 단어가 pronoun에 있는 단어들로만 이루어져있는지 확인
    let word = babbling[i];
    let isValid = true;
    while (word.length > 0) {
        let found = false;
        for(let j = 0; j< pronoun.length; j++) {
            if (word.startsWith(pronoun[j])) {
                word = word.slice(pronoun[j].length);
                found = true;
                break;
        }
    }
    if (!found) {
        isValid = false;
        break;
        }
    }   
    if (isValid) {
        count++;
    }
    }
    return count;

}

console.log(solution([["ayaye", "uuu", "yeye"]]));
