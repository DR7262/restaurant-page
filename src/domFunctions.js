function createBoxText(text) {
    let p = document.createElement('p')
    p.innerHTML = text;
    p.classList.add('boxText')
    return p;
};

function createDOMElement(type, domClass) {
    let element = document.createElement(type);
    if (domClass != "" || domClass != undefined || domClass != null) {
        element.classList.add(domClass);
    };
    return element;
};

export { createBoxText, createDOMElement };