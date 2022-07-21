function smallBig() {
  let a = document.getElementById("numberOne").value * 1;
  let b = document.getElementById("numberTwo").value * 1;
  let c = document.getElementById("numberThree").value * 1;

  if (a > b && b > c) {
    show = `${c} > ${b} > ${a}`;
  } else if (a > c && c > b) {
    show = `${b} > ${c} > ${a}`;
  } else if (b > c && c > a) {
    show = `${a} > ${c} > ${b}`;
  } else if (b > a && a > c) {
    show = `${c} > ${a} > ${b}`;
  } else if (c > a && a > b) {
    show = `${b} > ${a} > ${c}`;
  } else if (c > b && b > a) {
    show = `${a} > ${b} > ${c}`;
  }
  document.getElementById("result").innerHTML = show;
}
smallBig();



function aiEnter() {
  let user = document.getElementById("user").value;
  let hello = "Hello there";

  if (user == "dad") {
    hello = "Hi Dad!";
  } else if (user == "mom") {
    hello = "Hi Mom!";
  } else if (user == "brother") {
    hello = "Hi Brother!";
  } else if (user == "youngbrother") {
    hello = "Hi Young Brother";
  }

  document.getElementById("aiResult").innerHTML = hello;
}
aiEnter();



function count() {

  let firstNumber = document.getElementById("firstNumber").value * 1;
  let secondNumber = document.getElementById("secondNumber").value * 1;
  let thirdNumber = document.getElementById("thirdNumber").value * 1;

  let oddNumber = 0;
  let eventNumber = 0;
  oddNumber = (firstNumber % 2) + (secondNumber % 2) + (thirdNumber % 2);
  eventNumber = 3 - oddNumber;
  let result = `${oddNumber} Odd Number and ${eventNumber} Event Number`;

  document.getElementById("countNumber").innerHTML = result;
}
count();



function Triangle() {
  let edgeA = document.getElementById("edgeA").value * 1;
  let edgeB = document.getElementById("edgeB").value * 1;
  let edgeC = document.getElementById("edgeC").value * 1;

  let triangleResult = "";
  if (edgeA === edgeB && edgeA === edgeC && edgeC === edgeA) {
    triangleResult = "Equilateral Triangle";
  } else if (edgeA === edgeB || edgeA === edgeC || edgeB === edgeC) {
    triangleResult = "Isosceles Triangle";
  } else if (
    edgeA * edgeA === edgeB * edgeB + edgeC * edgeC ||
    edgeB * edgeB === edgeA * edgeA + edgeC * edgeC ||
    edgeC * edgeC === edgeA * edgeA + edgeB * edgeB
  ) {
    triangleResult = "Right Triangle";
  } else {
    triangleResult = "Normal Triangle";
  }

  document.getElementById("triangleShow").innerHTML = triangleResult;
}
Triangle();