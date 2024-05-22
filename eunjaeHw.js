let user = '메롱'
if (user == '수빈') {
  user += '이는' 
} else if (user == '은재') {
  user += '는'
} else if (user == '예은') {
  user += '이는'
} else if (user == '호준') {
  user += '이는'
} else {
  user += '입니다'
}

switch (user) {
  case "수빈이는":
    user += " 멋져요"
    break;
  case "은재는":
    user += " 멋져요"
    break;
  case "예은이는":
    user += " 멋져요"
    break;
  case "호준이는":
    user += " 멋져요"
    break;
  default:
    user += " 행복하신가요?"
    break;
}

user === "수빈이는 멋져요" ? (user += " 최고로") : (user += " 수빈이만큼");

console.log(user);