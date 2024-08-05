/*
    문자열 포함여부 확인
    문자의 인덱스만큼 +하는데, skip에 문자가 포함되어있는지 확인

    아스키코드 변환 함수를 통해
    문자가 주어졌을때 해당 문자의 index값 내의 알파벳들중에, skip 문자열 내 문자가포함되어 있으면,
    그만큼 제외하여 계산
    ex)예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, 
    a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로
    세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해
     'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.
    제한사항
    5 ≤ s의 길이 ≤ 50
1 ≤ skip의 길이 ≤ 10
s와 skip은 알파벳 소문자로만 이루어져 있습니다.
skip에 포함되는 알파벳은 s에 포함되지 않습니다.
1 ≤ index ≤ 20
*/

function RESTRICTION(s, skip, index) {
  if (s.length < 5 || s.length > 50) return false;

  for (let i = 0; i < s.length; i++) {
    if (/^[A-Z]+$/.test(s[i])) return false;
  }

  if (skip.length < 1 || skip.length > 10) return false;

  for (let j = 0; j < skip.length; j++) {
    if (/^[A-Z]+$/.test(skip[j])) return false;
  }

  if (index < 1 || index > 50) return false;

  if (s.includes(skip)) return false;

  return true;
}

//문자를 skip을 확인하며 인덱스만큼 이동하는 함수 
function shiftChar(char,index,skip){
    const skipset = new Set(skip); //빠른 검색을위해 set로 중복제거, 해시 테이블을 이용하여 빠르게 검색
    const basecode = 'a'.charCodeAt(0); //'a'의 ASCII코드 값

    let currentCode = char.charCodeAt(0); //현재 문자의 ASCII코드값
    let steps = 0;

    //인덱스만큼 이동

    while (steps < index) {
        currentCode++; //다음 문자로 이동

        if(currentCode > 'z'.charCodeAt(0)) {
            currentCode = basecode //z이상으로 넘어가게되면 다시 a로 돌아옴
        }
        if (!skipset.has(String.fromCharCode(currentCode))) {
            steps++; // skip문자가 아닌경우에만 steps 증가
        }
    }

    return String.fromCharCode(currentCode); //인덱스만큼 이동한 문자 반환
}
function solution(s, skip, index) {
  if (!RESTRICTION(s, skip, index)) {
    throw new Error("RESTRICTION ERROR");
  }
  let result = "";

  for(let char of s) {
    result += shiftChar(char,index,skip);
  }
  return result;

}


console.log(solution("aukks","wbqd",5));
