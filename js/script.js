



// applying copyright date

const leftFooter = document.getElementById("left-footer");
const copyrightYear = new Date().getFullYear();

leftFooter.innerHTML = `
    <p> &copy; ${copyrightYear} All rights reserved. </p>
`



// Background video depending on the time of the day

document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("bg-video");
    const hour = new Date().getHours();

    let videoSrc;

    if (hour >= 6 && hour < 18) {
        videoSrc = "../assets/videos/day-vid.mp4";
    } else {
        videoSrc = "../assets/videos/night-vid.mp4";
    }

    video.src = videoSrc;

});




document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        const menu = link.closest('details');
        setTimeout(() => {
            menu.removeAttribute('open');
        }, 150);
    });
});


const slider = document.querySelector('.slider');

slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});


const cards = document.querySelectorAll('.choreo');
const dots = document.querySelectorAll('.dots span');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {

        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        const card = cards[index];

        const scrollPosition =
            card.offsetLeft -
            slider.offsetWidth / 2 +
            card.offsetWidth / 2;

        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
});

const bookingBar = document.querySelector('.booking-bar');

bookingBar.addEventListener('click', () => {
    alert("This is just the UI...nothing to book yet!😊");
    // todo maybe add a popup for something like a login request...
});

