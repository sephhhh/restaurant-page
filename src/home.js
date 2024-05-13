import Pasta from './images/pasta.jpeg';
import Carbonara from './images/carbonara.jpg';
import Osso_Buco from './images/osso-buco.jpg';
import Tiramisu from './images/tiramisu.jpg';
import Chicken_Alfredo from './images/chicken-alfredo.jpg';
import Lasagna from './images/lasagna.jpg';
import Pizza from './images/pizza.jpg';

export function home() {
    const home = document.createElement('div');

    home.className = 'home';

    header(home);
    dishes(home);
    return home;
}

function header(content) {
    const quote = document.createElement('h1');
    const author = document.createElement('h1');
    const pastaImg = new Image();

    quote.className = 'quote theQuote';
    author.className = 'quote theAuthor';
    pastaImg.className = 'homePasta';

    pastaImg.src = Pasta;

    quote.textContent = '“    A recipe has no soul. You, as the cook, must bring soul to the recipe    „';
    author.textContent = '- Thomas Keller';

    content.appendChild(pastaImg);
    content.appendChild(quote);
    content.appendChild(author);
}

function dishes(content) {
    const dishContainer = document.createElement('div');

    const carbonara = new Image();
    const osso_buco = new Image();
    const tiramisu = new Image();
    const chicken_alfredo = new Image();
    const lasagna = new Image();
    const pizza = new Image();

    dishContainer.className = 'dishes';
    carbonara.src = Carbonara;
    osso_buco.src = Osso_Buco;
    tiramisu.src = Tiramisu;
    chicken_alfredo.src = Chicken_Alfredo;
    lasagna.src = Lasagna;
    pizza.src = Pizza;

    const dishes = [carbonara, osso_buco, tiramisu, chicken_alfredo, lasagna, pizza];

    for (const dish of dishes) {
        dishContainer.appendChild(newDish(dish));
        content.appendChild(dishContainer);
    }
}

function newDish(img) {
    const carbonaraDes = document.createElement('div');
    const ossoDes = document.createElement('div');
    const tiramisuDes = document.createElement('div');
    const chickenDes = document.createElement('div');
    const lasagnaDes = document.createElement('div');
    const pizzaDes = document.createElement('div');

    switch (img.src) {
        case Carbonara:
            const dish1 = document.createElement('div');
            dish1.className = 'dish one';
            dish1.appendChild(img);

            carbonaraDes.textContent = 'Carbonara';
            dish1.appendChild(carbonaraDes);
            return dish1;
        case Osso_Buco:
            const dish2 = document.createElement('div');
            dish2.className = 'dish two';
            dish2.appendChild(img);

            ossoDes.textContent = 'Osso Buco';
            dish2.appendChild(ossoDes);
            return dish2;
        case Tiramisu:
            const dish3 = document.createElement('div');
            dish3.className = 'dish three';
            dish3.appendChild(img);

            tiramisuDes.textContent = 'Tiramisu';
            dish3.appendChild(tiramisuDes);
            return dish3;
        case Chicken_Alfredo:
            const dish4 = document.createElement('div');
            dish4.className = 'dish four';
            dish4.appendChild(img);

            chickenDes.textContent = 'Chicken Alfredo';
            dish4.appendChild(chickenDes);
            return dish4;
        case Lasagna:
            const dish5 = document.createElement('div');
            dish5.className = 'dish five';
            dish5.appendChild(img);

            lasagnaDes.textContent = 'Lasagna';
            dish5.appendChild(lasagnaDes);
            return dish5;
        case Pizza:
            const dish6 = document.createElement('div');
            dish6.className = 'dish six';
            dish6.appendChild(img);

            pizzaDes.textContent = 'Pizza';
            dish6.appendChild(pizzaDes);
            return dish6;
    }
}