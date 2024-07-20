const player1score = document.querySelector(".hs0");
const player2score = document.querySelector(".hs1");
const dice = document.querySelector(".dce");
const newgame = document.querySelector(".newgame");
const rolldice = document.querySelector(".rolldice");
const hold = document.querySelector(".hold");
const current_score1 = document.querySelector(".cs0");
const current_score2 = document.querySelector(".cs1");
const a = document.querySelector(".win");
const b = document.querySelector(".dis");
const c = document.querySelector(".box1")
const d = document.querySelector(".box2")

// Example initialization assuming the classes exist in your HTML
player1score.textContent = 0;
player2score.textContent = 0;
current_score1.textContent = 0;
current_score2.textContent = 0;

dice.classList.add("hidden");
let sum = 0;
let activeplayer = 0;
high_score = [0, 0];
let f = 0;

function active() {
  sum = 0;
  document.querySelector(`.cs${activeplayer}`).textContent = 0;

  activeplayer = activeplayer === 1 ? 0 : 1;
}

function done() {
  a.style.display = "None";

  b.style.display = "block";
  document.querySelector(".no").textContent = activeplayer;
}

rolldice.addEventListener("click", function () {
  const num = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${num}.png`;

  if(activeplayer==0){
    c.classList.add("pad")
    d.classList.remove("pad")
    
  }
  else{
    c.classList.remove("pad")
    d.classList.add("pad")

  }

  if (num !== 1) {
    sum += num;

    document.querySelector(`.cs${activeplayer}`).textContent = sum;
  } else {
    active();
  }
});
hold.addEventListener("click", function () {
  high_score[activeplayer] = high_score[activeplayer] + sum;
  f = high_score[activeplayer];
  document.querySelector(`.hs${activeplayer}`).textContent = f;
  if (high_score[activeplayer] >= 100) {
    console.log("hai");
    done();
  }
  active();
});

newgame.addEventListener("click", function () {
  location.reload();
});
