const appLightBlue = 'rgb(6, 104, 189)';
const appDarkBlue = 'rgb(21, 6, 189)';
const appGreen = 'rgb(41, 183, 41)';

const navbar = document.querySelector('.render-nav');

fetch('../view/navbar.html')
.then(response => {
    return response.text()
})
.then(html => {
    navbar.innerHTML = html;
})
.catch(err => {
    console.error(err);
});

const footer = document.querySelector('.render-footer');
footer.innerHTML = `<span>&spades; Tasheem's ePortfolio &trade; &spades;</span>`
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.backgroundColor = appGreen;
footer.style.width = '100vw';
footer.style.marginTop = '50px';
