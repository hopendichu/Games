let choices=["rock", "paper", "scissors"];

let playerDisplay=document.getElementById("playerDisplay");

let computerDisplay=document.getElementById("computerDisplay");

let resultDisplay=document.getElementById("resultDisplay");

function playGame(playerChoice){

let computerChoice=choices[Math.floor(Math.random() *3)];

console.log(computerChoice);

let result="";

if(playerChoice===computerChoice){
    result="A TIE";
}else{
    switch(playerChoice){
        case "rock" :
          if (computerChoice==="scissors") {
              console.log("YOU WIN!")
          }else if(computerChoice==="paper"){
            console.log("YOU LOOSE")
          } else{
            console.log("A TIE")
          }

          case "paper" :
         if (computerChoice==="rock") {
            console.log("YOU WIN!")
         } else if(computerChoice===scissors){
            console.log("YOU LOOSE!")
         }else{
            console.log("A TIE!")
         }

          case "scissors" :
          if (computerChoice==="paper"){
            console.log("YOU WIN!")
          }else if(computerChoice==="rock"){
            console.log("YOU LOOSE!")
          }else{
            console.log("A TIE!")
          }
          
    
}
}
    playerDisplay.textContent=`PLAYER ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER ${computerChoice}`;
    resultDisplay.textContent=result;
}