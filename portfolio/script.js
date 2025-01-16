var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("carousel-item");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    
}
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("carousel-item");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3800); // Change image every 2 seconds
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
});


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let t = 0;
    const w = canvas.width = canvas.height = 1000;
    let mouseX = w / 2, mouseY = w / 2;

    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });

    const setup = () => {
        ctx.rectMode = 'center';
        ctx.colorMode = 'HSB';
    }

    const draw = () => {
        t += 0.05;
        const MX = mouseX - w / 8;
        const MY = mouseY - w / 2;

        ctx.clearRect(0, 0, w, w);
        for (let i = 4000; i--;) {
            const X = Math.random() * w;
            const Y = Math.random() * w;
            const x = map(X - MX, 0, w, -4, 2);
            const y = map(Y - MY, 0, w, -4, 4);
            const D = Math.sin(x * x + y * y) - Math.sin(4 * Math.sin(x) * y + t);

            const fillStyle = `hsl(${(D % 1) * 999}, 40%, ${D > -0.01 ? 50 : 0}%)`;
            ctx.fillStyle = fillStyle;

            ctx.beginPath();
            ctx.rect(X, Y, 40, 8);
            ctx.fill();
        }

        requestAnimationFrame(draw);
    }

    const map = (value, start1, stop1, start2, stop2) => {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }

    setup();
    draw();
});
let myVideo = document.getElementById("starfish");//定義影片檔
let playButton = document.getElementById("play-button");//定義播放按鈕
let pauseButton = document.getElementById("pause-button");//定義暫停按鈕

function playVideo() {
    myVideo.play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
}

function pauseVideo() {
    myVideo.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
}