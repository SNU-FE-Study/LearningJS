let myMind = "수업";
if (myMind) {
  myMind += " 듣기";
} else {
  myMind += " 듣고";
}

switch (myMind) {
  case "수업 듣기":
    myMind += " 싫다";
    break;
  case "수업 듣고":
    myMind += " 싶다";
    break;
  default:
    break;
}

myMind === "수업 듣고 싶다" ? (myMind += "!") : (myMind += "ㅠ");

console.log(myMind);
