function Restriction(k, m, score) {
    if (k < 3 || k > 9) return false;
    if (m < 3 || m > 10) return false;
    if (score.length < 7 || score.length > 1000000) return false;
    if (score.some(s => s < 1 || s > k)) return false;
    return true;
}

function solution(k, m, score) {
    if (!Restriction(k, m, score)) {
        throw new Error("Restriction Violation!");
    }

    // 배열을 내림차순으로 정렬
    score.sort((a, b) => b - a);

    let totalValue = 0;

    // m 개씩 상자를 만들어 계산합니다.
    for (let i = 0; i <= score.length - m; i += m) {
        // 상자의 최저 점수를 구합니다.
        let minScore = score[i + m - 1];

        // 상자의 가치를 계산합니다.
        totalValue += minScore * m;
    }

    return totalValue;
}

// 예제 테스트
let k = 3;
let m = 4;
let score1 = [1, 2, 3, 1, 2, 3, 1];
console.log(solution(k, m, score1)); // 8

let k2 = 4;
let m2 = 3;
let score2 = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
console.log(solution(k2, m2, score2)); // 33
