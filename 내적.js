function isvalidelement(a,b){
    if(a.length < 1 || a.length > 1000) return false;
    if(b.length < 1 || b.length > 1000) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < -1000 || a[i] > 1000) return false;
    }

    for (let i = 0; i < b.length; i++) {
        if (b[i] < -1000 || b[i] > 1000) return false;
    }

    return true;
}


function solution(a,b){
    if(!isvalidelement(a,b)){
        throw new Error("잘못된 입력");
    }
    if(a.length !== b.length){
        throw new Error("배열의 길이가 다릅니다");
    }
    let sum = 0;

    for ( let i = 0; i < a.length; i++){
        sum += a[i] * b[i];
    }
    return sum;
}

console.log(solution([1, 2, 3], [4, 5, 6]));
