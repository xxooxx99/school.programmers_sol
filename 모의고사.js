function Restriction(answers){
    if(answers.length > 10000) return false;
    for(let i = 0; i < answers.length; i++){
        if(typeof answers[i] !== 'numbers') return false;
        if(answers[i] <1 || answers[i] >5) return false;
    }
    return true;
}

function solution(answers){ 

    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2,1,2,3,2,4,2,5];
    const pattern3 = [3,3,1,1,2,2,4,4,5,5]; 

    function makesolution(length,pattern){
        const group = [];
        for (let i =0; i < length; i++){
            group.push(pattern[i% pattern.length]); //% 연산자로 나머지를 구해야 패턴을 적용할 수 있다.
        }        
        return group;
    }
    const length = answers.length;
    const one = makesolution(length,pattern1);
    const two = makesolution(length,pattern2);
    const three = makesolution(length,pattern3);

    function countsol(groups,answers) {
        return groups.map(group=>{
            let count = 0;
            for (let i = 0; i < group.length; i++) {
                if(group[i] === answers[i]) {
                    count ++;
                }
        }
        return count;
    });
}

const matches = countsol([one, two, three], answers);


const maxVal = Math.max(...matches);


const maxIndices = matches.reduce((indices, currentVal, currentIndex) => {
    if (currentVal === maxVal) {
        indices.push(currentIndex+1);
    }
    return indices;
}, []);

return maxIndices;
}

console.log(solution([1,3,2,4,2]));