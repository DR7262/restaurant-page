const contactTitle = document.createElement('div');
contactTitle.textContent = 'Contact Us';
contactTitle.classList.add('contact')

const contactBoxes = document.createElement('div');
contactBoxes.classList.add('contactBoxes');

function createBoxText(text) {
    let varName = document.createElement('p')
    varName.innerHTML = text;
    varName.classList.add('boxText')
    return varName;
};

const box1 = document.createElement('div');
box1.classList.add('contactBox');

box1.appendChild(createBoxText('Business Hours<br>Monday - Sunday<br>10:00AM - 9:00PM '));
box1.appendChild(createBoxText('<b>Adress</b><br>177A Bleecker Street<br> New York City<br>NY10012-1406'))
const bookTable = document.createElement('button');
bookTable.textContent = "BOOK TABLE"
bookTable.classList.add('bookTable');
box1.appendChild(bookTable);


const box2 = document.createElement('div');
box2.textContent = "Order Online";
box2.classList.add('contactBox');

const box3 = document.createElement('div');
box3.textContent = "Feedback Form";
box3.classList.add('contactBox');

contactBoxes.appendChild(box1);
contactBoxes.appendChild(box2);
contactBoxes.appendChild(box3);

const contact = [contactTitle, contactBoxes]

export default contact;