import './style.css';
import bg1 from './tempbg.jpeg'
import home from './home';
import menu from './menu';
import contact from './contact';


function printToDOM(array){ 
    for (let i = 0; i < array.length; i++) {
        document.getElementById('content').appendChild(array[i]);
    }
};

function switchTab(array){
    document.getElementById('content').textContent = '';
    printToDOM(array);
}

const navButtons = Array.from(document.getElementsByTagName('nav'));

const tabs = {
    "Home": home,
    "Menu": menu,
    "Contact": contact
};

navButtons.forEach(element => {
    element.addEventListener ('click', function(e) {
        switchTab(tabs[e.target.textContent])
    })
});


switchTab(home);
console.log("Test Successful!");