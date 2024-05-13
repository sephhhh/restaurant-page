"use strict";
(self["webpackChunkpackage_json"] = self["webpackChunkpackage_json"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _images_pasta_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pasta.jpeg */ "./src/images/pasta.jpeg");
/* harmony import */ var _images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/carbonara.jpg */ "./src/images/carbonara.jpg");
/* harmony import */ var _images_osso_buco_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/osso-buco.jpg */ "./src/images/osso-buco.jpg");
/* harmony import */ var _images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/tiramisu.jpg */ "./src/images/tiramisu.jpg");
/* harmony import */ var _images_chicken_alfredo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/chicken-alfredo.jpg */ "./src/images/chicken-alfredo.jpg");
/* harmony import */ var _images_lasagna_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lasagna.jpg */ "./src/images/lasagna.jpg");
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pizza.jpg */ "./src/images/pizza.jpg");








function home() {
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

    pastaImg.src = _images_pasta_jpeg__WEBPACK_IMPORTED_MODULE_0__;

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
    carbonara.src = _images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__;
    osso_buco.src = _images_osso_buco_jpg__WEBPACK_IMPORTED_MODULE_2__;
    tiramisu.src = _images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_3__;
    chicken_alfredo.src = _images_chicken_alfredo_jpg__WEBPACK_IMPORTED_MODULE_4__;
    lasagna.src = _images_lasagna_jpg__WEBPACK_IMPORTED_MODULE_5__;
    pizza.src = _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__;

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
        case _images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__:
            const dish1 = document.createElement('div');
            dish1.className = 'dish one';
            dish1.appendChild(img);

            carbonaraDes.textContent = 'Carbonara';
            dish1.appendChild(carbonaraDes);
            return dish1;
        case _images_osso_buco_jpg__WEBPACK_IMPORTED_MODULE_2__:
            const dish2 = document.createElement('div');
            dish2.className = 'dish two';
            dish2.appendChild(img);

            ossoDes.textContent = 'Osso Buco';
            dish2.appendChild(ossoDes);
            return dish2;
        case _images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_3__:
            const dish3 = document.createElement('div');
            dish3.className = 'dish three';
            dish3.appendChild(img);

            tiramisuDes.textContent = 'Tiramisu';
            dish3.appendChild(tiramisuDes);
            return dish3;
        case _images_chicken_alfredo_jpg__WEBPACK_IMPORTED_MODULE_4__:
            const dish4 = document.createElement('div');
            dish4.className = 'dish four';
            dish4.appendChild(img);

            chickenDes.textContent = 'Chicken Alfredo';
            dish4.appendChild(chickenDes);
            return dish4;
        case _images_lasagna_jpg__WEBPACK_IMPORTED_MODULE_5__:
            const dish5 = document.createElement('div');
            dish5.className = 'dish five';
            dish5.appendChild(img);

            lasagnaDes.textContent = 'Lasagna';
            dish5.appendChild(lasagnaDes);
            return dish5;
        case _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__:
            const dish6 = document.createElement('div');
            dish6.className = 'dish six';
            dish6.appendChild(img);

            pizzaDes.textContent = 'Pizza';
            dish6.appendChild(pizzaDes);
            return dish6;
    }
}

/***/ }),

/***/ "./src/images/carbonara.jpg":
/*!**********************************!*\
  !*** ./src/images/carbonara.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60618b81444c4fb5911f.jpg";

/***/ }),

/***/ "./src/images/chicken-alfredo.jpg":
/*!****************************************!*\
  !*** ./src/images/chicken-alfredo.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8f4460fdbef5e3d5bd4.jpg";

/***/ }),

/***/ "./src/images/lasagna.jpg":
/*!********************************!*\
  !*** ./src/images/lasagna.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7aee06749bb980d2e7fa.jpg";

/***/ }),

/***/ "./src/images/osso-buco.jpg":
/*!**********************************!*\
  !*** ./src/images/osso-buco.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e5e75ed6cbf4794b07a.jpg";

/***/ }),

/***/ "./src/images/pasta.jpeg":
/*!*******************************!*\
  !*** ./src/images/pasta.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e6a29c09ef6e11cea42.jpeg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bf057dd022998a794f1.jpg";

/***/ }),

