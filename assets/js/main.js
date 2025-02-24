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

// Whatsapp
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?65970';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#170c3d",
        "ctaText": "",
        "borderRadius": "25",
        "marginLeft": "20",
        "marginBottom": "20",
        "marginRight": "0",
        "position": "left"
    },
    "brandSetting": {
        "brandName": "Finoscale",
        "brandSubTitle": "ransforming financial decision-making",
        "brandImg": "assets/images/logo-icons/favicons.png",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, I have a question about Finoscale Solutions?",
        "backgroundColor": "#170c3d",
        "ctaText": "Start Chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "918147659205"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
