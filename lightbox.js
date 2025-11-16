// lightbox.js
const images = document.querySelectorAll('.portfolio-image');

images.forEach(img => {
    img.addEventListener('click', function() {
        let modal = document.createElement('div');
        modal.classList.add('w3-modal', 'w3-display-container');
        modal.innerHTML = `
            <span onclick="this.parentElement.style.display='none'" class="w3-button w3-display-topright">&times;</span>
            <img class="w3-image" src="${this.src}" style="margin:auto;max-width:90%;max-height:90%;">
        `;
        document.body.appendChild(modal);
        modal.style.display = 'block';
    });
});
