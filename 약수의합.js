//시간복잡도 줄이기: 약수를 구할때 해당 약수의 제곱근 까지만 구한뒤,(1~i)
//해당 제곱근까지의 수들을 다시 n에 나눠준다
//해결과정1: 제곱근 하기 -> Math.sqrt()
//해결과정2: 1부터 제곱근수까지 나머지가 0인숫자를 answer로 빼낸다
//해결과정3: i를 answer로 나누었을때 결과를 answer에 다시 집어넣어준다.
function isvalidelement(n){
    return 0<= n && n <= 3000
}

function solution(n){
    //조건 불일치 확인
    if(!isvalidelement(n)) {
        throw new Error("잘못된 입력!")
    }

    //조건일치시
    let nums = Math.floor(Math.sqrt(n)) //nums를 n의 제곱근으로 넘김, 제곱근이 정수가 아닐떄를 고려해서 Math.floor 사용
    const answer = [] //약수를 저장할 배열

    for(let i = 1; i<= nums; i++) {
        if(n % i === 0){
          answer.push(i);
          if(i !== n/i){ //i와 n/i가 서로 다를때만 answer배열에 추가
            //ex n이 36이고, 해당 제곱근 nums가 6이되었을때, i가 6일경우 n/i도 6이 되기때문에
            //6을 두번추가하지 않기 위해 해당 코드를 작성
            answer.push(n/i);
          }
        }
    }
    const sum = answer.reduce((acc,curr) => acc + curr, 0);
    return sum;
}
console.log(solution(12))
console.log(solution(5))