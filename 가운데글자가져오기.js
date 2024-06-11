//단어의 길이가 짝수 = /2해서 인덱스 +1
//단어긔 길이가 홀수 = +1해서 /2 인덱스값
function isvalidelement(s){
    if(s.length < 1 || s.length > 100) return false;
    return true;
}


function solution(s){
    if(!isvalidelement){
        throw new Error("잘못된입력")
    }
    else{
        var answer = '';
        if(s.length % 2 === 0){ //단어의 길이가 짝수
            var even_index = s.length /2;
            answer = s.slice(even_index -1,even_index + 1);
        } 
        else{ //단어의 길이가 홀수
            odd_index = Math.floor(s.length/2);
            answer = s.charAt(odd_index);
        }
        return answer;
    }
}
console.log(solution('abcde'));