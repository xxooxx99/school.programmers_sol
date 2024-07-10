function Restriction(n, m, section) {
    if (m < 1 || m > n || n > 100000) return false;
    if (section.length < 1 || section.length > n) return false;
    for (let i = 0; i < section.length; i++) {
        if (section[i] < 1 || section[i] > n) return false;
        if (i > 0 && section[i] <= section[i - 1]) return false; // 배열이 오름차순인지 확인
    }
    let uniqueSection = new Set(section);
    if (uniqueSection.size !== section.length) return false;
    return true;
}
//n = 총 칸수 m은 한번에 칠할 수 있는 칸 section은 칠해야할 칸
// section에서 처음칸과 마지막칸의 거리 + 1만큼 구하고, 해당 숫자를 m으로 나누었을때 나머지가 발생한다면+1, 나머지가 0이라면 몫만큼 return한다. -> 테스트 케이스 오류 발생

//2차 temp
//페인트칠해야할곳은 하나씩 순차적으로 검사, 현재 페인트질을 시작할곳에서 +m만큼
function solution(n, m, section) {
    if (!Restriction(n, m, section)) {
        throw new Error("Restriction Violation!");
    }

    let count = 0; // 페인트칠 횟수
    let i = 0; // 현재 검사 중인 section의 인덱스

    while (i < section.length) {
        count++;
        let start = section[i]; // 현재 페인트칠을 시작하는 구역
        i++; // 다음 구역으로 이동

        // 현재 시작 구역으로부터 롤러로 커버할 수 있는 마지막 구역까지 이동
        while (i < section.length && section[i] < start + m) {
            i++;
        }
    }

    return count;
}

// console.log(solution(8,4,[2, 3, 6]));
//console.log(solution(4,1,[1,2,3,4]));
console.log(solution(5,4,[1,3]));
