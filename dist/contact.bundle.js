"use strict";
(self["webpackChunkpackage_json"] = self["webpackChunkpackage_json"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const contact = document.createElement('div');
    contact.className = 'contact';

    const contactTitle = document.createElement('div');
    contactTitle.className = 'contactTitle';
    contactTitle.textContent = 'Contact us';

    contact.appendChild(contactTitle);
    input(contact);
    comment(contact);

    return contact;
}

function input(content) {
    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');

    nameInput.id = 'name';
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';

    emailInput.id = 'email';
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';

    content.appendChild(nameInput);
    content.appendChild(emailInput);
}

function comment(content) {
    const comment = document.createElement('textarea');

    comment.className = 'comment';
    comment.placeholder = 'Message';
    comment.rows = '10';
    comment.cols = '50';

    content.appendChild(comment);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0JztcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUaXRsZS5jbGFzc05hbWUgPSAnY29udGFjdFRpdGxlJztcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgaW5wdXQoY29udGFjdCk7XG4gICAgY29tbWVudChjb250YWN0KTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBpbnB1dChjb250ZW50KSB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lJztcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG5cbiAgICBlbWFpbElucHV0LmlkID0gJ2VtYWlsJztcbiAgICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnO1xuICAgIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNvbW1lbnQoY29udGVudCkge1xuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgY29tbWVudC5jbGFzc05hbWUgPSAnY29tbWVudCc7XG4gICAgY29tbWVudC5wbGFjZWhvbGRlciA9ICdNZXNzYWdlJztcbiAgICBjb21tZW50LnJvd3MgPSAnMTAnO1xuICAgIGNvbW1lbnQuY29scyA9ICc1MCc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnQpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=