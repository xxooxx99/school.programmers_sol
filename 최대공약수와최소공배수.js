function isValidElement(n,m){
    if(n < 1 || n > 1000000) return false;
    if(m < 1 || m > 1000000) return false;

    return true;
}

function solution(n,m) {
    if(!isValidElement(n)){
        throw new Error("잘못된 입력");
    }

    let n_divide = [];

    for(let i  = 1 ; i<= Math.sqrt(n); i ++) {
        if(n % i === 0){
            if( i === n /i){
                n_divide.push(i);
            }
            else{
                n_divide.push(i);
                n_divide.push(n/i);
            }
        }
    }

    n_divide.sort((a,b) => a-b);
    console.log(n_divide);
    
    let m_divide = [];

    for(let i  = 1 ; i<= Math.sqrt(m); i ++) {
        if(m % i === 0){
            if( i === m /i){
                m_divide.push(i);
            }
            else{
                m_divide.push(i);
                m_divide.push(m/i);
            }
        }
    }
    m_divide.sort((a,b) => a-b);
    console.log(m_divide);
    
    let result = [];
    let gcd = 1; //최대공약수를 저장할 변수 초기화, 기본값은 1로 설정

    for (let i = 0; i< n_divide.length; i++) { //n_divide 배열의 모든 요소를 순회
        if(m_divide.includes(n_divide[i])) { //m_divide 배열에 n_divide[i]가 포함되어잇는지 확인
            gcd = n_divide[i];// 포함되어있다면 gcd로 업데이트

        }

    }
    console.log(gcd);

    //최소공배수 공식 : (n*m) / gcd
    let lcm = (n*m) / gcd;
    console.log(lcm);

    result = [gcd,lcm];

    return result;
}

console.log(solution(3,12));

