import {createDOMElement} from "./domFunctions.js";

const menuTitle = createDOMElement('div', 'menuTitle');
menuTitle.textContent = 'Menu';

const menuContainer = createDOMElement('div', 'menu');

const menu = [menuTitle, menuContainer]

export default menu;