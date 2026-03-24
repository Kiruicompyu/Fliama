
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button');
    btn.textContent = "Sending...";
    
    

    setTimeout(() => {
        btn.textContent = "Message Sent ✅";
        btn.style.background = "#22c55e";
    }, 1500);

});