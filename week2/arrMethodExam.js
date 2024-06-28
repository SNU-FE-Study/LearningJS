// // * 배열 메서드 응용 문제 : '라' 모두 제거
// const arr = ["가", "라", "다", "라", "마", "라"];

// // 1. 배열 메서드(indexOf, splice 이용)
// console.log(arr.indexOf("라"));
// arr.splice(1, 1);
// console.log(arr.indexOf("라"));
// arr.splice(2, 1);
// console.log(arr.indexOf("라"));
// arr.splice(3, 1);
// console.log(arr.indexOf("라"));

// // 2. 배열 메서드(filter 이용)
// const filteredArr = arr.filter((Ele) => Ele !== "라");
// console.log(filteredArr);

// // * 배열 메서드 : at() -> 인자로 들어온 인덱스의 요소를 반환한다
// const arr1 = ["가", "나", "다", "라", "마"];
// console.log(arr1.at(1));

// // 원본 배열을 변경하는 배열 메서드
// // push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin 등등
// const array = ["가", "나", "다", "라", "마"];
// console.log(array.push("바")); // 6
// // push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환

// // 원본 배열을 변경하지 않고, 새로운 배열을 반환하는 배열 메서드
// // map, filter, concat, slice, flat, flatMap 등등
// const array1 = ["가", "나", "다", "라", "마"];
// console.log(array1.map((element) => element + "바")); // ["가바", "나바", "다바", "라바", "마바"]
// // map() 메서드는 배열 내의 모든 요소 각각에 대하여 제공된 함수를 호출한 결과를 모아 새로운 배열을 반환

// 함수를 쓰는 이유? -> 코드의 재사용성, 가독성, 유지보수성

// const onClick = ()=>{
//   console.log('click');
// }
// const clickHandler = () => document.querySelector('button').addEventListener('click', onClick);

// const foo = () => {
//   console.log("foo");
//   console.log("foo");
//   console.log("foo");
//   console.log("foo");
//   console.log("foo");
//   console.log("foo");
// };

// foo();

// const calculateInputs = (input1,input2)=>{
//   console.log((input1 + input2) * input1 / input2)
// }

// const input1 = document.querySelector("input1");
// const input2 = document.querySelector("input2");
// calculateInputs(input1,input2);

// const input1 = document.querySelector("input1");
// const input2 = document.querySelector("input2");
// console.log((input1 + input2) * input1 / input2)

// const func = () => {
//   console.log("hi");
// };

// console.log(func());

// const func = (a, b) => console.log(a, b);

// func(1, 2, 3, 4);

// const b = "가";
// const obj = {
//   [b]: 1,
//   나: 2,
//   다: 3,
// };

// console.log(obj[b]);

// let a = 5;
// let b = a;

// b += 6;
// console.log(a === b);
