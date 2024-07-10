function solution(array, commands) {
    // 결과를 저장할 배열
    const result = [];

    // commands 배열을 순회하며 각 명령을 처리
    commands.forEach(command => {
        // i, j, k 값 추출 (배열의 인덱스는 0부터 시작하므로 1을 빼줌)
        const [i, j, k] = command;
        
        // array의 i번째부터 j번째까지 자름
        const slicedArray = array.slice(i - 1, j);
        
        // 자른 배열을 정렬
        const sortedArray = slicedArray.sort((a, b) => a - b);
        
        // 정렬된 배열의 k번째 숫자 (k번째 숫자는 k-1 인덱스에 위치)
        const value = sortedArray[k - 1];
        
        // 결과 배열에 추가
        result.push(value);
    });

    // 최종 결과 반환
    return result;
}

// 테스트 케이스
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands)); // [5, 6, 3]
