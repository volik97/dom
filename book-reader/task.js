let bookControl = document.querySelectorAll("a.font-size");
let bookContent = document.querySelector(".book");

function checkActive() {
  for (item of bookControl) {
    if (item.classList.contains("font-size_active")) {
      item.classList.remove("font-size_active");
    }
  }
}

function changeSize(item) {
  if (item.hasAttribute("data-size") === false) {
    bookContent.classList.remove("book_fs-big", "book_fs-small");
  } else {
    bookContent.classList.remove("book_fs-big", "book_fs-small");
    bookContent.classList.add(`book_fs-${item.getAttribute("data-size")}`);
  }
}

bookControl.forEach((element) => {
  element.addEventListener("click", (event) => {
    checkActive();
    event.preventDefault();
    element.classList.add("font-size_active");
    changeSize(element);
    return false;
  });
});
