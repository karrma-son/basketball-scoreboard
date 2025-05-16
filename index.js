let scoreEl = document.getElementById("score-el")
let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let shotClockEl = document.getElementById("shot-clock");
let gameClockEl = document.getElementById("game-clock");
let foulEl1 = document.getElementById("foul-el1")
let foulEl2 = document.getElementById("foul-el2")

let foulCount1 = 0
let foulCount2 = 0
let count1 = 0
let count2 = 0
let gameClock = 12 * 60; // 12 minutes
let gameClockInterval = null;
let isGameClockRunning = false;
let shotClock = 24;
let timerId = null;

setInterval(myTimer, 1000);

function myTimer() {
 let clock = new Date();
  document.getElementById("clock").innerHTML = clock.toLocaleTimeString();
}

function startTimer(duration, display) {
    var timer = duration;
    var intervalId = setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId); // Stop it
            display.textContent = "00:00";
        }
    }, 1000);
}
function toggleGameClock() {
    if (!isGameClockRunning) {
        gameClockInterval = setInterval(updateGameClock, 1000);
        isGameClockRunning = true;
        gameClockEl.style.color = "burlywood"; // Indicate it's running
    } else {
        clearInterval(gameClockInterval);
        isGameClockRunning = false;
        gameClockEl.style.color = "orange"; // Indicate it's paused
    }
}

function updateGameClock() {
    let minutes = Math.floor(gameClock / 60);
    let seconds = gameClock % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    gameClockEl.textContent = minutes + ":" + seconds;

    if (--gameClock < 0) {
        clearInterval(gameClockInterval);
        isGameClockRunning = false;
        gameClockEl.textContent = "00:00";
        gameClockEl.style.color = "black";
    }
}


function resetGameClock(seconds= 60*12) {
  gameClock= seconds;
  gameClockEl.textContent =gameClock;
  gameClockEl.style.color = "default"
  gameClockEl.style.animation = "";
  gameClockEl.style.fontWeight = "normal";
}

function resetShotClock(seconds = 24) {
  shotClock = seconds;
  shotClockEl.textContent = shotClock;
  shotClockEl.style.color = "default"
  shotClockEl.style.animation = "";
  shotClockEl.style.fontWeight = "normal";
}

function countdown() {
  if (shotClock <= -1) {
  clearInterval(timerId);
  timerId = null;
  flashy();
  alert("BUZZER!");
  setTimeout(() => {
      resetShotClock(); // This will reset to 24
    }, 2000);} 
  else {
      shotClockEl.textContent = shotClock;
      shotClock--;

      }
    }
    
function clockDown(){
  if (timerId === null) {
    timerId = setInterval(countdown, 1000);
    shotClockEl.style.color = "burlywood"; // Show the clock as running (optional)
        }
  else {
    clearInterval(timerId);
    timerId = null;
    shotClockEl.style.color = "orange"; // Show the clock as paused (optional)
  }
}

function toggleAllClocks() {
    if (!isGameClockRunning) {
        gameClockInterval = setInterval(updateGameClock, 1000);
        isGameClockRunning = true;
        gameClockEl.style.color = "burlywood";
    } else {
        clearInterval(gameClockInterval);
        isGameClockRunning = false;
        gameClockEl.style.color = "orange";
    }

    
    if (timerId === null) {
        timerId = setInterval(countdown, 1000);
        shotClockEl.style.color = "burlywood";
    } else {
        clearInterval(timerId);
        timerId = null;
        shotClockEl.style.color = "orange";
    }
}

function flashy() {
  shotClockEl.style.fontWeight = "bold";
  shotClockEl.style.animation = "flash 1s infinite";
  shotClockEl.style.color = "black";
}

function foul1() {
    foulCount1 += 1
    foulEl1.textContent = foulCount1
}

function foul2() {
    foulCount2 += 1
    foulEl2.textContent = foulCount2
}
    
function increment1() {
    count1 += 1
    countEl1.textContent = count1
}
function increment2() {
    count1 += 2
    countEl1.textContent = count1
}
function increment3() {
    count1 += 3
    countEl1.textContent = count1
}

function increment4() {
    count2 += 1
    countEl2.textContent = count2
}
function increment5() {
    count2 += 2
    countEl2.textContent = count2
}
function increment6() {
    count2 += 3
    countEl2.textContent = count2
}
