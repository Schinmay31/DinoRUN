let score = 0;
let seconds = 0;
let gameStatus = false;
const dino1 = document.getElementById("dino");
const cactus = document.getElementById("cactus");




$(".btn").click(function () {
  if (gameStatus === false) {
    gameStatus = true;

  }
  if(gameStatus == true){
    $("#cactus").addClass("obsAnimation");
    dinoWorking();
    dinoCheck();
    timer();
  }
});

function timer() {
  let T = setInterval(function Timer() {
    score += 1;
    console.log(score);
  }, 500);
}





function dinoWorking() {
  $(window).keypress(function (e) {
    if (e.key == "w") {

      $(".dino_animation1").addClass("jump1");

      setTimeout(function () {
        $(".dino_animation1").removeClass("jump1");
      }, 300);
    }

});
}

function dinoCheck() {
  let isAlive = setInterval(function () {

    let dinoTop = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
    let cacTop = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("top"));


    if (cactusLeft > -124 && cactusLeft < -23 && dinoTop > 110) {
      alert("game over");
      gameOver()
    }
  }, 100);
}



function gameOver() {
  $("#cactus").removeClass("obsAnimation");
  gameStatus = false;
  score = 0;

}
