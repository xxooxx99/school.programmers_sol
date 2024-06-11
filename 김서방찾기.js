function solution(seoul) {
    // "Kim"의 인덱스를 찾습니다.
    const index = seoul.indexOf("Kim");
    
    // 템플릿 문자열을 사용하여 결과 문자열을 반환합니다.
    return `김서방은 ${index}에 있다`;
}