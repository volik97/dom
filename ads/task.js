const rotatorList = Array.from(document.querySelectorAll("span.rotator__case"));
const rotator = document.querySelector(".rotator");
let rotatorIndex = 0;

function rotatorCase() {
  for (i = 0; i < rotatorList.length; i++) {
    rotatorList[i].classList.remove("rotator__case_active");
  }

  let color = rotatorList[rotatorIndex].getAttribute("data-color");
  rotatorList[rotatorIndex].setAttribute("style", `color: ${color}`);
  //Добавь settimeout для speed!
  rotatorList[rotatorIndex].classList.add("rotator__case_active");
  ++rotatorIndex;
  if (rotatorIndex + 1 == rotatorList.length) {
    i, (rotatorIndex = 0);
  }
  
}

rotatorCase() 
setInterval(rotatorCase, 1000);
