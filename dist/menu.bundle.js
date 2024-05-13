"use strict";
(self["webpackChunkpackage_json"] = self["webpackChunkpackage_json"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
function menu() {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51JztcblxuICAgIGNvbnN0IGNvdXJzZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb3Vyc2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY291cnNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY291cnNlMS5jbGFzc05hbWUgPSAnY291cnNlTmFtZSc7XG4gICAgY291cnNlMi5jbGFzc05hbWUgPSAnY291cnNlTmFtZSc7XG4gICAgY291cnNlMy5jbGFzc05hbWUgPSAnY291cnNlTmFtZSc7XG5cbiAgICBjb3Vyc2UxLnRleHRDb250ZW50ID0gJ1N0YXJ0ZXJzJ1xuICAgIGNvdXJzZTIudGV4dENvbnRlbnQgPSAnRW50csOpZSdcbiAgICBjb3Vyc2UzLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJ1xuXG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3Vyc2UxKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0ZXIoKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3Vyc2UyKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJlZSgpKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvdXJzZTMpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydCgpKTtcblxuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb3Vyc2VUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBkaXNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpc2hlcy5jbGFzc05hbWUgPSAnbWVudS1kaXNoZXMnO1xuICAgIHByaWNlcy5jbGFzc05hbWUgPSAnbWVudS1wcmljZXMnO1xuXG4gICAgY29uc3QgZGlzaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXNoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpc2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGlzaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGlzaDEuY2xhc3NOYW1lID0gJ2Rpc2gnO1xuICAgIGRpc2gyLmNsYXNzTmFtZSA9ICdkaXNoJztcbiAgICBkaXNoMy5jbGFzc05hbWUgPSAnZGlzaCc7XG4gICAgZGlzaDQuY2xhc3NOYW1lID0gJ2Rpc2gnO1xuXG4gICAgcHJpY2UxLmNsYXNzTmFtZSA9ICdwcmljZSc7XG4gICAgcHJpY2UyLmNsYXNzTmFtZSA9ICdwcmljZSc7XG4gICAgcHJpY2UzLmNsYXNzTmFtZSA9ICdwcmljZSc7XG4gICAgcHJpY2U0LmNsYXNzTmFtZSA9ICdwcmljZSc7XG5cbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQoZGlzaDEpO1xuICAgIGRpc2hlcy5hcHBlbmRDaGlsZChkaXNoMik7XG4gICAgZGlzaGVzLmFwcGVuZENoaWxkKGRpc2gzKTtcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQoZGlzaDQpO1xuXG4gICAgcHJpY2VzLmFwcGVuZENoaWxkKHByaWNlMSk7XG4gICAgcHJpY2VzLmFwcGVuZENoaWxkKHByaWNlMik7XG4gICAgcHJpY2VzLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gICAgcHJpY2VzLmFwcGVuZENoaWxkKHByaWNlNCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNoZXMsXG4gICAgICAgIHByaWNlcyxcbiAgICAgICAgZGlzaDEsXG4gICAgICAgIGRpc2gyLFxuICAgICAgICBkaXNoMyxcbiAgICAgICAgZGlzaDQsXG4gICAgICAgIHByaWNlMSxcbiAgICAgICAgcHJpY2UyLFxuICAgICAgICBwcmljZTMsXG4gICAgICAgIHByaWNlNFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHN0YXJ0ZXIoKSB7XG4gICAgY29uc3Qgc3RhcnRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGFydGVyVGVtcGxhdGUgPSBjb3Vyc2VUZW1wbGF0ZSgpO1xuXG4gICAgc3RhcnRlcnMuY2xhc3NOYW1lID0gJ2NvdXJzZSBzdGFydGVycyc7XG5cbiAgICBzdGFydGVyVGVtcGxhdGUuZGlzaDEudGV4dENvbnRlbnQgPSAnRm9jYWNjaWEnO1xuICAgIHN0YXJ0ZXJUZW1wbGF0ZS5kaXNoMi50ZXh0Q29udGVudCA9ICdCdXJyYXRhJztcbiAgICBzdGFydGVyVGVtcGxhdGUuZGlzaDMudGV4dENvbnRlbnQgPSAnR29sZGVuIEJlYXRzJztcbiAgICBzdGFydGVyVGVtcGxhdGUuZGlzaDQudGV4dENvbnRlbnQgPSAnT2N0b3B1cyc7XG5cblxuICAgIHN0YXJ0ZXJUZW1wbGF0ZS5wcmljZTEudGV4dENvbnRlbnQgPSAnOCc7XG4gICAgc3RhcnRlclRlbXBsYXRlLnByaWNlMi50ZXh0Q29udGVudCA9ICcxMic7XG4gICAgc3RhcnRlclRlbXBsYXRlLnByaWNlMy50ZXh0Q29udGVudCA9ICcxNCc7XG4gICAgc3RhcnRlclRlbXBsYXRlLnByaWNlNC50ZXh0Q29udGVudCA9ICcxOCc7XG5cbiAgICBzdGFydGVycy5hcHBlbmRDaGlsZChzdGFydGVyVGVtcGxhdGUuZGlzaGVzKTtcbiAgICBzdGFydGVycy5hcHBlbmRDaGlsZChzdGFydGVyVGVtcGxhdGUucHJpY2VzKTtcblxuICAgIHJldHVybiBzdGFydGVycztcbn1cblxuZnVuY3Rpb24gZW50cmVlKCkge1xuICAgIGNvbnN0IGVudHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbnRyZWVUZW1wbGF0ZSA9IGNvdXJzZVRlbXBsYXRlKCk7XG5cbiAgICBlbnRyZWVzLmNsYXNzTmFtZSA9ICdjb3Vyc2UgZW50cmVlcyc7XG5cbiAgICBlbnRyZWVUZW1wbGF0ZS5kaXNoMS50ZXh0Q29udGVudCA9ICdSYXZpb2xpJztcbiAgICBlbnRyZWVUZW1wbGF0ZS5kaXNoMi50ZXh0Q29udGVudCA9ICdBZ25vbG90dGknO1xuICAgIGVudHJlZVRlbXBsYXRlLmRpc2gzLnRleHRDb250ZW50ID0gJ3RvcnRlbGxpbmknO1xuICAgIGVudHJlZVRlbXBsYXRlLmRpc2g0LnRleHRDb250ZW50ID0gJ1NwYWdoZXR0aSAmIENyYWInO1xuXG4gICAgZW50cmVlVGVtcGxhdGUucHJpY2UxLnRleHRDb250ZW50ID0gJzIxJztcbiAgICBlbnRyZWVUZW1wbGF0ZS5wcmljZTIudGV4dENvbnRlbnQgPSAnMTgnO1xuICAgIGVudHJlZVRlbXBsYXRlLnByaWNlMy50ZXh0Q29udGVudCA9ICcxNic7XG4gICAgZW50cmVlVGVtcGxhdGUucHJpY2U0LnRleHRDb250ZW50ID0gJzE5JztcblxuICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZW50cmVlVGVtcGxhdGUuZGlzaGVzKTtcbiAgICBlbnRyZWVzLmFwcGVuZENoaWxkKGVudHJlZVRlbXBsYXRlLnByaWNlcyk7XG5cbiAgICByZXR1cm4gZW50cmVlcztcbn1cblxuZnVuY3Rpb24gZGVzc2VydCgpIHtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc3NlcnRUZW1wbGF0ZSA9IGNvdXJzZVRlbXBsYXRlKCk7XG5cbiAgICBkZXNzZXJ0cy5jbGFzc05hbWUgPSAnY291cnNlIGRlc3NlcnRzJztcblxuICAgIGRlc3NlcnRUZW1wbGF0ZS5kaXNoMS50ZXh0Q29udGVudCA9ICdHZWxhdG8nO1xuICAgIGRlc3NlcnRUZW1wbGF0ZS5kaXNoMi50ZXh0Q29udGVudCA9ICdHcmFuIFBhbm5hIENvdHRhJztcbiAgICBkZXNzZXJ0VGVtcGxhdGUuZGlzaDMudGV4dENvbnRlbnQgPSAnQXJhbmNpbmknO1xuICAgIGRlc3NlcnRUZW1wbGF0ZS5kaXNoNC50ZXh0Q29udGVudCA9ICdQZXJhJztcblxuICAgIGRlc3NlcnRUZW1wbGF0ZS5wcmljZTEudGV4dENvbnRlbnQgPSAnNyc7XG4gICAgZGVzc2VydFRlbXBsYXRlLnByaWNlMi50ZXh0Q29udGVudCA9ICc5JztcbiAgICBkZXNzZXJ0VGVtcGxhdGUucHJpY2UzLnRleHRDb250ZW50ID0gJzEyJztcbiAgICBkZXNzZXJ0VGVtcGxhdGUucHJpY2U0LnRleHRDb250ZW50ID0gJzE0JztcblxuICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRUZW1wbGF0ZS5kaXNoZXMpO1xuICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRUZW1wbGF0ZS5wcmljZXMpO1xuXG4gICAgcmV0dXJuIGRlc3NlcnRzO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==