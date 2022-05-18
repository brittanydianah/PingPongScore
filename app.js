const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const highScore = document.querySelector("#highScore");
const button1 = document.querySelector("#player1");
const button2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");


reset.onclick = function(e){
    e.preventDefault();
    score1.innerHTML = "0 ";
    score1.style.color = "";
    score2.innerHTML = "0";
    score2.style.color = "";
    button1.disabled = false;
    button2.disabled = false;
}

button1.addEventListener("click", (e) => {
    e.preventDefault();
    score1.innerHTML = (parseInt(score1.innerHTML) + 1) + " " ;
    if (parseInt(score1.innerHTML) == parseInt(highScore.value)){
        score1.style.color = "green";
        score2.style.color = "red";
        button1.disabled = true;
        button2.disabled = true;
    }
})

button2.addEventListener("click", (e) => {
    e.preventDefault();
    score2.innerHTML = (parseInt(score2.innerHTML) + 1);
    if (parseInt(score2.innerHTML) == parseInt(highScore.value)){
        score2.style.color = "green";
        score1.style.color = "red";
        button1.disabled = true;
        button2.disabled = true;

    }
})