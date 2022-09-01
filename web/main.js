const hamburgerMenu = document.getElementById("div1");
const xMenu = document.getElementById("div2");
const main = document.getElementById("main");

hamburgerMenu.addEventListener("click", () => {
  xMenu.classList.toggle("active2")
  main.classList.add("active")
  if(main.classList.contains("active")) {
    xMenu.style.opacity = 1
  } 
})

xMenu.addEventListener("click", () => {
  xMenu.style.opacity = 0
  main.classList.remove("active")
  xMenu.classList.remove("active2")
})