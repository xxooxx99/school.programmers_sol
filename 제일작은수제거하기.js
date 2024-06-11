//정수 저장 배열, arr에서 가장 작은 수 제거,빈 배열일 경우 -1 리턴
//sort로 숫자 오름차순 정렬, 젤 앞에 있는숫자 제거, 만약 sort 배열의 길이가 1이면 -1출력
function solution(arr){
    if(arr.length === 1){
        return [-1];
    }
    var min = Math.min(...arr); //스프레드 연산자로 배열 요소들을 개별로 변환
    var min_index = arr.indexOf(min); // 가장 작은값의 인덱스 값 찾기
    arr.splice(min_index,1);

    return arr;
}

console.log(solution([1,3,2]));