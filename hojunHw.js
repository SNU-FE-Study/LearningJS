/* truthy, falsy의 개념
참고 출처: https://frontend.turing.edu/lessons/module-1/js-truthy-falsy-expressions.html

Vocabulary
- Expression: A statement that produces a value
- Conditional: An expression that evaluates to true or false, or a control flow statement that executes code
- Truthy values: A value that is considered true when encountered in a Boolean context
- Falsy values: A value that is considered false when encountered in an Boolean context

중요한 Falsy value들!! (암기*)
- false
- 0
- -0
- ""
- null
- undefined
- NaN

Truthy, Falsy value에 대해 배우는 것은 코드를 더 깔끔하게 작성하는 데 도움이 된다.

if (pets.length > 0) {
  return 'You have at least one pet!';
}
라고 쓸 필요없이
if (pets.length) {
  return 'You have at laest one pet!';
}
라고 작성 가능

if (character === undefined) {
  return 'No character found.';
}
라고 쓸 필요 없이
if (!character) {
  return 'No character found.';
}
라고 작성 가능

**
- 0은 false지만 "0"은 true
- false는 false지만 "false"는 true
- []는 true지만 [].length는 0이므로 false
-""는 false지만 "something"은 true
*/

/* var의 문제점
참고 출처: https://kesharvani.hashnode.dev/why-using-var-is-a-bad-practice-in-javascript

js에서는 변수를 세 가지 방법으로 선언 --> Var, Let, Const
- var을 사용하면 때때로 결과값을 예측하기 어려울 때가 있음

1-a. Function Scope
normal block 안에서만 정보에 접근하고 싶을 때에도, var은 normal black 밖, function level에서도 접근 가능

1-b. Global Binding
var이 global object에 속성을 생성. 코드에서 바뀐다면 예측하지 못한 결과를 불러올 수 있음. 디버깅이 어려울 수 있음.

2-a. Redeclaration of Variable
같은 변수에 재할당이 가능하기 때문에 원치 않은 결과를 불러올 수 있음.

2-b. Access Before Initialization
initialization 전에 변수에 접근할 수 있게 됨.
*/