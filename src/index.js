import './style.css';
import bg1 from './tempbg.jpeg'
import home from './home';


function printToDOM(array){ 
    for (let i = 0; i < array.length; i++) {
        document.getElementById('content').appendChild(array[i]);
    }
};

printToDOM(home);
console.log("Test Successful!");