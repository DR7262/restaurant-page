import {createBoxText, createDOMElement} from "./domFunctions.js";

const contactTitle = document.createElement('div');
contactTitle.textContent = 'Contact Us';
contactTitle.classList.add('contact');

const contactBoxes = createDOMElement('div', 'contactBoxes');

const box1 = document.createElement('div');
box1.classList.add('contactBox');

const box1text = createDOMElement('div', 'textContainer');

box1text.appendChild(createBoxText('<b>Business Hours</b><br>Monday - Sunday<br>10:00AM - 9:00PM '));
box1text.appendChild(createBoxText('<b>Address</b><br>177A Bleecker Street<br> New York City<br>NY10012-1406'))
box1.appendChild(box1text);
const bookTable = createDOMElement("button", "bookTable");
bookTable.textContent = "BOOK TABLE";
box1.appendChild(bookTable);

const box2 = document.createElement('div');
box2.textContent = "Order Online";
box2.classList.add('contactBox');

const box3 = document.createElement('div');

box3.classList.add('contactBox');

const feedback = createDOMElement('div', 'forms');
feedback.textContent = "Feedback Form";
const nameForm = createDOMElement('div', 'name', 'form');
nameForm.textContent = "Name"
const customerName = createDOMElement('input');
customerName.setAttribute('type', 'text');
customerName.setAttribute('name', 'name');
customerName.setAttribute('placeholder', 'Name');
nameForm.appendChild(customerName);

feedback.appendChild(nameForm);

box3.appendChild(feedback);

contactBoxes.appendChild(box1);
contactBoxes.appendChild(box2);
contactBoxes.appendChild(box3);

const contact = [contactTitle, contactBoxes]

export default contact;