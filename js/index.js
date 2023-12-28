const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissor = document.querySelector(".btn-scissor");

const btnX = document.querySelector(".bi-x-lg");

const modal = document.querySelector(".modal");
const result = document.querySelector(".result");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");

let randomNumber = Math.trunc(Math.random() * 3) + 1;
console.log(randomNumber);

btnRock.addEventListener("click", () => {
  if (randomNumber === 1) {
    result.innerHTML = `its a draw try again`;
  } else if (randomNumber === 2) {
    result.innerHTML = `❌ computer chose paper unfurtunately you lost game ❌`;
  } else {
    result.innerHTML = `🏆 computer chose scissor you won 🏆`;
  }
  modal.classList.remove("modal-js");
});
btnPaper.addEventListener("click", () => {
  if (randomNumber === 1) {
    result.innerHTML = `🏆 computer chose rock you won 🏆`;
  } else if (randomNumber === 2) {
    result.innerHTML = `its a draw try again`;
  } else {
    result.innerHTML = `❌ computer chose scissor unfurtunately you lost game ❌`;
  }
  modal.classList.remove("modal-js");
});
btnScissor.addEventListener("click", () => {
  if (randomNumber === 1) {
    result.innerHTML = `❌ computer chose rock unfurtunately you lost game ❌`;
  } else if (randomNumber === 2) {
    result.innerHTML = `🏆 computer chose Paper you won 🏆`;
  } else {
    result.innerHTML = `its a draw try again`;
  }
  modal.classList.remove("modal-js");
});

btnX.addEventListener("click", () => {
  modal.classList.add("modal-js");
  randomNumber = Math.trunc(Math.random() * 3) + 1;
  console.log(randomNumber);
});
