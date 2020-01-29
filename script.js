var firstEle = document.body.querySelector(".first");
var secondEle = document.body.querySelector(".second");
var sumEle = document.body.querySelector(".sum");

// prompts return string values
// use Number() to convert value into a numerical value
var firstPrompt = Number(prompt("What is your taxed bill in this summation?"));
var secondPrompt = Number(prompt("What the amount of tip in this summation?"));

// process

var summation = firstPrompt+secondPrompt;

firstEle.innerHTML="Your Taxed bill is "+firstPrompt;
secondEle.innerHTML="The amount of tip is "+secondPrompt;
sumEle.innerHTML = "The sum is "+summation;