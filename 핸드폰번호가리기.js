// sol : 숫자 문자열로 변환에서 끝 4자리만 남기고 나머지 다른 문자로 대체한뒤 출력하기
function isvalidelement(phone_number){
    if(phone_number.length < 4 || phone_number.length > 20 ) return false;
    return true;
}

function solution(phone_number){
    if(!isvalidelement(phone_number)){
        throw new Error ("잘못된입력")
    }
    var answer ='';
    const str = phone_number.toString();// 숫자를 문자열로 변환
    const number_part = str.slice(-4); // 끝 4자리만 numberpart로 남기기
    let mask_part ='';

    for (let i = 0; i < phone_number.length -4 ; i++){
        mask_part += "*";
    }
    answer = mask_part + number_part;
    return answer;
}

console.log(solution("01099999999"));