## 문자열

- 문자열을 표현할 때 백틱 ` ` 사용 가능: 백틱으로 감싼 내용은 줄바꿈이 가능하다.
- 따옴표 안에서는 \n으로 줄바꿈
- 따옴표를 문자열로 사용하고 싶다면 작은따옴표와 큰따옴표 혼용 ex> "how's it going?" or 역슬래시: how\'s it going?
- 역슬래시를 문자열로 쓰고 싶으면 두 번 작성 \\

- 코드 입력하면서 실행 안하고 줄바꿈하려면: shift+enter

## 숫자

- 50000=5e4, 0.0005=5e-4
- 0b: 2진법, 0o: 8진법, 0x: 16진법
- parseInt() --> 정수로 바꿈
- parseFloat() --> 소수로 바꿈
- Number(): 문자열 --> 숫자. 문자열에 숫자만 들어가야 함
- parseInt(111, 2): 2진법으로 해석

## 형 변환

- '1' + 0 = '10'
- '1' - 0 = 1
- Number('3월') - 0 = Nan
- ParseInt('3월') - 0 = 3
- 더하기 --> 문자열이 아닌 것들이 문자열로 바뀜.
- 빼기, 곱하기, 나누기 --> 숫자가 아닌 것들이 숫자로 바뀜

## 연산 우선순위

- () > \*\* > , /, % > +, - > & > ^ > | > && > || > ? : (삼항 연산자) ...

- 자바스크립트는 정수, 실수 구분 X
- 부동소수점 문제: 실수를 정수로 바꿔서 계산한 뒤 마지막에 다시 실수로 바꾸기
  ex (0.3*10 - 0.1*10) / 10;

## boolean, 값들의 비교

```
NaN == NaN; --> false
true > false; --> true
```

- 문자열도 크기 비교 가능 .charCodeAt(): 문자의 번호를 알려줌
- == vs. ===: ===는 값과 자료형까지 같은지. 마찬가지로 != vs. !==

```
'1' == 1; --> true
 1 == true; --> true
'1' === 1; --> false
 1 === true ---> false
```

- and: &&
- or: ||
- 자료형을 불 값으료 형 변환: Boolean('a'); --> true
- !!'a'; --> true
- ''(빈 문자열), Nan, undefined, null, 0, false --> false

### undefined, null

- 컴퓨터는 우리가 입력한 명령의 결과를 돌려주는데, 돌려줄 게 없을 때는 undefined를 반환해줌(반환할 결과값이 없을 때)

## 변수

- 선언문: let으로 시작하는 명령
- 초기화: 변수를 선언함과 동시에 값을 대 입하는 행위
- 변수 선언은 항상 결과값이 undefined로 출력
- 변수명에 $, \_ 사용 가능
- 의도적으로 빈 값을 쓸 때는 undefined 대신 null

### 변수 두 개 값 바꾸기

```
let a=5;
let b=3;
let temp=a;
a=b;
b=temp;
```

## 조건문

```
if (조건식) {
동작문;
} else if (조건식) {
동작문;
} else {
동작문;
}
```

if (80<score<90) 불가능. if(80<score && score<90)
중첩 if 조건문

```
switch (조건식) {
	case 비교조건식;
		동작문;
}
```

- switch 옆 소괄호 조건식의 값이 case의 비교조건식 값과 일치(===)하면 해당 동작문 실행.
- 조건식에는 변수를 넣고, 비교 조건식에는 변수와 비교할 값을 넣음
- 만족하는 case 아래의 경우까지 전부 실행됨. --> break 필요
- 아무 경우도 만족하지 않을 때 'default: ' 설정 가능

조건부 연산자=삼항연산자
`조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는  식`

## 반복문

### while문

```
while (조건식) {
  동작문1;
  동작문2;
  동작문3;
}
```

- 변수를 선언하고 변수 값이 변화하다가 조건을 만족하지 않을 때 반복문이 멈춘다.
- (i = i + 1) = (i += 1) = (i++)

