const content = document.getElementById('content-section');
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const aboutLink = document.getElementById('about-link');
const portfolioLink = document.getElementById('portfolio-link');
const contactLink = document.getElementById('contact-link');

portfolio.hidden = true;
contact.hidden = true;

aboutLink.onclick = function() {
    about.hidden = false;
    portfolio.hidden = true;
    contact.hidden = true;
}

portfolioLink.onclick = function () {
    about.hidden = true;
    portfolio.hidden = false;
    contact.hidden = true;
}

contactLink.onclick = function () {
    about.hidden = true;
    portfolio.hidden = true;
    contact.hidden = false;
}