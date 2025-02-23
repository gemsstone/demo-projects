document.getElementById("searchIcon").addEventListener("click", function(event) {
    event.preventDefault();
    let searchInput = document.getElementById("searchInput");
    
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchInput.focus();
    } else {
        searchInput.style.display = "none";
    }

    // Stop event from bubbling to document
    event.stopPropagation();
});

// Hide search input when clicking outside
document.addEventListener("click", function(event) {
    let searchInput = document.getElementById("searchInput");
    let searchIcon = document.getElementById("searchIcon");

    if (searchInput.style.display === "block" && !searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
        searchInput.style.display = "none";
    }
});

// Go to top
let topBtn = document.getElementById("topBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}