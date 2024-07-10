function isvalidelemnet(t,p) {
    if(p.length < 1 || p.length > 18) return false;
    if(t.length < p.length || t.length > 10000) return false;
    if(isNaN(parseFloat(t)) || isNaN(parseFloat(p))) return false;
    return true;
}

function solution(t,p) {
    if(!isvalidelemnet(t,p)){
        throw new Error("잘못된입력");
    }

    let s = p.length;
    let count = 0;
    let numP = parseInt(p,10);

    for (let  i = 0; i <= t.length - s; i++){
        let subStr = t.slice(i,i+s); //부분 문자열 추출
        let numT = parseInt(subStr,10); //부분 문자열로 숫자로 변환
        if (numT <= numP) {
            count++;
        }
    }
    return count;

}

console.log(solution("3141592","271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));