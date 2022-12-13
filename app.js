function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);
var person = {
    name: 'Intae',
    age: 30,
    hobbies: ['sports', 'cooking']
};
var favoriteActivities;
favoriteActivities = ['sports']; // number는 올수 없다.
console.log('Person name is: ', person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// hobby에는 문자열외에도 다른 타입을 쓸수 있다. 왜?
// 즉 person.hobbies를 입력하면 TS는 문자열의 배열이라고 인식한다.
// 반면 hobby는 문자열로 정확하게 인식한다.
// 배열의 튜플타입 설정하기
var human = {
    name: 'Intae',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [1, 'author']
};
human.role.push("admin"); // push는 가능하다(길이가 늘어남)
console.log(human.role);
// enum{ NEW, OLD } 열거형 타입
// 명시적인 타입 배정을 없애고 추론으로 설정(human 변수에서) 
//  
var human1 = {
    name: 'Intae',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [1, 'author']
};
// 리터럴 타입
// 특정 숫자나 매개변수가 아니다
// 정확한 값을 가지느 타입이다
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === "as-number") {
    //   // +는 값을 숫자로 변환해주는 기호
    //   return +result;
    // } else {
    //   // .toString()는 들어오는 값을 문자열로 변환해주는 메서드 
    //   return result.toString();
    // }
    return result;
}
var combineAges = combine(30, 20, "as-number");
console.log(combineAges); // 50
var combineStringAges = combine("30", "20", "as-number");
console.log(combineStringAges);
var combineNames = combine("intae", "willy", "as-text");
console.log(combineNames); // intaewilly
