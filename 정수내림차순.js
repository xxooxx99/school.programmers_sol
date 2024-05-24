function isValidElement(n) {
    return 1 <= n && n <= 8000000000;
  }
  
  function solution(n) {
    if (!isValidElement(n)) {
      throw new Error("잘못된 입력!");
    }
  
    let str = String(n);
    let arr = str.split('');
    arr.sort((a, b) => b - a);
    let sortedStr = arr.join('');
    let result = Number(sortedStr);
  
    return result;
  }
  
  console.log(solution(12345)); 
  