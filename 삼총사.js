function solution(number) {
    let count = 0;  // 삼총사의 수를 세기 위한 변수

    // 첫 번째 반복문: 첫 번째 학생을 선택
    for (let i = 0; i < number.length - 2; i++) {
        // 두 번째 반복문: 두 번째 학생을 선택
        for (let j = i + 1; j < number.length - 1; j++) {
            // 세 번째 반복문: 세 번째 학생을 선택
            for (let k = j + 1; k < number.length; k++) {
                // 세 학생의 번호의 합이 0인지 확인
                if (number[i] + number[j] + number[k] === 0) {
                    count += 1;  // 삼총사의 수를 증가시킴
                }
            }
        }
    }

    return count;  // 삼총사의 수를 반환
}

// 예제 테스트
console.log(solution([-2, 3, 0, 2, -5]));  // 출력: 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));  // 출력: 5
console.log(solution([-1, 1, -1, 1]));  // 출력: 0
