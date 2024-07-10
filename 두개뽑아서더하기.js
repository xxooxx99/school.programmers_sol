function solution(numbers) {
    // 합을 저장할 Set 자료구조 생성
    const sums = new Set();

    // numbers 배열을 순회하며 두 수의 합을 계산
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sums.add(numbers[i] + numbers[j]);
        }
    }

    // Set을 배열로 변환한 후 오름차순으로 정렬
    const result = Array.from(sums).sort((a, b) => a - b);

    return result;
}

// 테스트 케이스
console.log(solution([2, 1, 3, 4, 1])); 
console.log(solution([5, 0, 2, 7]));
