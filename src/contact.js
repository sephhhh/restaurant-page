export function contact() {
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

