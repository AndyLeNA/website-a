var navButton = document.querySelectorAll("a");

for(var i = 0; i <= navButton.length; i++){
  navButton[i].addEventListener("click", function(){
    console.log(navButton[i]);
  })
}


