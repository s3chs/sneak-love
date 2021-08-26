const welcomePage = document.querySelector(".welcome-page");
const raffleSection = document.querySelector(".raffle");
const bg = document.querySelector(".welcome-background-one");
const enterBtn = document.querySelector(".enter");
const title = document.querySelector(".title");
const boxUp = document.querySelector(".box-up");
const box = document.querySelector(".box");
const raffleTxt = document.querySelector(".raffle-txt");
const loader = document.querySelector(".loader");
const body = document.querySelector("body");

enterBtn.addEventListener("click", enterSite);
boxUp.addEventListener("click", showSneaker);

// Function for entering the website and entering the sneaker prize section
function enterSite() {
  raffleSection.style.display = "none";
  bg.classList.add("active");
  enterBtn.classList.add("active");
  title.classList.add("active");
  setTimeout(() => {
    enterBtn.style.display = "none";
  }, 400);
  setTimeout(() => {
    body.style.backgroundColor = "#cddafd";
    welcomePage.style.display = "none";
    loader.classList.toggle("active");
    setTimeout(() => {
      loader.classList.toggle("active");
      setTimeout(() => {
        loader.style.display = "none";
        raffleSection.style.display = "block";
        setTimeout(() => {
          raffleSection.classList.add("active");
        }, 300);
      }, 700);
    }, 5000); // CHANGE TIME FOR THE LOADING SNEAKERS TO BE WHATEVER
  }, 1600);
}

// Function for showing the sneaker prize when the box is clicked aswell as making the section disappear
function showSneaker() {
  boxUp.classList.add("active");
  box.classList.add("active");
  raffleTxt.classList.toggle("active");
  setTimeout(() => {
    raffleTxt.classList.toggle("active");
    raffleTxt.innerHTML =
      "GOT'EM! <br/>A pair of Jordan 4 Fire Red, now that's a win.";
    boxUp.style.display = "none";
    setTimeout(() => {
      raffleTxt.classList.toggle("active");
      box.classList.add("out");
      setTimeout(() => {
        raffleSection.style.display = " none";
      }, 300);
    }, 3000);
  }, 400);
}
