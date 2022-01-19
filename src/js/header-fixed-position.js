// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  headerFix();
};

// Get the header
const header = document.getElementById("header-fix");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "header-fixed" when you leave the scroll position
function headerFix() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
}
