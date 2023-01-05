function add (n1: number, n2: number) { // 마우스를 올리면 가장 오른쪽 반환 타입이 나온다
// function add (n1: number, n2: number): number { // 명시적으로 반환타입을 쓸수 있지만 변수와 마찬가지로 TS가 반환 타입을 추론하는게 가장 좋다.
  return n1 + n2;
}

function printResult (num : number) {
// printResult의 함수는 반환 타입은 void다. void는 undefined를 반환한다.
  console.log("result : " + num);
}

console.log(printResult(add(5, 8))); // undefined




// 함수 타입
// let combineValues; //any
// let combineValues: Function; // Function은 첫글자는 대문자를 써야 함, combineValues를 함수타입으로 지정 
let combineValues: (a:number, b:number) => number; // 반환값이 number이면서 매개벼수에 a,b가 각각 number를 받는 함수 타입 지정, printResult를 할당시 에러 발생
combineValues = add;
// combineValues = printResult; // printResult도 함수이지만 함수를 실행할때 인자의 구성이 맞지 않으면 Error가 난다. 컴파일 과정에서는 에러 못  잡음
console.log(combineValues(5, 8));

let combineValues2: (a: string, b: () => number) => string // 이렇게 콜백 형식도 가능




// 콜백 함수 타입
function addHandler(n1: number, n2: number, cd: (num: number) => void) { // 이함수의 리턴 타입은 void
  // 콜백함수에서 반환 값을 void로 지정했기 때문에 addHandler의 반환값이 
  let result = n1 + n2;
  cd(result);
}
addHandler(10, 20, (result) => {
  console.log(result);
  return result; // addhandler 함수에서 return result가 에러 없이 반환은 되지만 함수 인자 내에 콜백함수에서 반환 값을  void를 줬기 때문에 아무것도 나타지 않는다.
});
// 배열 바꾸는 콜백 함수
// function arrayMutate (number: number[], cb:(mutate: number) => number): number[] {
//   return number.map(cb);
// }
// 함수 타입을 지정하기
type MutateFunction = (v:number) => number;
function arrayMutate (number: number[], cb:MutateFunction): number[] {
  return number.map(cb);
}
console.log(arrayMutate([1,2,3], (f) => f* 10)); // 
