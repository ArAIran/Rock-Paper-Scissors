const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const matchScreen = document.querySelector(".match");
const options = document.querySelectorAll(".options button");
const winner = document.querySelector(".winner");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const Computerscore = document.querySelector(".computer-score p");
const Playerscore = document.querySelector(".player-score p");

let playerScore = 0;
let computerScore = 0;


playBtn.addEventListener("click", function () {
  introScreen.classList.add("fadeOut");
  matchScreen.classList.remove("fadeOut");
  matchScreen.classList.add("fadeIn");
});

const computer = ["rock", "paper", "scissors"];

options.forEach(function (option) {
  option.addEventListener("click", function () {

    options.forEach(function (btn) {
      btn.disabled = true;

    });

    const randomnumber = Math.floor(Math.random() * 3);
    const computerChoice = computer[randomnumber];

    playerHand.src = "./assets/rock.png";
    computerHand.src = "./assets/rock.png";
    winner.textContent = "...";
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";

    setTimeout(function () {
      playerHand.style.animation = "";
      computerHand.style.animation = "";

      playerHand.src = `./assets/${option.textContent}.png`;
      computerHand.src = `./assets/${computerChoice}.png`;

      if (option.textContent === computerChoice) {
        winner.textContent = "It is a tie";
      } else if (option.textContent === "rock" && computerChoice === "scissors") {
        winner.textContent = "player Win";
        playerScore++
        Playerscore.textContent = playerScore;
      } else if (option.textContent === "rock" && computerChoice === "paper") {
        winner.textContent = "computer Win";
        computerScore++
        Computerscore.textContent = computerScore ;
      } else if (option.textContent === "paper" && computerChoice === "rock") {
        winner.textContent = "player Win";
        playerScore++
        Playerscore.textContent = playerScore;
      } else if (option.textContent === "paper" && computerChoice === "scissors") {
        winner.textContent = "computer Win";
        computerScore++
        Computerscore.textContent = computerScore ;
      } else if (option.textContent === "scissors" && computerChoice === "paper") {
        winner.textContent = "player Win";
        playerScore++
        Playerscore.textContent = playerScore;
      } else if (option.textContent === "scissors" && computerChoice === "rock") {
        winner.textContent = "computer Win";
        computerScore++
        Computerscore.textContent = computerScore ;
      }


      options.forEach(function (btn) {
        btn.disabled = false;
      });

    }, 2000);
  });
});