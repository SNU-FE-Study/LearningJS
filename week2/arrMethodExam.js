// * 배열 메서드 응용 문제 : '라' 모두 제거
const arr = ["가", "라", "다", "라", "마", "라"];

// 1. 배열 메서드(indexOf, splice 이용)
console.log(arr.indexOf("라"));
arr.splice(1, 1);
console.log(arr.indexOf("라"));
arr.splice(2, 1);
console.log(arr.indexOf("라"));
arr.splice(3, 1);
console.log(arr.indexOf("라"));

// 2. 배열 메서드(filter 이용)
const filteredArr = arr.filter((Ele) => Ele !== "라");
console.log(filteredArr);

// * 배열 메서드 : at() -> 인자로 들어온 인덱스의 요소를 반환한다
const arr1 = ["가", "나", "다", "라", "마"];
console.log(arr1.at(1));
