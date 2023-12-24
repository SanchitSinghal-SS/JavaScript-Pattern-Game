let gameSeq = [];
let userSeq = [];
let box_color = ["one", "two", "three", "four"];
let started = false;
let level = 0;
let highscore = 0;
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  if (level >= highscore) {
    highscore = level;
  }
  h2.innerText = `Level ${level}`;
  let boxColor = box_color[Math.floor(Math.random() * 3)];
  gameSeq.push(boxColor);
  console.log(gameSeq);
  btnFlash(document.querySelector(`.${boxColor}`));
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Highest Score =  ${highscore-1}`;
    h2.innerHTML = `Game Over! Your score was <b>${level-1}</b> <br> Press any Key to Start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
