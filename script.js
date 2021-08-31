const welcomePage = document.querySelector(".welcome-page");
const projectDesc = document.querySelector(".project-desc");
const raffleSection = document.querySelector(".raffle");
const bg = document.querySelector(".welcome-background-one");
const enterBtn = document.querySelector(".enter");
const title = document.querySelector(".title");
const boxUp = document.querySelector(".box-up");
const box = document.querySelector(".box");
const raffleTxt = document.querySelector(".raffle-txt");
const loader = document.querySelector(".loader");
const body = document.querySelector("body");

const triangle = document.querySelector(".triangle");
const triangleBottom = document.querySelector(".triangle-bottom");
const projectContainer = document.querySelector(".project-desc-container");
const projectFor = document.querySelector(".a-project-for");
const weTheNew = document.querySelector(".wethenew");
const site = document.querySelector(".site");

enterBtn.addEventListener("click", enterSite);
boxUp.addEventListener("click", showSneaker);

// Function for entering the website and entering the sneaker prize section
function enterSite() {
  bg.classList.add("active");
  enterBtn.classList.add("active");
  title.classList.add("active");
  // REMOVE THE ENTER BTN FROM DOM FOR THE ANIMATION
  setTimeout(() => {
    enterBtn.style.display = "none";
  }, 400);
  //
  setTimeout(() => {
    body.style.backgroundColor = "#cddafd";
    welcomePage.style.display = "none";
    loader.style.display = "block";
    setTimeout(() => {
      loader.classList.toggle("active");
      setTimeout(() => {
        loader.classList.toggle("active");
        setTimeout(() => {
          loader.style.display = "none";
          setTimeout(() => {
            projectDesc.style.display = "flex";
            setTimeout(() => {
              projectDesc.classList.toggle("active");
              welcomeAnim();
            }, 100);
          }, 100);
        }, 800);
      }, 5000); // CHANGE TIME FOR THE LOADING SNEAKERS TO BE WHATEVER
    }, 300);
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
  }, 400);
}

function welcomeAnim() {
  setTimeout(() => {
    triangle.classList.toggle("active");
    triangleBottom.classList.toggle("active");
    setTimeout(() => {
      projectContainer.classList.toggle("active");
      projectFor.classList.toggle("active");
      weTheNew.classList.toggle("active");
      triangle.style.transition = "none";
      triangleBottom.style.transition = "none";
      setTimeout(() => {
        site.style.display = "block";
      }, 500);
    }, 700);
  }, 100);
}
