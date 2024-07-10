function Restriction(k,score){
    if(3>k || k > 100) return false;
    if(score.length < 1 || score.length > 1000) return false;
    return true;
}

//k만큼 배열 선언, score.length 만큼 반복, 

function solution(k,score){
    if(!Restriction(k,score)){
        throw new Error("Restiction violation!");
    }
    const sing = [];
    let answer = [];
    //반복문을 통해 score 값들을 sing 배열에 넣고, 내림차순으로 정렬한다음 k의 크기만큼 slice 하고 sing 내에서 가장 작은 숫자를 출력한다.
    for(i = 0; i< score.length; i++){
        sing.push(score[i]);
        sing.sort((a, b) => b - a);

        if(sing.length < k ) {
            answer.push(sing[sing.length-1]);
        }else{
            answer.push(sing[k-1]);
        }
        
    }
    return answer;
    
}

console.log(solution(3,[10, 100, 20, 150, 1, 100, 200]));
