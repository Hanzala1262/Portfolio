function goAbout() {
    window.location.href = "about.html";
}

function goHome() {
    window.location.href = "index.html";
}
window.onload = function() {
    document.body.style.opacity = "1";
}
const cards = document.querySelectorAll(".tilt");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let width = card.offsetWidth;
        let height = card.offsetHeight;

        let xVal = e.layerX;
        let yVal = e.layerY;

        let xRotation = 20 * ((yVal - height / 2) / height);
        let yRotation = -20 * ((xVal - width / 2) / width);

        card.style.transform =
            "perspective(500px) scale(1.05) rotateX(" +
            xRotation +
            "deg) rotateY(" +
            yRotation +
            "deg)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform =
            "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
});


function toggleMenu() {
    var nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

var text = ["DevOps Engineer", "Cloud Specialist", "Automation Expert", "AI/ML Enthusiast"];
var count = 0;
var index = 0;
var currentText = "";
var letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 120);
    }

})();



window.addEventListener("scroll", function() {

    var sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        var pos = sec.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });

});




window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};






