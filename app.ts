function add (n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);




const person = {
  name: 'Intae',
  age: 30,
  hobbies: ['sports', 'cooking']
}
let favoriteActivities: string[];
favoriteActivities = ['sports'] // number는 올수 없다.
console.log('Person name is: ', person.name);
for(const hobby of person.hobbies) { 
  console.log(hobby.toUpperCase());
}
// hobby에는 문자열외에도 다른 타입을 쓸수 있다. 왜?
// 즉 person.hobbies를 입력하면 TS는 문자열의 배열이라고 인식한다.
// 반면 hobby는 문자열로 정확하게 인식한다.




// 배열의 튜플타입 설정하기
const human: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string] // 튜플 타입
}= {
  name: 'Intae',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: [1, 'author']
}

human.role.push("admin") // push는 가능하다(길이가 늘어남)
console.log(human.role)




// enum{ NEW, OLD } 열거형 타입
// 명시적인 타입 배정을 없애고 추론으로 설정(human 변수에서) 
//  
const human1 = {
    name: 'Intae',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [1, 'author']
  }


// 리터럴 타입
// 특정 숫자나 매개변수가 아니다
// 정확한 값을 가지느 타입이다
// 리터럴의 단점은 개발자가 타입의 값을 기억해놔야 한다는 것.
// 이를 보완하기 위해서 리터럴 타입과 유니언타입을 같이 쓸수 있다 아래 코드처럼.(값이 2개일경우 가능, 하드코딩 임)
// 사용자 정의 타입

  type combinable = number | string;
  type conversionDiscriptor = 'as-number' | 'as-text';

  function combine (input1: combinable, input2: combinable, resultConversion: conversionDiscriptor) {
  // function combine (input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  // function combine (input1: number | string, input2: number | string, resultConversion: string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }

    // 아래 if문의 코드를 위 if문에 +, toString()를 사용해서 리팩토링할 수 있다.
    // if(resultConversion === "as-number") {
    //   // +는 값을 숫자로 변환해주는 기호
    //   return +result;
    // } else {
    //   // .toString()는 들어오는 값을 문자열로 변환해주는 메서드 
    //   return result.toString();
    // }
    return result;
  }

  const combineAges = combine(30, 20, "as-number")
  console.log(combineAges); // 50

  const combineStringAges = combine("30","20","as-number")
  console.log(combineStringAges); // 50

  const combineNames = combine("intae", "willy", "as-text")
  console.log(combineNames); // intaewilly

