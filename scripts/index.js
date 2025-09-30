const today = new Date();
const btn = document.querySelector(".button");
const modal = document.querySelector(".popup-modal");
const close = document.querySelector(".popup-modal__close-btn");
const okBtn = document.querySelector(".okay-button");

// FMM/DD/YYYY
const dateEl = document.querySelector(".date");

const formatted = today.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long", // change to "2-digit" for numeric month
  day: "numeric",
});
if (dateEl) dateEl.textContent = formatted;

//time
const timeEl = document.getElementById("time");

function showTime() {
  if (!timeEl) return; //guard
  timeEl.textContent = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}
showTime();
setInterval(showTime, 60_000);

//body
const body = document.querySelector(".body");

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = color;
}

//popup

let clicks = 0;
let shown = false;

btn.addEventListener("click", () => {
  if (shown) return;
  clicks += 1;
  if (clicks >= 20) {
    modal.classList.add("is-open");
    shown = true;
  }
});

close.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

okBtn.addEventListener("click", () => {
  // <-- add this
  modal.classList.remove("is-open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("is-open");
});
