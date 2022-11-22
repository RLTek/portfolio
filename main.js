const content = document.getElementById('content-section');
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const aboutLink = document.getElementById('about-link');
const portfolioLink = document.getElementById('portfolio-link');
const contactLink = document.getElementById('contact-link');
const aboutLink1 = document.getElementById('about-link1');
const aboutLink2 = document.getElementById('about-link2');

//Sets initial view for about section
portfolio.hidden = true;
contact.hidden = true;

//changes content section to about
aboutLink.onclick = function() {
    about.hidden = false;
    portfolio.hidden = true;
    contact.hidden = true;
}

//changes content section to portfolio
portfolioLink.onclick = function () {
    about.hidden = true;
    portfolio.hidden = false;
    contact.hidden = true;
}

//changes content section to contact
contactLink.onclick = function () {
    about.hidden = true;
    portfolio.hidden = true;
    contact.hidden = false;
}

//changes content section to portfolio when link is clicked in about section
aboutLink1.onclick = function () {
    about.hidden = true;
    portfolio.hidden = false;
    contact.hidden = true;
}

//changes content section to contact when link is clicked in about section
aboutLink2.onclick = function () {
    about.hidden = true;
    portfolio.hidden = true;
    contact.hidden = false;
}