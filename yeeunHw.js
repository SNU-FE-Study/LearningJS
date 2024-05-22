//변수1
let myName = '';
myName = 'OH', myAge = '23';

console.log('My name is ' + myName + ' and I am ' + myAge + ' years old.');
//출력값: My name is OH and I am 23 years old.

//변수2
let myName = 'Paul';
myName = 'OH';

//변수3
let myName = 'Default';
myName = 'Chris';

let myAge = '42';
myAge = parseInt(myAge) + 20;

console.log('My name is ' + myName + ' and I will be ' + myAge + ' years old 20 years later.')
//출력값: My name is Chris and I will be 62 years old 20 years later.

//Math1
let finalResult;
let evenOddResult;

let one = 1, two = 5, three = 10, four = 2;
let add = one + two;
let substract = three - four;
finalResult = add * substract;
evenOddResult = finalResult % 2;

console.log(finalResult, evenOddResult);
//출력값: 48 0

//Math2
let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;
result *= result2
let finalResult = result.toFixed(2)
typeof(finalResult)
let finalNumber = Math.floor(finalResult)

//Math3
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

let weightComparison = eleWeight < mouseWeight;
let heightComparison = ostrichHeight > duckHeight;
let pwdMatch = pwd1 == pwd2;

//Arrays1
var myArray = ['pasta', 'salad', 'steak']
myArray[0] = 'chicken'
myArray[1] = 'pizza'
myArray.unshift('salad')
//myArray = ['salad', 'chicken', 'pizza', 'steak']

//Arrays2
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myArray = myString.split("+");
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength-1]

//Arrays3
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

myArray.pop();
myArray.push("Subin", "Minsu")

for (let i = 0; i < 9; i++) {
  myArray[i] = myArray[i] + ' (' + i + ')'
}

let myString = myArray.join("-")

//Arrays4
const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

birds.indexOf("Eagles");
birds.splice(birds.indexOf("Eagles"), 1);
const eBirds = birds.filter((element) => element.startsWith("E"))

//조건문1
let season = 'summer';
let response;

if (season == 'summer') {
  response = '더워요!'
} else if (season == 'winter') {
  response = '추워요!'
} else {
  response = '무슨 계절인지 모르겠어요'
}
//출력: 더워요!

//조건문2
let response;
let score = 75;
let machineActive = true;

if (machineActive == true) {
  if (score < 0 || score >100) {
    response = "이것은 가능하지 않습니다, 오류가 발생했습니다.";
  } else if (score < 20) {
    response = "끔찍한 점수입니다 — 완전한 실패입니다!";
  } else if (score < 40) {
    response = "조금 알긴 하지만 꽤 나쁜 점수입니다. 발전이 필요합니다.";
  } else if (score < 70) {
    response = "그런대로 잘 하셨네요, 나쁘지 않습니다!";
  } else if (score < 90) {
    response = "훌륭한 점수입니다, 정말로 잘 아시는군요.";
  } else {
    response = "놀라운 점수입니다! 커닝하셨나요? 진짜인가요?"
  }
}
//출력: 훌륭한 점수입니다, 정말로 잘 아시는군요.

//조건문3
let response;
let score = 75;
let machineActive = true;

if (machineActive == true) {
  switch (true) {
    case (score<0 || score>100):
      response = "이것은 가능하지 않습니다, 오류가 발생했습니다.";
      break;
    case (score<20):
      response = "끔찍한 점수입니다 — 완전한 실패입니다!";
      break;
    case (score<40):
      response = "조금 알긴 하지만 꽤 나쁜 점수입니다. 발전이 필요합니다.";
      break;
    case (score<70):
      response = "그런대로 잘 하셨네요, 나쁘지 않습니다!";
      break;
    case (score<90):
      response = "훌륭한 점수입니다, 정말로 잘 아시는군요.";
      break;
    case (score<=100):
      response = "놀라운 점수입니다! 커닝하셨나요? 진짜인가요?";
      break;
  }
}
console.log(response)
//출력: 훌륭한 점수입니다, 정말로 잘 아시는군요.

//조건문4
let machineActive = true;
let pwd = 'cheese';
let machineResult;
let pwdResult;

if (machineActive == true) {
  machineResult = '기계가 켜져있습니다.';
  pwd === 'cheese'? pwdResult = '로그인 성공' : pwdResult = '로그인 실패';
} else {
  machineResult = '기계가 꺼져있습니다.';
}

console.log(machineResult, pwdResult)
//출력: 기계가 켜져있습니다.로그인 성공