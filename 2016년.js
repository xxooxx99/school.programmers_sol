function Restriction(a,b) {
    if (a < 1 || a > 12) return false;
    if (b < 1 || b > 31) return false;
    return true;
}

//2016년은 윤년
function solution(a,b) {
    if(!Restriction(a,b)){
    throw new Error("Restrition violation")
    }

    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const year = 2016;
    let month = a-1;
    let day = b;
        
    const dayofWeek = new Date(year,month,day).getDay();
    console.log(week[dayofWeek]);
    return week[dayofWeek];

    }

console.log(solution(5,24));