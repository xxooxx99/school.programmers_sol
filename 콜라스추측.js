function solution(num) {
    if (num === 1) {
        return 0;
    }

    let count = 0;
    while (num !== 1 && count < 500) {
        if (num % 2 === 0) {
            num = Math.floor(num / 2);
        } else {
            num = num * 3 + 1;
        }
        count++;
    }

    return num === 1 ? count : -1;
}