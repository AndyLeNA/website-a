var navButton = document.querySelectorAll("li");
const navBar = document.querySelector(".main-header-right ul");


for(var i = 0; i <= navButton.length - 1; i++){
  navButton[i].addEventListener("click", function(){
    this.textContent = "idiot";
  })
}

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 600px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    navBar.style.display = 'flex';// window width is at least 600px
    navBar.classList.remove('fade-in-left');
  } else {
    navBar.style.display = 'none';// window width is less than 600px
  }
}