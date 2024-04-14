const bubbleSection = document.getElementById("bubbles");
for (let i = 1; i <= 126; i++)
bubbleSection.innerHTML += `<div class="bubble" id="bubble${i}">${Math.floor(Math.random() * 9)}</div>`;
const bubble = document.querySelectorAll(".bubble");

bubble.forEach((ele)=>ele.addEventListener("click",changeNum))
    

function changeNum() {    

    bubble.forEach((ele) =>{ele.innerHTML=Math.floor(Math.random()*9)})
}
