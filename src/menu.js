import {createDOMElement} from "./domFunctions.js";

function createMenuItem(name, description, price) {
    const item = createDOMElement('div', 'menuItem');

    const itemHeader = createDOMElement('div', 'menuItemHeader');
    const mealName = createDOMElement('p', 'mealName');
    mealName.innerHTML = name;
    const mealPrice = createDOMElement('p', 'mealPrice');
    mealPrice.innerHTML = price;

    const itemBody = createDOMElement('div', 'menuItemBody');
    const mealDescription = createDOMElement('p', 'mealDescription')
    mealDescription.innerHTML = description;

    itemHeader.appendChild(mealName);
    itemHeader.appendChild(mealPrice);
    itemBody.appendChild(mealDescription);

    item.appendChild(itemHeader);
    item.appendChild(itemBody);

    return item;
};

const menuTitle = createDOMElement('div', 'menuTitle');
menuTitle.textContent = 'Menu';

const menuContainer = createDOMElement('div', 'menu');
menuContainer.appendChild(createMenuItem('Food Item', 'A delicious piece of edible substance, suitable for nutritional or recreational needs', '$10'));
menuContainer.appendChild(createMenuItem('Food Item', 'A delicious piece of edible substance, suitable for nutritional or recreational needs', '$10'));
menuContainer.appendChild(createMenuItem('Food Item', 'A delicious piece of edible substance, suitable for nutritional or recreational needs', '$10'));
menuContainer.appendChild(createMenuItem('Food Item', 'A delicious piece of edible substance, suitable for nutritional or recreational needs', '$10'));
menuContainer.appendChild(createMenuItem('Food Item', 'A delicious piece of edible substance, suitable for nutritional or recreational needs', '$10'));
menuContainer.appendChild(createMenuItem('Food Item', 'A delicious piece of edible substance, suitable for nutritional or recreational needs', '$10'));


const menu = [menuTitle, menuContainer]

export default menu;