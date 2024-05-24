//2-21. 배열 기본
//객체(object)
//객체는 자료형의 일종. 배열(array), 함수(fucntion), 배열이나 함수가 아닌 객체로 나눌 수 있다.

//배열
const fruits = ['사과', '오렌지', '배', '딸기'];
console.log(fruits[0]); // '사과'

const arrayOfArray = [[1,2,3], [4,5]]; //이차원배열
arrayOfArray[0]; // [1,2,3]
const a = 10;
const b = 20;
const variableArray = [a,b,30];
variableArray[1]; // 20
//중복 가능, 빈 배열도 가능

//배열의 요소 개수 구하기
const emptyValue = [null, undefined, false, '', NaN];
console.log(emptyValue.length); // 5

//마지막에서 3번째 요소 추출
const arr = [1,2,3,4,5]
arr[arr.length - 3] // 3

//배열에 요소 추가
const target = ['a', 'b', 'c', 'd', 'e'];
target[target.length] = 'f';
console.log(target); // (6) ["a", "b", "c", "d", "e", "f"]

//unshift
const target = ['나', '다', '라', '마', '바'];
target.unshift('가');
console.log(target); // (6) ["가", "나", "다", "라", "마", "바"]

//push
const target = ['가', '나', '다', '라', '마'];
target.push('바');
console.log(target); // (6) ["가", "나", "다", "라", "마", "바"]

//배열 자체를 재선언할 수는 없지만 배열의 요소를 추가하거나 수정하는 것은 가능하다.
const target2 = ['a', 'b', 'c', 'd', 'e'];
target2 = ['f', 'g']; //불가능
target2[0] = 'h'; //가능


//2-22. 배열 메서드(수정, 조회)
//배열 요소 수정
const target = ['가', '나', '다', '라', '마'];
target[3] = '카';
console.log(target); // (5)["가", "나", "다", "카", "마"]

//배열 요소 제거
//마지막 요소를 제거하고 싶다면 .pop()
//첫 번째 요소를 제거하고 싶다면 .shift()
//중간 요소를 제거하고 싶다면 .splice(시작인덱스, 지우는 개수)
const target = ['가', '나', '다', '라', '마'];
target.splice(2, 2);
console.log(target); // (3)["가", "나", "마"]

//splice(해당 인덱스부터 끝까지 제거)
const target = ['가', '나', '다', '라', '마'];
target.splice(1);
console.log(target); // (1)["가"]

//splice(시작인덱스, 지우는 개수, 바꿀 값)
const target = ['가', '나', '다', '라', '마'];
target.splice(1, 3, '타', '파');
console.log(target); // (4)["가", "타", "파", "마"]

const target = ['가', '나', '다', '라', '마'];
target.splice(2, 0, '타', '파');
console.log(target); // (6)["가", "나", "타", "다", "라", "마"]

//.includes()
const target = ['가', '나', '다', '라', '마'];
const result = target.includes('다');
const result2 = target.includes('카');
console.log(result); // true
console.log(result2); // false

//.indexOf(), .lastIndexOf()
const target = ['라', '나', '다', '라', '다'];
const result = target.indexOf('다');
const result2 = target.lastIndexOf('라');
const result3 = target.indexOf('가');
console.log(result); // 2
console.log(result2); // 3
console.log(result3); // -1 (없으면 -1)

//배열 반복하기
const target = ['가','나', '다', '라', '마'];
let i = 0;
while (i < target.length) {
  console.log(target[i]);
  i++;
} // 가 \n 나 \n 다 \n 라 \n 마


//2-23. 배열 메서드 응용하기
const arr = ['가', '라', '다', '라', '마', '라'];
while (arr.indexOf('라') > -1) {
  arr.splice(arr.indexOf('라'), 1)
}
console.log(arr); // (3)["가", "다", "마"]

//.at() 해당 인덱스 출력


//2-24. 함수 기본
//함수를 만들 때는 보통 function 예약어를 사용하거나 =>(화살표) 기호 사용
//화살표 기호를 사용한 함수를 화살표 함수(arrow function)라고 한다.
//function() {} 또는 () => {}

//이름 붙여주기
function a() {} //함수 선언문 (보통 뒤에 세미콜론을 붙이지 않는다.)
const b = function() {}; //함수 표현식
const c = () => {}; //화살표 함수

//함수 호출
function a() {
  console.log('Hello');
  console.log('Function');
}
a();
// Hello
// Function

//return
function b() {
  return '반환값';
}
b() //"반환값"
//반환값이 undefined면 생략 가능
//조건문 안에 return 넣기 가능
//return은 반환과 동시에 함수의 종료 결정
//값을 여러 개 return받고 싶다면 배열로.

//2-25. 매개변수와 인수
function a(parameter) {
  console.log(parameter);
}
a('argument'); //argument
//함수를 선언할 때는 매개변수 parameter, 호출할 때는 인수 argument
//매개변수를 여러 개 둘 수 있다. 매개변수와 인수의 개수가 일치하지 않아도 됨.
function a(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
a('Hello', 'Parameter', 'Argument');
//Hello Parmaeter Argument undefined
//Arguments(3) ["Hello", "Parameter", "Argument"]

//화살표 함수
const multiply = (x, y, z) => {
  return x*y*z;
} // 중괄호와 return이 이어서 나오면 생략도 가능함
multiply(2, 3, 4) // 24

//함수 내부에서 변수 선언도 가능함
//함수 밖에 있는 변수도 가져올 수 있음


//2-26. 객체 리터럴 기본
const zerocho = {
  name: '조현영',
  year: 1994,
  month: 8,
  date: 12,
  gender: 'M',
}; //각각 속성 이름과 속성 값
console.log(zerocho.name); //'조현영'
console.log(zerocho['name']) //'조현영'
//숫자로 시작하거나, 띄어쓰기가 있거나, 특수문자가 있다면 대괄호 사용해야 함
//대괄호에서 ''를 뺀다면 변수로 들어가기 떄문에, ''를 넣어줘야 함
//없는 속성에 접근한다면 undefined

//객체 속성 수정, 추가
zerocho.gender = 'F';
console.log(zerocho.gender); //'F'

//객체 속성 제거
delete zerocho.gender;
console.log(zerocho.gender); //undefined

//배열과 함수는 객체의 성질을 모두 사용할 수 있기 때문에 객체

//메서드
//객체 안에 들어있는 함수는 메서드라고 부른다.
const debug = {
  log: function(value) {
    console.log(value);
  },
};
debug.log('Hello, Method'); //Hello, Method


//2-27. 객체의 비교(원시값과의 차이점)
//객체 간의 비교는 값이 같아도 false
//true가 나오게 하려면 변수안에 저장한 뒤에 비교해야 함
const a = { name: 'zerocho' };
const array = [1,2,a];
console.log(a === array[2]); //true
console.log(array === [1,2,a]); //false


//3-1. 순서도를 그리는 이유
//프로그램을 만드려면 절차를 고려해야 한다.
//에러나 버그는 고려하지 못한 절차에서 발생. 최소화해야함.
//1)프로그램 절차의 개수는 정해져 있어야 한다.
//2)각 절차는 항상 같은 내용이어야 한다.
//3)모든 가능성을 고려해야 한다.
//4)예시는 절차를 검증하는 데 사용한다.