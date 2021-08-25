const bg = document.querySelector(".welcome-background-one");
const enterBtn = document.querySelector(".enter");
const title = document.querySelector(".title");

enterBtn.addEventListener("click", enterSite);

function enterSite() {
  bg.classList.add("active");
  enterBtn.classList.add("active");
  setTimeout(() => {
    title.classList.add("active");
  }, 2000);
}
