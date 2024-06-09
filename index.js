//for making 126 bubbles
const bubbleSection = document.getElementById("bubbles");
for (let i = 1; i <= 126; i++)
    bubbleSection.innerHTML += `<div class="bubble" >${Math.floor(
        Math.random() * 25
    )}</div>`;

//declaring global elements
const hit = document.getElementById("hit");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const startBtn = document.getElementById("start-btn");
const bubble = document.querySelectorAll(".bubble");
const gameOverDialog = document.getElementById("game-over");
let hitNum,timerNum,scoreNum = 0;

const changeHitNum = () => {
    hitNum = Math.floor(Math.random() * 25);
    hit.innerText = hitNum;
};
const showGameOverModal=()=>{
    document.getElementById("final-score").innerText=`SCORE : ${scoreNum}`
    gameOverDialog.showModal();
    clearInterval(timerNum);
}
const resetTimer = () => {
    let time = 15;
    timerNum = setInterval(() => {
        timer.innerText = --time;
        if (time == 0) showGameOverModal();
    }, 1000);
};

//function to chech if the clicked bubble is correct or not
bubble.forEach((ele) =>
    ele.addEventListener("click", () => {
        let ans = hit.innerText;
        if (ans == ele.innerText) {
            scoreNum += 10;
            score.innerText = scoreNum;
        }else {
            if (scoreNum > 0) scoreNum -= 10;
            score.innerText = scoreNum;
            
        }
        clearInterval(timerNum);
        resetTimer();
        changeHitNum();
        bubble.forEach((ele) => {
            ele.innerHTML = Math.floor(Math.random() * 25);
        });
    })
);
const resetEverything=() => {
    startBtn.innerText = "RESET"
    startBtn.style.backgroundColor = "red";
    scoreNum = 0;
    score.innerText = scoreNum;
    changeHitNum();
    clearInterval(timerNum);
    resetTimer();
}
startBtn.addEventListener("click",resetEverything)
document.getElementById("back-btn").addEventListener('click',resetEverything)
document.getElementById("back-btn").addEventListener("click",()=>gameOverDialog.close())
