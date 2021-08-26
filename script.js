const bg = document.querySelector(".welcome-background-one");
const enterBtn = document.querySelector(".enter");
const title = document.querySelector(".title");
const boxUp = document.querySelector(".box-up");
const box = document.querySelector(".box");
const raffleTxt = document.querySelector(".raffle-txt");

enterBtn.addEventListener("click", enterSite);
boxUp.addEventListener("click", showSneaker);

// Function for entering of the website
function enterSite() {
  bg.classList.add("active");
  enterBtn.classList.add("active");
  title.classList.add("active");
  setTimeout(() => {
    enterBtn.style.display = "none";
  }, 400);
}

// Function for showing the sneaker prize
function showSneaker() {
  boxUp.classList.add("active");
  box.classList.add("active");
  raffleTxt.classList.toggle("active");
  setTimeout(() => {
    raffleTxt.classList.toggle("active");
    raffleTxt.innerHTML = "A pair of Jordan 4 Fire Red, now that's a win !";
  }, 400);
}