```
  let i = 0;
  while (i < 100) {
  console.log('Hello, while!');
  i++;
  }

```

- 100번 실행
- 보통 i=0부터 시작, 조건식은 '<='보다는 '<'을 주로 사용

### for문

```
for(시작; 조건식; 종료식)
  동작문;
```

- 시작(처음에 한 번만 수행) --> 조건식 --> 동작문 --> 종료식 --> 조건식 --> 동작문 --> 종료식 ...(조건이 참인 동안 반복)

```
for (let i=0; i < 100; i++) {
 console.log('hello, for!') ;
}
```

cf. for (;;) --> 무한루프

### break와 continue

```
let i = 0;
while (true) {
  if (i === 5) break;
  i ++;
}
console.log(i);
 // i == 0, i + 1 == 1
 // i == 1, i + 1 == 2
 // i == 2, i + 1 == 3
 // i == 3, i + 1 == 4
 // i == 4, i + 1 == 5
 // i == 5? 조건 false 끝
```

```
for (let i = 0; ; i++) {
  console.log(i);
}
```

이 때 for문에서 조건식이 생략되어 무한 반복된다. 하지만 보통은 조건식을 잘 생략하지 않기 때문에 어색해 보일 수 있다. 그래서 무한반복을 표현할 때는 while문을 더 많이 쓴다.
```
let i = 0;
while (i < 10) {
  i ++;
  if (i % 2 === 0) {//짝수만
    continue; //건너뛰기
  }
  console.log(i); //홀수만 console.log
}
 // i == 0, i + 1 == 1
 // i == 1, i + 1 == 2
 // i == 2, i + 1 == 3
 // i == 3, i + 1 == 4
 // i == 4, i + 1 == 5
 // i == 5? 조건 false 끝
```
### 중첩 반복문
```
for (let i=0; i < 10; i ++>) {
  for (let j = 0; j < 10; j++) {
    console.log(i, j);
  }
}
// i==0, j==0, console.log(0, 0);
// i==0, j==1, console.log(0, 1);
// i==0, j==2, console.log(0, 2);
//...
// i==0, j==9, console.log(0, 9);
// i==0, j==10, 조건 false
// i==1, j==0, console.log(1, 0);
// i==1, j==9, console.log(1, 9);
// i==1, j==10, 조건 false
```
```
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;
  for (let j = 0; j < 5; j++) {
    if (j % 2 === 0) continue;
    for (let k = 0 ; k < 5; k++) {
      if (k % 2 === 0) continue;
      console.log(i, j, k);
    }
  }
}
// i==0 continue;
// i==1, j==0 continue;
// i==1, j==1 k==0 continue;
// i==1, j==1, k==1;
// i==1, j==1, k==2 continue;
// i==1, j==1, k==3;
// i==1, j==1, k==4 continue;
// i==1, j==1, j==5 조건 false
// i==1, j==2 continue;
// i==1, j==3, k==0 continue;
```
```
//짝수 제외한 구구단 출력하기
for (let i=0; i<10; i++){
    if (i%2===0) continue; for (let j=0; j<10; j++){
        if (j%2===0) continue;
    console.log(i, j, i*j)
    }
}
```
## 별찍기
```
for (let i=0; i<5; i++) {
  console.log('*'.repeat(i+1))
}
//결과
*
**
***
****
*****

for (let i=5; i>0; i--) {
  console.log('*'.repeat(i))
}

for (let i=5; i<5; i++) {
  console.log('*'.repeat(5-i))
}
//결과
*****
****
***
**
*

for (let i=1; i<==9; i+=2) {
console.log(' '.repeat((9-i)/2) + '*'.repeat(i))
}
//결과
    * 공백8 별1 합9 
   *** 공백6 별3 합9
  ***** 공백4 별5 합9
 ******* 공백2 별7 합9
********* 공백0 별9 합9
```

