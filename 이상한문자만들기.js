function solution(s){
    //공백기준으로 split으로 나누기
    str = s.split(' ');
    // console.log(str);
    // console.log(str.length);
    //split -> 각 단어 별로 string으로 변환 ->단어 내 짝수인덱스 대문자로, 홀수인덱스 소문자로 변환 result에 return
    let worldresult =[];
    for(let i =0; i < str.length; i++){
        let str_world = String(str[i]); //i번째 단어를 string으로 변환
        //i번째 단어내 짝수인덱스 대문자, 홀수인덱스 소문자로 변환

        let result =[];

        for(let j = 0; j < str_world.length; j++){
            if(j % 2 === 0 ) { //짝수일경우
            result.push(str_world[j].toUpperCase());
            }
            else { //홀수일경우
            result.push(str_world[j].toLowerCase());
            }
        }
        worldresult.push(result.join(''));
    }
    return worldresult.join(' ');

}
console.log(solution("try hello world"));