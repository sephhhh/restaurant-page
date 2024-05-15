import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import './styles.css';

const initiate = function initiate() {
    const content = document.querySelector('#content')
    const homeBtn = document.querySelector('button#home');
    const menuBtn = document.querySelector('button#menu');
    const contactBtn = document.querySelector('button#contact');

    homeBtn.addEventListener('click', () => {
        while (content.firstChild) {
            content.firstChild.remove();
        };
        content.appendChild(home());
    });
    menuBtn.addEventListener('click', () => {
        while (content.firstChild) {
            content.firstChild.remove();
        };
        content.appendChild(menu());

    });
    contactBtn.addEventListener('click', () => {
        while (content.firstChild) {
            content.firstChild.remove();
        };
        content.appendChild(contact());
    });

    content.appendChild(home());
}();