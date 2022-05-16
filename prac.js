
//1번 문항
//forEach(currentValue 처리할 현재 요소, index 처리할 현재 요소의 인덱스, array forEach를 호출한 배열 => callback함수의 매개변수)
//(...연산자)Math.min의 인수는 숫자형이 들어가야 하지만 arr 처럼 배열인 경우 스프레드 연산자를 작성하여 배열 안의 요소들이라고 명시한다.
//Math.min.apply(null, arr)도 가능 하지만 숫자가 많아지면 reduce()를 작성하기
const arr = [5,3,5,2,10,2]
const arr2 = [1,2,3,1]
let result = [];

function answer(sub){
  sub.forEach((number, index, sub) => number === Math.min(...sub) ? result.push(index) : null);
  console.log(result)  
}
answer(arr2)




//2번 문항
// king(1), queen(1), rooks(2), bishops(2), knights(2), pawns(8)
const chess = [1,1,2,2,2,8];
const wrong = [3,4,5,6,1,3];
const wrong2 = [0,0,2,7,9,10];
let corrected = [];


function completeChess(irr){
  for(let i = 0; i < chess.length; i++){
    if(irr[i] === chess[i]){
      corrected.push(0)
    }else if(irr[i] > chess[i]){
      corrected.push((irr[i] - chess[i]) * -1)
    }else {
      corrected.push(chess[i] - irr[i])
    }
  } console.log(corrected)
    return corrected = []
};
completeChess(wrong);
completeChess(wrong2);



//3 번 문항
//sort로 오름차순으로 배열을 정리하고 slice메소드로 뒤에서 두 개의 요소를 가져온다.
const a = [-1,-2,-3,1,9,5,3,2,6,8,12,10];
const b = [-19,4,5,3,9,11,-3,-12,20,13,1,-5,8,10];

function twoNums(arr){
  arr.sort(function(a, b) { return a - b; });
  /*temp = array.sort((a,b) => b-a)
  return [temp[0], temp[1]] 
  이렇게 두 줄만 작성하면 끝*/

  let numbers = arr.slice(-2);
  console.log(arr)
  console.log(numbers);
};

twoNums(a);
twoNums(b);
