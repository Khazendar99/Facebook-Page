likeBtns = document.querySelectorAll(".fa-thumbs-up");
likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});
