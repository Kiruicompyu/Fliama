



// applying copyright date

const leftFooter = document.getElementById("left-footer");
const copyrightYear = new Date().getFullYear();

leftFooter.innerHTML = `
    <p> &copy; ${copyrightYear} All rights reserved. </p>
`

// decide what video to show on the home page background depending on the time of the day
// const video = document.getElementById("bg-video");
// const source = document.getElementById("video-source");

// const hour = new Date().getHours();

// if (hour >= 6 && hour < 18) {
//     source.src = "../assets/videos/day-vid.mp4";
// } else {
//     source.src = "../assets/videos/night-vid.mp4";
// }

// video.load();

// function setBackgroundVideo() {

//     const hour = new Date().getHours();
//     const videoSource = document.getElementById("video-source");
//     const video = document.getElementById("bg-video");

//     const videoFile = (hour >= 6 && hour < 18)
//         ? "../assets/videos/day-vid.mp4"
//         : "../assets/videos/night-vid.mp4";

//     videoSource.src = videoFile;
//     video.load();
// }

// setBackgroundVideo();




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