(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(829),t.b),l=new URL(t(712),t.b),p=new URL(t(879),t.b),u=i()(r()),f=s()(d),m=s()(l),h=s()(p);u.push([n.id,`@font-face {\n    font-family: 'DMSans';\n    src: url(${f}) format('truetype');\n    font-weight: light;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'DMSerifDisplay';\n    src: url(${m}) format('truetype');\n    font-weight: light;\n    font-style: normal;\n}\n\nhtml {\n    font-family: 'DMSans';\n}\n\nbody {\n    margin: 0 auto;\n    background: url(${h}) fixed no-repeat 0 0;\n}\n\ndiv,\nnav {\n    box-sizing: border-box;\n}\n\nheader > nav {\n    font-family: 'DMSans';\n    padding: 10px;\n    border-radius: 9px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    width: 30vw;\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    color: white;\n    height: 8vh;\n    width: 100vw;\n    position: fixed;\n    top: 0px;\n    background-color: black;\n}\n\nnav:hover {\n    background-color: rgba(129, 129, 129, 0.648);\n    cursor: pointer;\n}\n\n.hero,\n.menu,\n.contact {\n    font-family: 'DMSerifDisplay';\n    color: rgb(255, 255, 255);\n    padding: 20px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hero {\n    font-size: 5em;\n    line-height: 8rem;\n    height: 100vh;\n}\n\n.mission {\n    background-color: white;\n    padding: 100px;\n    height: 100vh;\n}\n\n.missionText {\n    padding: 2em;\n}\n\n.contact {\n    font-size: 4em;\n    height: 20vh;\n    padding-top: 1em;\n}\n\n.contactBoxes {\n    display: flex;\n    padding: 2em;\n    width: 100vw;\n    height: min-content;\n    background-color: rgba(0, 0, 0, 0.857);\n    justify-content: space-between;\n    flex-wrap: wrap;\n    overflow: auto;\n    gap: 20px;\n}\n\n.contactBox {\n    color: white;\n    min-height: 400px;\n    flex: 1;\n    min-width: 300px;\n    border: 0px solid grey;\n    border-radius: 9px;\n    box-shadow: 2px 2px rgb(107, 107, 107);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.bookTable {\n    min-height: 25px;\n    width: 50%;\n    background-color: blanchedalmond;\n    border: none;\n    border-radius: 10px;\n    box-shadow: 0px 2px rgb(107, 107, 107);\n    cursor: pointer;\n    font-weight: 800;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-stretch: wider;\n    letter-spacing: 1px;\n    word-spacing: 8px;\n    align-self: center;\n}\n\n.bookTable:active {\n    box-shadow: 0px 1px rgb(107, 107, 107);\n    transform: translateY(2px);\n    background-color: rgb(227, 209, 181);\n}\n`,""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},829:(n,e,t)=>{n.exports=t.p+"90130db6a4fc53f17a88.ttf"},712:(n,e,t)=>{n.exports=t.p+"ca478f5117e07586dd07.ttf"},879:(n,e,t)=>{n.exports=t.p+"4bc7cfbb89befcec0242.jpeg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t(879);const h=document.createElement("div");h.classList.add("hero"),h.textContent="Colinary Chef";const g=document.createElement("div"),b=document.createElement("h1"),v=document.createElement("p");b.textContent="Our Mission",g.appendChild(b),g.classList.add("mission"),v.textContent="Fresh, hand-made sushi, right at your door.",v.classList.add("missionText"),g.appendChild(v);const x=[h,g],y=document.createElement("div");y.textContent="Menu",y.classList.add("menu");const w=[y],C=document.createElement("div");C.textContent="Contact Us",C.classList.add("contact");const E=document.createElement("div");function T(n){let e=document.createElement("p");return e.innerHTML=n,e.classList.add("boxText"),e}E.classList.add("contactBoxes");const M=document.createElement("div");M.classList.add("contactBox"),M.appendChild(T("Business Hours<br>Monday - Sunday<br>10:00AM - 9:00PM ")),M.appendChild(T("<b>Adress</b><br>177A Bleecker Street<br> New York City<br>NY10012-1406"));const L=document.createElement("button");L.textContent="BOOK TABLE",L.classList.add("bookTable"),M.appendChild(L);const S=document.createElement("div");S.textContent="Order Online",S.classList.add("contactBox");const k=document.createElement("div");k.textContent="Feedback Form",k.classList.add("contactBox"),E.appendChild(M),E.appendChild(S),E.appendChild(k);const B=[C,E];function j(n){document.getElementById("content").textContent="",function(n){for(let e=0;e<n.length;e++)document.getElementById("content").appendChild(n[e])}(n)}const A=Array.from(document.getElementsByTagName("nav")),I={Home:x,Menu:w,Contact:B};A.forEach((n=>{n.addEventListener("click",(function(n){j(I[n.target.textContent])}))})),j(B),console.log("Test Successful!")})()})();