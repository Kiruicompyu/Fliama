



// applying copyright date

const leftFooter = document.getElementById("left-footer");
const copyrightYear = new Date().getFullYear();

leftFooter.innerHTML = `
    <p> &copy; ${copyrightYear} All rights reserved. </p>
`