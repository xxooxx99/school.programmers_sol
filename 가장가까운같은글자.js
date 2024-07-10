//문자열 s,1 ≤ s의 길이 ≤ 10,000, s은 영어 소문자로만 이루어짐
//각 문자 인덱스
//문자를 하나씩 검사하면서 만약 앞에 같은 글자가 없었으면 -1 return
//만약 앞에 같은 글자가 있었으면 현재 자리와 해당 같은 글자의 위치까지 거리 return
function isvalidarray(s) {
    if (s.length < 1 || s.length > 10000) return false;
    for (let i = 0; i < s.length; i++) {
        if (typeof s[i] !== 'string') return false;
        if (s[i] < 'a' || s[i] > 'z') return false;
    }
    return true;
    }
function solution(s) {
    // 유효성 검사
    if (!isvalidarray(s)) {
        throw new Error("잘못된 입력");
    }
    let lastIndex ={}; //각 문자의 마지막 위치를 저장할 객체
    let answer = [];

    for(let i = 0; i < s.length; i++) {
        // if(s.indexOf(s[i]) != s.lastindexOf(s[i])) {
        //     answer.push(i - s.lastindexOf(s[i]));
        // }
        // else {
        //     answer.push(-1);
        // }
        //해당 코드는 비효율적이고,부정확하며, 시간복잡도가 O(n^2)임

        if(lastIndex.hasOwnProperty(s[i])){
            //이전에 등장한 위치가 있다면 거리계산
            answer.push(i - lastIndex[s[i]]);
        } else {
            answer.push(-1);
        }
        lastIndex[s[i]] = i; //현재 위치를 저장
    }

    return answer;

}

console.log(solution("banana"));
