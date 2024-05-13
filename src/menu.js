export function menu() {
    const menuContainer = document.createElement('div');

    menuContainer.className = 'menu';

    const course1 = document.createElement('div');
    const course2 = document.createElement('div');
    const course3 = document.createElement('div');

    course1.className = 'courseName';
    course2.className = 'courseName';
    course3.className = 'courseName';

    course1.textContent = 'Starters'
    course2.textContent = 'Entrée'
    course3.textContent = 'Desserts'

    
    menuContainer.appendChild(course1);
    menuContainer.appendChild(starter());
    menuContainer.appendChild(course2);
    menuContainer.appendChild(entree());
    menuContainer.appendChild(course3);
    menuContainer.appendChild(dessert());

    return menuContainer;
}

function courseTemplate() {
    const dishes = document.createElement('div');
    const prices = document.createElement('div');

    dishes.className = 'menu-dishes';
    prices.className = 'menu-prices';

    const dish1 = document.createElement('div');
    const dish2 = document.createElement('div');
    const dish3 = document.createElement('div');
    const dish4 = document.createElement('div');

    const price1 = document.createElement('div');
    const price2 = document.createElement('div');
    const price3 = document.createElement('div');
    const price4 = document.createElement('div');

    dish1.className = 'dish';
    dish2.className = 'dish';
    dish3.className = 'dish';
    dish4.className = 'dish';

    price1.className = 'price';
    price2.className = 'price';
    price3.className = 'price';
    price4.className = 'price';

    dishes.appendChild(dish1);
    dishes.appendChild(dish2);
    dishes.appendChild(dish3);
    dishes.appendChild(dish4);

    prices.appendChild(price1);
    prices.appendChild(price2);
    prices.appendChild(price3);
    prices.appendChild(price4);

    return {
        dishes,
        prices,
        dish1,
        dish2,
        dish3,
        dish4,
        price1,
        price2,
        price3,
        price4
    };
}

function starter() {
    const starters = document.createElement('div');
    const starterTemplate = courseTemplate();

    starters.className = 'course starters';

    starterTemplate.dish1.textContent = 'Focaccia';
    starterTemplate.dish2.textContent = 'Burrata';
    starterTemplate.dish3.textContent = 'Golden Beats';
    starterTemplate.dish4.textContent = 'Octopus';


    starterTemplate.price1.textContent = '8';
    starterTemplate.price2.textContent = '12';
    starterTemplate.price3.textContent = '14';
    starterTemplate.price4.textContent = '18';

    starters.appendChild(starterTemplate.dishes);
    starters.appendChild(starterTemplate.prices);

    return starters;
}

function entree() {
    const entrees = document.createElement('div');
    const entreeTemplate = courseTemplate();

    entrees.className = 'course entrees';

    entreeTemplate.dish1.textContent = 'Ravioli';
    entreeTemplate.dish2.textContent = 'Agnolotti';
    entreeTemplate.dish3.textContent = 'tortellini';
    entreeTemplate.dish4.textContent = 'Spaghetti & Crab';

    entreeTemplate.price1.textContent = '21';
    entreeTemplate.price2.textContent = '18';
    entreeTemplate.price3.textContent = '16';
    entreeTemplate.price4.textContent = '19';

    entrees.appendChild(entreeTemplate.dishes);
    entrees.appendChild(entreeTemplate.prices);

    return entrees;
}

function dessert() {
    const desserts = document.createElement('div');
    const dessertTemplate = courseTemplate();

    desserts.className = 'course desserts';

    dessertTemplate.dish1.textContent = 'Gelato';
    dessertTemplate.dish2.textContent = 'Gran Panna Cotta';
    dessertTemplate.dish3.textContent = 'Arancini';
    dessertTemplate.dish4.textContent = 'Pera';

    dessertTemplate.price1.textContent = '7';
    dessertTemplate.price2.textContent = '9';
    dessertTemplate.price3.textContent = '12';
    dessertTemplate.price4.textContent = '14';

    desserts.appendChild(dessertTemplate.dishes);
    desserts.appendChild(dessertTemplate.prices);

    return desserts;
}