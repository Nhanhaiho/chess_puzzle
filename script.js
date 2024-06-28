let username = "";
let tokens = 0;

let currentPuzzleType = "";
let puzzleIndex = 0;
let currentLevel = "";
const puzzles = {
  starter: {
    tactical: [
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
    positional: [
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
    endgame: [
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
  },
  intermediate: {
    tactical: [
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
    positional: [
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
    endgame: [
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
  },
  advanced: {
    tactical: [
      "img/puz1.png",
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
    positional: [
      "img/puz1.png",
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
    endgame: [
      "img/puz1.png",
      "img/puz1.png",
      "img/puz2.png",
      "img/puz3.png",
      "img/puz4.png",
      "img/puz5.png",
    ],
  },
};

function login() {
  username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("levelsScreen").style.display = "block";
  } else {
    alert("Please enter both username and password");
  }
}

function returnToLogin() {
  document.getElementById("levelsScreen").style.display = "none";
  document.getElementById("mainMenuScreen").style.display = "none";
  document.getElementById("learnScreen").style.display = "none";
  document.getElementById("puzzlesScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "none";
  document.getElementById("exchangeScreen").style.display = "none";
  document.getElementById("pvpScreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
}

function startLevel(level) {
  currentLevel = level;
  document.getElementById("levelsScreen").style.display = "none";
  document.getElementById("mainMenuScreen").style.display = "block";
  document.getElementById("usernameDisplay").innerText = `Welcome, ${username}`;
  document.getElementById("tokenDisplay").innerText = `Tokens: ${tokens}`;
}

function showLearn() {
  document.getElementById("mainMenuScreen").style.display = "none";
  document.getElementById("learnScreen").style.display = "block";
}

function showPuzzles() {
  document.getElementById("mainMenuScreen").style.display = "none";
  document.getElementById("puzzlesScreen").style.display = "block";
}

function showPvP() {
  document.getElementById("mainMenuScreen").style.display = "none";
  document.getElementById("pvpScreen").style.display = "block";
}

function showExchange() {
  document.getElementById("mainMenuScreen").style.display = "none";
  document.getElementById("exchangeScreen").style.display = "block";
}

function learn(topic) {
  alert(`Learning about ${topic}`);
  document.getElementById("learnScreen").style.display = "none";
  document.getElementById("mainMenuScreen").style.display = "block";
}

function startPuzzle(puzzleType) {
  currentPuzzleType = puzzleType;
  puzzleIndex = 0;
  document.getElementById("puzzlesScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  document.getElementById("status").innerText = `Level: ${
    currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)
  } - ${puzzleType.charAt(0).toUpperCase() + puzzleType.slice(1)}`;
  loadPuzzle();
}

function loadPuzzle() {
  if (puzzleIndex < puzzles[currentLevel][currentPuzzleType].length) {
    const puzzleSrc = puzzles[currentLevel][currentPuzzleType][puzzleIndex];
     const boardElement = document.getElementById("board");
     boardElement.innerHTML = `<img src="${puzzleSrc}" alt="Puzzle Image">`;
      
  } else {
    document.getElementById("status").innerText =
      "You completed all puzzles for this type!";
    document.getElementById("board").innerText = "";
  }
}

function nextPuzzle() {
  if (puzzleIndex < puzzles[currentLevel][currentPuzzleType].length - 1) {
    puzzleIndex++;
    tokens += 1; // Reward tokens for each puzzle solved
    document.getElementById("tokenDisplay").innerText = `Tokens: ${tokens}`;
    loadPuzzle();
  } else {
    document.getElementById("status").innerText = "No more puzzles available!";
  }
}

function backToPuzzlesScreen() {
  document.getElementById("gameScreen").style.display = "none";
  document.getElementById("puzzlesScreen").style.display = "block";
}

function backToMainMenu() {
  document.getElementById("learnScreen").style.display = "none";
  document.getElementById("puzzlesScreen").style.display = "none";
  document.getElementById("exchangeScreen").style.display = "none";
  document.getElementById("pvpScreen").style.display = "none";
  document.getElementById("mainMenuScreen").style.display = "block";
}

function exchangeTokens(amount, rewardType) {
  if (tokens >= amount) {
    tokens -= amount;
    document.getElementById("tokenDisplay").innerText = `Tokens: ${tokens}`;
    if (rewardType === "timeWithPro") {
      document.getElementById("proOptions").style.display = "block";
    } else {
      alert(`You have successfully exchanged ${amount} tokens.`);
    }
  } else {
    alert("You do not have enough tokens.");
  }
}

function choosePro(pro) {
  alert(`You have chosen ${pro}`);
  document.getElementById("proOptions").style.display = "none";
}

function playWith(player) {
  alert(`Playing with ${player}`);
  document.getElementById("pvpScreen").style.display = "none";
  document.getElementById("mainMenuScreen").style.display = "block";
}
