###
var의 문제점
1. 중복 선언이 가능
2. 호이스팅: 선언되기 전의 변수를 사용할 수 있음
3. Function Scope 문제
var는 함수 스코프를 따르는데, 이는 var로 선언된 변수는 그 변수가 선언된 함수 내에서만 유효하다는 의미이다. 
하지만, 블록 스코프를 지원하지 않기 때문에, 블록(예: if, for) 내에서 선언된 변수도 함수 전체에서 접근이 가능하다. 
이는 예기치 않은 변수의 덮어쓰기를 발생시킬 수 있다.
###
javascript
Copy code
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10
}
example();
###
JavaScript에서 Boolean 문맥에서 true로 평가되는 값들을 truthy라고 하고, false로 평가되는 값들을 falsy라고 한다.
<Falsy 값> 
false
0
-0
0n (BigInt)
"" (빈 문자열)
null
undefined
NaN

그 이외의 모든 값들은 truthy
true
모든 숫자 (0 제외)
모든 문자열 (빈 문자열 제외)
배열, 객체, 함수 (비어 있거나 기본 객체라 할지라도)
Symbol
BigInt (0n 제외)
###
