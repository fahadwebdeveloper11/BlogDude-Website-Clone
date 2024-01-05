var menu = document.getElementById("menu-line");
var menu3 = document.getElementById('mbl-menu');
var cloose = document.getElementById("close-line");
var heroo = document.getElementById("Hero");
menu.addEventListener("click", function () {
    // heroo.style.position="relative";
    // heroo.style.top="15%";
    heroo.style.transform="translateY(20%)";
    menu.style.display = "none";
    menu3.style.top = "120%";
    cloose.style.visibility = "visible";
    
    

    // menu.style.opacity=0;

});
cloose.addEventListener("click", function () {
    heroo.style.transform="translateY(0)";
    cloose.style.visibility = "hidden";
    menu.style.visibility = "visible";
    menu3.style.top = '-1000%';
    menu.style.display = "contents";
    // heroo.style.top="";
    // menu3.style.color="red"
    console.log("Clicked")
})
const scrollToTopButton = document.getElementById('scrollToTopBtn');

function updateScrollButtonVisibility() {
  if (window.innerWidth <= 600 && window.scrollY > 300) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Initial check on page load
updateScrollButtonVisibility();

// Show/hide the button when user scrolls or resizes
window.addEventListener('scroll', updateScrollButtonVisibility);
window.addEventListener('resize', updateScrollButtonVisibility);

// Scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

