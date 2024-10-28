const words = ["Software Developer", "Web Developer", "App Developer", "Tester"];
let currentWordIndex = 0;
let isDeleting = false;
let currentText = "";
let speed = 200; // Tốc độ gõ

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (isDeleting) {
        currentText = words[currentWordIndex].substring(0, currentText.length - 1);
    } else {
        currentText = words[currentWordIndex].substring(0, currentText.length + 1);
    }

    typingElement.innerHTML = currentText;

    if (!isDeleting && currentText === words[currentWordIndex]) {
        speed = 2000; // Tạm dừng khi hoàn thành từ
        isDeleting = true;
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        speed = 200; // Tốc độ gõ lại khi bắt đầu từ mới
    } else {
        speed = isDeleting ? 100 : 100; // Tốc độ xóa nhanh hơn
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// JavaScript để toggle class "active" cho navbar
document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});
