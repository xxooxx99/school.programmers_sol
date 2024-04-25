function solution(angle) {
    var answer = 0;
    if (0< angle && angle <90){
        answer =1;
    }
    else if ( angle === 90) {
        answer = 2;
    }
    else if (90 < angle && angle < 180) {
        answer = 3;
    }
    else if (angle === 180) {
        answer = 4;
    }
    else{
        console.log("잘못된 입력")
    }
    return answer;
    }
    console.log(solution(70))
