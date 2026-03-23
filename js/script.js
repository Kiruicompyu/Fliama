



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