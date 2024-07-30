let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["one","two","three","four"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
};

function btnPress(){
    let btn = this;
    userflash(btn);
    // console.log(this);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! <b>Your score was ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}