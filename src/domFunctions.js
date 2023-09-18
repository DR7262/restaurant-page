function createBoxText(text) {
    let p = document.createElement('p')
    p.innerHTML = text;
    p.classList.add('boxText')
    return p;
};

function createDOMElement(type, domClass1, domClass2) {
    let element = document.createElement(type);
    if (domClass1 != "" || domClass1 != undefined || domClass1 != null) {
        element.classList.add(domClass1);
    };
    if (domClass2 != "" || domClass2 != undefined || domClass2 != null) {
        element.classList.add(domClass2);
    };
    return element;
};

export { createBoxText, createDOMElement };