function solution(age) {
    var answer = 0;
    if (0<age<=120){
        answer = 2023-age
    }
    else {
        console.log("잘못된입력")
    }

    return answer;
}

console.log(solution(40))