/***/ "./src/images/tiramisu.jpg":
/*!*********************************!*\
  !*** ./src/images/tiramisu.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64fef440a0d3ff0566f1.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTztBQUNBO0FBQ0Y7QUFDYztBQUNoQjtBQUNKOztBQUVoQztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsK0NBQUs7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0RBQVM7QUFDN0Isb0JBQW9CLGtEQUFTO0FBQzdCLG1CQUFtQixpREFBUTtBQUMzQiwwQkFBMEIsd0RBQWU7QUFDekMsa0JBQWtCLGdEQUFPO0FBQ3pCLGdCQUFnQiw4Q0FBSzs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0RBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0RBQVM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQWU7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOENBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFzdGEgZnJvbSAnLi9pbWFnZXMvcGFzdGEuanBlZyc7XG5pbXBvcnQgQ2FyYm9uYXJhIGZyb20gJy4vaW1hZ2VzL2NhcmJvbmFyYS5qcGcnO1xuaW1wb3J0IE9zc29fQnVjbyBmcm9tICcuL2ltYWdlcy9vc3NvLWJ1Y28uanBnJztcbmltcG9ydCBUaXJhbWlzdSBmcm9tICcuL2ltYWdlcy90aXJhbWlzdS5qcGcnO1xuaW1wb3J0IENoaWNrZW5fQWxmcmVkbyBmcm9tICcuL2ltYWdlcy9jaGlja2VuLWFsZnJlZG8uanBnJztcbmltcG9ydCBMYXNhZ25hIGZyb20gJy4vaW1hZ2VzL2xhc2FnbmEuanBnJztcbmltcG9ydCBQaXp6YSBmcm9tICcuL2ltYWdlcy9waXp6YS5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBob21lLmNsYXNzTmFtZSA9ICdob21lJztcblxuICAgIGhlYWRlcihob21lKTtcbiAgICBkaXNoZXMoaG9tZSk7XG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGhlYWRlcihjb250ZW50KSB7XG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcGFzdGFJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIHF1b3RlLmNsYXNzTmFtZSA9ICdxdW90ZSB0aGVRdW90ZSc7XG4gICAgYXV0aG9yLmNsYXNzTmFtZSA9ICdxdW90ZSB0aGVBdXRob3InO1xuICAgIHBhc3RhSW1nLmNsYXNzTmFtZSA9ICdob21lUGFzdGEnO1xuXG4gICAgcGFzdGFJbWcuc3JjID0gUGFzdGE7XG5cbiAgICBxdW90ZS50ZXh0Q29udGVudCA9ICfigJwgICAgQSByZWNpcGUgaGFzIG5vIHNvdWwuIFlvdSwgYXMgdGhlIGNvb2ssIG11c3QgYnJpbmcgc291bCB0byB0aGUgcmVjaXBlICAgIOKAnic7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gJy0gVGhvbWFzIEtlbGxlcic7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhc3RhSW1nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHF1b3RlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGF1dGhvcik7XG59XG5cbmZ1bmN0aW9uIGRpc2hlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY2FyYm9uYXJhID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3Qgb3Nzb19idWNvID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgdGlyYW1pc3UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBjaGlja2VuX2FsZnJlZG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBsYXNhZ25hID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgcGl6emEgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGRpc2hDb250YWluZXIuY2xhc3NOYW1lID0gJ2Rpc2hlcyc7XG4gICAgY2FyYm9uYXJhLnNyYyA9IENhcmJvbmFyYTtcbiAgICBvc3NvX2J1Y28uc3JjID0gT3Nzb19CdWNvO1xuICAgIHRpcmFtaXN1LnNyYyA9IFRpcmFtaXN1O1xuICAgIGNoaWNrZW5fYWxmcmVkby5zcmMgPSBDaGlja2VuX0FsZnJlZG87XG4gICAgbGFzYWduYS5zcmMgPSBMYXNhZ25hO1xuICAgIHBpenphLnNyYyA9IFBpenphO1xuXG4gICAgY29uc3QgZGlzaGVzID0gW2NhcmJvbmFyYSwgb3Nzb19idWNvLCB0aXJhbWlzdSwgY2hpY2tlbl9hbGZyZWRvLCBsYXNhZ25hLCBwaXp6YV07XG5cbiAgICBmb3IgKGNvbnN0IGRpc2ggb2YgZGlzaGVzKSB7XG4gICAgICAgIGRpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGlzaChkaXNoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzaENvbnRhaW5lcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdEaXNoKGltZykge1xuICAgIGNvbnN0IGNhcmJvbmFyYURlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG9zc29EZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXJhbWlzdURlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWNrZW5EZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYXNhZ25hRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGl6emFEZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHN3aXRjaCAoaW1nLnNyYykge1xuICAgICAgICBjYXNlIENhcmJvbmFyYTpcbiAgICAgICAgICAgIGNvbnN0IGRpc2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXNoMS5jbGFzc05hbWUgPSAnZGlzaCBvbmUnO1xuICAgICAgICAgICAgZGlzaDEuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAgICAgY2FyYm9uYXJhRGVzLnRleHRDb250ZW50ID0gJ0NhcmJvbmFyYSc7XG4gICAgICAgICAgICBkaXNoMS5hcHBlbmRDaGlsZChjYXJib25hcmFEZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc2gxO1xuICAgICAgICBjYXNlIE9zc29fQnVjbzpcbiAgICAgICAgICAgIGNvbnN0IGRpc2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXNoMi5jbGFzc05hbWUgPSAnZGlzaCB0d28nO1xuICAgICAgICAgICAgZGlzaDIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAgICAgb3Nzb0Rlcy50ZXh0Q29udGVudCA9ICdPc3NvIEJ1Y28nO1xuICAgICAgICAgICAgZGlzaDIuYXBwZW5kQ2hpbGQob3Nzb0Rlcyk7XG4gICAgICAgICAgICByZXR1cm4gZGlzaDI7XG4gICAgICAgIGNhc2UgVGlyYW1pc3U6XG4gICAgICAgICAgICBjb25zdCBkaXNoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGlzaDMuY2xhc3NOYW1lID0gJ2Rpc2ggdGhyZWUnO1xuICAgICAgICAgICAgZGlzaDMuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAgICAgdGlyYW1pc3VEZXMudGV4dENvbnRlbnQgPSAnVGlyYW1pc3UnO1xuICAgICAgICAgICAgZGlzaDMuYXBwZW5kQ2hpbGQodGlyYW1pc3VEZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc2gzO1xuICAgICAgICBjYXNlIENoaWNrZW5fQWxmcmVkbzpcbiAgICAgICAgICAgIGNvbnN0IGRpc2g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXNoNC5jbGFzc05hbWUgPSAnZGlzaCBmb3VyJztcbiAgICAgICAgICAgIGRpc2g0LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgICAgIGNoaWNrZW5EZXMudGV4dENvbnRlbnQgPSAnQ2hpY2tlbiBBbGZyZWRvJztcbiAgICAgICAgICAgIGRpc2g0LmFwcGVuZENoaWxkKGNoaWNrZW5EZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc2g0O1xuICAgICAgICBjYXNlIExhc2FnbmE6XG4gICAgICAgICAgICBjb25zdCBkaXNoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGlzaDUuY2xhc3NOYW1lID0gJ2Rpc2ggZml2ZSc7XG4gICAgICAgICAgICBkaXNoNS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgICAgICBsYXNhZ25hRGVzLnRleHRDb250ZW50ID0gJ0xhc2FnbmEnO1xuICAgICAgICAgICAgZGlzaDUuYXBwZW5kQ2hpbGQobGFzYWduYURlcyk7XG4gICAgICAgICAgICByZXR1cm4gZGlzaDU7XG4gICAgICAgIGNhc2UgUGl6emE6XG4gICAgICAgICAgICBjb25zdCBkaXNoNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGlzaDYuY2xhc3NOYW1lID0gJ2Rpc2ggc2l4JztcbiAgICAgICAgICAgIGRpc2g2LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgICAgIHBpenphRGVzLnRleHRDb250ZW50ID0gJ1BpenphJztcbiAgICAgICAgICAgIGRpc2g2LmFwcGVuZENoaWxkKHBpenphRGVzKTtcbiAgICAgICAgICAgIHJldHVybiBkaXNoNjtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9