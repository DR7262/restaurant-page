(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=new URL(t(829),t.b),l=new URL(t(712),t.b),d=new URL(t(879),t.b),p=i()(o()),f=s()(u),m=s()(l),h=s()(d);p.push([n.id,`@font-face {\n    font-family: 'DMSans';\n    src: url(${f}) format('truetype');\n    font-weight: light;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'DMSerifDisplay';\n    src: url(${m}) format('truetype');\n    font-weight: light;\n    font-style: normal;\n}\n\nhtml {\n    font-family: 'DMSans';\n}\n\nbody {\n    margin: 0 auto;\n    background: url(${h}) fixed no-repeat 0 0;\n}\n\ndiv,\nnav {\n    box-sizing: border-box;\n}\n\nheader > nav {\n    font-family: 'DMSans';\n    padding: 10px;\n    border-radius: 9px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    width: 30vw;\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    color: white;\n    height: 8vh;\n    width: 100vw;\n    position: fixed;\n    top: 0px;\n    background-color: black;\n}\n\nnav:hover {\n    background-color: rgba(129, 129, 129, 0.648);\n    cursor: pointer;\n}\n\n.hero,\n.menu {\n    font-family: 'DMSerifDisplay';\n    font-size: 5em;\n    color: rgb(255, 255, 255);\n    padding: 20px;\n    line-height: 8rem;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n.mission {\n    background-color: white;\n    padding: 100px;\n    height: 100vh;\n}\n\n.missionText {\n    padding: 2em;\n}`,""]);const v=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},829:(n,e,t)=>{n.exports=t.p+"90130db6a4fc53f17a88.ttf"},712:(n,e,t)=>{n.exports=t.p+"ca478f5117e07586dd07.ttf"},879:(n,e,t)=>{n.exports=t.p+"4bc7cfbb89befcec0242.jpeg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),l=t.n(u),d=t(589),p=t.n(d),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t(879);const h=document.createElement("div");h.classList.add("hero"),h.textContent="Colinary Chef";const v=document.createElement("div"),g=document.createElement("h1"),y=document.createElement("p");g.textContent="Our Mission",v.appendChild(g),v.classList.add("mission"),y.textContent="Fresh, hand-made sushi, right at your door.",y.classList.add("missionText"),v.appendChild(y);const b=[h,v],x=document.createElement("div");x.textContent="Menu",x.classList.add("menu");const w=[x],C=document.createElement("div");C.textContent="Contact";const E=C;function M(n){document.getElementById("content").textContent="",function(n){for(let e=0;e<n.length;e++)document.getElementById("content").appendChild(n[e])}(n)}const S=Array.from(document.getElementsByTagName("nav")),T={Home:b,Menu:w,Contact:E};S.forEach((n=>{n.addEventListener("click",(function(n){M(T[n.target.textContent])}))})),M(b),console.log("Test Successful!")})()})();