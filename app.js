let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePera=document.querySelector("#user-score");
const compScorePera=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const rendIdx=Math.floor(Math.random()*3);
    return option[rendIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw Play again.";
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePera.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePera.innerText=compScore;
        msg.innerText=`computer Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false:true;
        }else{
            //rock, paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})