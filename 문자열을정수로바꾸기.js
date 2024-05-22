function isValidArray(s) {
    return s.length >= 1 && s.length <= 5;
}

function solution(s) {
    if (!isValidArray(s)) {
        throw new Error("잘못된 입력!");
    }
    return parseInt(s, 10); // 또는 Number(s)
}