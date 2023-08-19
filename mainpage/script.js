const content = "Euphoria";
const text = document.querySelector("#title ");

const start = document.getElementById("start");
const explain = document.getElementById("watch");
const mouse = document.getElementById("explain");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 400);

start.addEventListener("mouseenter", () => {
  start.style.color = "black";
});

start.addEventListener("mouseleave", () => {
  start.style.color = "white";
});

mouse.addEventListener("mouseenter", () => {
  explain.style.color = "black";
});

mouse.addEventListener("mouseleave", () => {
  explain.style.color = "white";
});
