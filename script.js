let userScore = 0; 
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreSheet = document.querySelector("#user-score");
const compscoreSheet = document.querySelector("#computer-score");

const showWinner = (userWin) =>{ 
    if(userWin){
        userScore ++;
        userscoreSheet.innerText = userScore;
        msg.innerText = "User Win"; 
        msg.style.backgroundColor = "green"; 
    }else{
        compScore ++;
        compscoreSheet.innerText = compScore;
        msg.innerText = "Comp Win";
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () =>{
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "rgb(61, 23, 82)";
};
const playGame = (userChoice) => { 
    const compChoice = genCompChoice(); 

    if(userChoice == compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice == "rock"){
           userWin = compChoice == "paper" ? false : true; 
        }else if (userChoice == "paper"){
            userWin = compChoice == "scissor" ? false : true;
        }else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices. forEach((choice)=>{ 
    choice.addEventListener("click", () =>{ 
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice); 
    });
});


const genCompChoice  = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3); 
    return options[randomIdx];
};