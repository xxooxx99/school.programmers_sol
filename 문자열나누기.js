/*
PSEUDO CODE

RESTRICTION : 1<= s의 길이 <= 10000, 소문자로만 이루어져있음

조건사항 : 문자열을 하나씩 읽음, 문자열을 읽어가면서 문자 빈도수를 확인, 만약 문자의 빈도수가 같아 지는 순간이오면, 해당 문자열 slice, 그리고 문자열을 마저 읽어가면서 반복, slice된 문자열 수만큼 return
풀이 : 문자열을 읽어가며 각 문자열의 빈도수를 확인하는 함수를 선언, 만약 문자열의 빈도수가 같아지는 순간이 오면, slice 함수 선언,
*/
function RESTRICTION(s){
    if(s.length < 1 || s.length > 10000) return false;
    for(let i = 0; i<s.length; i++) {
        if(s[i] >= A) return false;
    }
    return true;
}
function solution(s) {
    if(!RESTRICTION(s)){
    throw new Error("RESTRICTION ERROR!")
    }
    
}