const counter = document.getElementById("counter");
const showText = document.getElementById("show-Text");
const btnIncreace = document.getElementById("btn-count-incrace");
const btnDecreace = document.getElementById("btn-count-decrace");
const countReset = document.getElementById("counter-Reset");

const textInput = document.getElementById("input-text");
const textSubmit = document.getElementById("Submit-text");
const textReset = document.getElementById("text-Reset");

let counters = 0;
// Counter Section
btnIncreace.addEventListener("click", () => {
  /*   counter.innerHTML = `${counters++}`;
  console.log("its work"); */

  counters++;
  counter.innerHTML = `${counters}`;
  console.log("Incremented");

  if (counters >= 33) {
    document.body.querySelector(".card").style.backgroundColor = "red";
  }
});

btnDecreace.addEventListener("click", () => {
  /*   if (counters < 0 || counters <= -1 || counters <= 1) {
    counter.innerHTML = `0`;
    console.log("its work");
  } else {
    counter.innerHTML = `${counters--}`;
    console.log("its work");
  } */

  if (counters > 0) {
    counters--;
    counter.innerHTML = `${counters}`;
    console.log("Decremented");
  }

  if (counters === 33) {
    document.body.querySelector(".card").style.backgroundColor = "teal";
  }
});

countReset.addEventListener("click", () => {
  counter.innerHTML = `0`;
});

textSubmit.addEventListener("click", () => {
  showText.innerHTML = `${textInput.value}`;
  console.log("Its work");
});

textReset.addEventListener("click", () => {
  showText.innerHTML = `Write your Messgae`;
  console.log("Its work");
});
