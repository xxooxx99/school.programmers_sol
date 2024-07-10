function solution(s, n) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char >= 'a' && char <= 'z') {  // 소문자 처리
            result += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z') {  // 대문자 처리
            result += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
        } else {  // 공백 처리
            result += char;
        }
    }

    return result;
}
