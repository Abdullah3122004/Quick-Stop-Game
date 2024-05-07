var number_html = document.getElementById("number");
var start_btn = document.getElementById("start_btn");
var user_input = document.getElementById("user_input");
var result = document.getElementById("result");
var total_html = document.getElementById("total")
var win_html = document.getElementById("win")
var loss_html = document.getElementById("loss")
var msg =document.getElementById("msg")
var runningNumber = 0;
var interval;
total=20;
win=0;
loss=0;

function start() {
  if (user_input.value) {
    interval = setInterval(function () {
      if (runningNumber >= 999) {
        clearInterval(interval);
        total_html.innerText= --total
        runningNumber = 0;
        number_html.innerText = runningNumber;
        result.innerText = "You are late,Try again";
        start_btn.disabled = false;
      } else {
        runningNumber++;
        number_html.innerText = runningNumber;
      }
    }, 1);
    start_btn.disabled = true;
  } else {
    alert("write a Number");
  }
}
function stop() {
  console.log(user_input.value);
  console.log(runningNumber);
  total_html.innerText= --total
  clearInterval(interval);
  if (user_input.value == runningNumber) {
    result.innerText = "You Won this round";
    win++
    win_html.innerText=win
  } else {
    result.innerText = "You Lost this round";
    loss++ 
    loss_html.innerText=loss
}
  runningNumber = 0;
  number_html.innerText = 0;
  start_btn.disabled = false;

  if (total == 0) {
    if (win >= 5) {
      msg.innerText = "Congrats! You won";
    } else {
      msg.innerText = "Sorry! You loss try again";
    }
    total = 20;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = loss;
    loss_html.innerText = win;
  }
}
