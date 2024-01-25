/*FILTER*/
const filter = document.querySelector(".filter");
let click;

function openFilter() {
  if (click) {
    filter.style.display = "none";
    click = false;
  } else if (!click) {
    filter.style.display = "block";
    click = true;
  }
}