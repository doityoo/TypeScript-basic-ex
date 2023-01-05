// unknown 타입
// any타입과는 다름
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "willy";
// userName = userInput; // !!!Error
// userInput 타입이 any이라면 위 코드는 에러가 없다.
// unknown이 any보다 제한 적이다.
// 위 코드가 가능하려면? 타입 검사가 있어야 한다.
if(userInput === "string") {
  userName = userInput;
}

