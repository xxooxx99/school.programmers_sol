function solution(s) {
    const numberWords = {
      "zero": "0",
      "one": "1",
      "two": "2",
      "three": "3",
      "four": "4",
      "five": "5",
      "six": "6",
      "seven": "7",
      "eight": "8",
      "nine": "9"
    };
    
    // 모든 영단어를 숫자로 변환
    for (let word in numberWords) {
      const regex = new RegExp(word, "g");
      s = s.replace(regex, numberWords[word]);
    }
    
    // 변환된 문자열을 숫자로 변환
    return Number(s);
  }
  