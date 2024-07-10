process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    const inputs = data.trim().split(" "); //입력값에 대하여 쉼표로 구분하여 저장
    const n = parseInt(inputs[0], 10); // 첫번째 인덱스 값을 10진수 정수형태로 저장
    const m = parseInt(inputs[1], 10);


    function isValidElement(n,m) {
        if(n < 0 || n > 1000) return false;
        if(m < 0 || m > 1000) return false;
        return true;
    }


    function makestar(n,m) {
        if(!isValidElement(n,m)) {
            throw new Error("잘못된 입력");
        }

        let star = '';
        for (let i = 0; i< m; i++) {
            star += "*".repeat(n) + "\n";
        }
        return star;
    }
    
    try {
        const starPattern = makestar(n,m);
        console.log(starPattern);
    } catch (error) {
        console.error(error.message);
    }

});