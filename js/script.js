



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
        videoSrc = "../assets/videos/Day-vid.mp4";
    } else {
        videoSrc = "../assets/videos/Night-Vid.mp4";
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
});

// feeding the dev team section

const devs = [
    {
        name: "Techkirui",
        role: "Admin",
        stack: "HTML, CSS, JavaScript",
        image: "https://i.pravatar.cc/150?img=1",
        github: "https://github.com/Kiruicompyu"
    },
    {
        name: "Engineer Feloo",
        role: "Backend Developer",
        stack: "Node.js, Express",
        image: "https://i.pravatar.cc/150?img=3",
        profile: "../assets/images/feloo.jpeg",
        github: "https://github.com/kipngetich8337"
    },
    {
        name: "Mercy Wanjiku",
        role: "UI/UX Designer",
        stack: "Figma, CSS",
        image: "https://i.pravatar.cc/150?img=2",
        github: "#"
    },
    {
        name: "Mercy Wanjiku",
        role: "Frontend Developer",
        stack: "Figma, CSS",
        image: "https://i.pravatar.cc/150?img=3",
        github: "#"
    },
    {
        name: "Mercy Wanjiku",
        role: "Quality Assurancce",
        stack: "Figma, CSS",
        image: "https://i.pravatar.cc/150?img=4",
        github: "#"
    },
    {
        name: "Mercy Wanjiku",
        role: "UI/UX Designer",
        stack: "Figma, CSS",
        image: "https://i.pravatar.cc/150?img=5",
        github: "#"
    }
];


const container = document.getElementById("dev-team");

devs.forEach((dev) => {
    const card = document.createElement("div");

    card.classList.add("dev-card");

    card.innerHTML = `
  
    <img src=" ${dev.profile || dev.image}" class="dev-img">

    <h3 class="dev-name">
      ${dev.name}
    </h3>

    <p class="dev-role">
      ${dev.role}
    </p>

    <p class="dev-stack">
      ${dev.stack}
    </p>

    <a href="${dev.github}" class="dev-btn">
      View Profile
    </a>

  `;
    
    container.appendChild(card);

    card.addEventListener("click", () => {
    window.open(dev.github, "_blank");
    });
});

