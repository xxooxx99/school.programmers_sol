/*
PSEUDO CODE

RESTRICTION : 1<= s의 길이 <= 10000, 소문자로만 이루어져있음

조건사항 : 문자열을 하나씩 읽음, 문자열을 읽어가면서 문자 빈도수를 확인, 만약 문자의 빈도수가 같아 지는 순간이오면, 해당 문자열 slice, 그리고 문자열을 마저 읽어가면서 반복, slice된 문자열 수만큼 return
풀이 : 문자열을 읽어가며 각 문자열의 빈도수를 확인하는 함수를 선언, 만약 문자열의 빈도수가 같아지는 순간이 오면, slice 함수 선언,

코드 : 문자열 인덱스로 문자확인,문자 하나씩 임시 문자열에 추가, 만약 임시문자열 문자 횟수가 같아지면 break, 임시 문자열 초기화
*/
// function RESTRICTION(s){
//     if(s.length < 1 || s.length > 10000) return false;
//     for(let i = 0; i<s.length; i++) {
//         if(s[i] < "a" || s[i] > "z") return false;
//     }
//     return true;
// }

// function checksame(countObj) { 
//     for(let key in countObj) {
//         let freq = countObj[key]; //현재 문자의 빈도
//         if(frequencyMap[freq]) {
//             frequencyMap[freq]++;
//             if(frequencyMap[freq] >= 2) {
//                 return true;
//             }
//         } else {
//             frequencyMap[freq] = 1;
//         }
//     }
//     return false;
// }
// function solution(s) {
//     if(!RESTRICTION(s)){
//     throw new Error("RESTRICTION ERROR!")
//     }
//     //while 문으로 임시문자열
//     let temp = ""; //임시문자열 
//     let temp_count ={}; //임시문자열내 문자의 빈도를 저장할 객체 
//     let found = false; //동일한 빈도를 가진 두개이상의 문자가 있는지 확인
//     let count = 0;

//     for(let i =0; i < s.length+1; i++) {
//         let char = s[i]; //문자을 가져옴
//         temp += char; //문자열을 임시문자열로 넣기

//         if(temp_count[char]) { //가져온 문자열이 이미 객체에 존재하면
//             temp_count[char]++; //해당 문자의 빈도수 증가
//         } else {
//             temp_count[char] = 1; //없으면 객체에 추가하고 빈도수 1로 설정
//         }
//         //디버깅
//         // console.log(`현재 문자: ${char}`);
//         // console.log(`임시 문자열: ${temp}`);
//         // console.log(`문자 빈도수:`, temp_count);
//         // console.log('현재 카운트 수 :',count);

//         if (checksame(temp_count)) {
//             count++
//             temp = "";
//             temp_count = {};
//         }
//     }
//     return count;
    
// }

// console.log(solution("abracadabra"))
// console.log(solution("banana"))
// console.log(solution("aaabbaccccabba"))


function RESTRICTION(s) {
    if (s.length < 1 || s.length > 10000) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] < "a" || s[i] > "z") return false;
    }
    return true;
}

function solution(s) {
    if (!RESTRICTION(s)) {
        throw new Error("RESTRICTION ERROR!");
    }

    let count = 0; // 분리된 문자열의 개수를 세는 변수
    let i = 0; // 현재 인덱스를 추적하는 변수
    let x_count = 0; // x의 빈도수
    let other_count = 0; // x가 아닌 다른 문자의 빈도수

    while (i < s.length) {
        let x = s[i]; // 첫 번째 문자를 x로 설정

        // 문자열을 순회하며 빈도수를 계산
        while (i < s.length) {
            if (s[i] === x) {
                x_count++;
            } else {
                other_count++;
            }

            i++;

            // x와 x가 아닌 다른 문자의 빈도수가 같아지면 분리
            if (x_count === other_count) {
                count++;
                break;
            }
        }
    }

    // 마지막 남은 문자열도 분리된 것으로 간주하여 카운트를 증가
    if (x_count !== other_count) {
        count++;
    }

    return count;
}

// TEST CASE 
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3


/*
초기에 변수 선언을
        let x = s[i]; // 첫 번째 문자를 x로 설정
        let x_count = 0; // x의 빈도수
        let other_count = 0; // x가 아닌 다른 문자의 빈도수

이렇게 지정하니 ,
  if (x_count !== other_count) {
    ^

ReferenceError: x_count is not defined

    if (x_count !== other_count) {
                    ^

ReferenceError: other_count is not defined

이런 에러들이 출력되었었다.

해당 선언문들을
 var x = s[i]; // 첫 번째 문자를 x로 설정
        var x_count = 0; // x의 빈도수
        var other_count = 0; // x가 아닌 다른 문자의 빈도수

        이렇게 바꿔주니 정상적으로 해결되었다.
        or
        solution 함수 내에서(블록 밖에서 선언하기)
        */