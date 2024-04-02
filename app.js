let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keyPress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
   btn.classList.add("Flash");
   setTimeout(function () {
    btn.classList.remove("Flash");
   }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
     btn.classList.remove("userFlash");
    }, 250);
 }
 

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColors = btns[randIdx];
    let randBtn = document.querySelector(`.${randColors}`);
   gameSeq.push(randcolor);
   console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx) {
if (userSeq[idx] === gameSeq[idx]) {
  if(userSeq.length == gameSeq.length) {
   setTimeOut(levelUp, 1000);
  }
} else {
    h2.innerText = `Game Over! Your score was  <b>${level}</b> <br> Press any Key to start.`;
    document.querySelector("body").style.backgroundcolor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();

}
}
    
function btnPress() {
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress );
}
    
function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}