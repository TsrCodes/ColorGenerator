const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomColor = "#" + Math.floor(Math.random() * 12345678).toString(16);
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  document.querySelector("a").style.color = randomColor;
  document.querySelector("h4").style.color = randomColor;
});
