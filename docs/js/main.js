!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var a,l,i=[],r=[];function s(){r=[];for(var e=0;e<i.length;e++)for(var t=0;t<document.getElementsByClassName("totalValue").length;t++)if(document.getElementsByClassName("totalValue")[t].parentElement.id==i[e]){r.push(document.getElementsByClassName("totalValue")[t].innerHTML.replace("₴",""));break}for(var n=0,a=0;a<document.getElementsByClassName("quantities").length;a++)n+=parseFloat(document.getElementsByClassName("quantities")[a].childNodes[1].value);for(var l=0;l<document.getElementsByClassName("text").length;l++)document.getElementsByClassName("text")[l].innerHTML=n;for(var s=0,o=0;o<r.length;o++)s+=parseFloat(r[o]);document.getElementById("la_value").innerHTML="SUBTOTAL    ₴"+s.toFixed(2)+" UAH",0!=i.length?document.getElementById("subtotal_container").style.display="block":document.getElementById("subtotal_container").style.display="none"}function o(){document.querySelectorAll(".item button").forEach((function(e){e.addEventListener("click",(function(e){var t;t=e.target.parentElement.previousElementSibling.childElementCount>0?e.target.parentElement.previousElementSibling.childNodes[1].nodeValue:e.target.parentElement.previousElementSibling.textContent;var n={};if(n.img=e.target.parentElement.parentElement.childNodes[0].childNodes[0].src,n.name=e.target.parentElement.previousElementSibling.previousElementSibling.textContent,t.split("₴").forEach((function(e){isNaN(e)||(n.price=parseFloat(e))})),1==function(e){if(0==i.length)return!0;for(var t=0;t<i.length;t++)if(e==i[t])return!1;return!0}(n.name)){i.push(n.name);var a=document.createElement("div");a.className="remove_b",a.innerHTML='<button type="button">x</button>',a.style.display="inline-block",a.style.verticalAlign="middle",a.style.marginLeft="2%";var l=document.createElement("div");l.innerHTML='<img class="cart_in_image" src="'+n.img+'" width="85" height="85">',l.style.padding="20px",l.style.verticalAlign="middle",l.style.display="inline-block";var r=document.createElement("div");r.style.top="20px",r.style.width="20%",r.style.verticalAlign="middle",r.innerHTML=n.name,r.style.display="inline-block";var o=document.createElement("div");o.innerHTML="₴"+n.price,o.style.display="inline-block",o.style.marginLeft="20%";var m=document.createElement("div");m.className="quantities",m.style.display="inline-block",m.innerHTML=' <input type="number" name="quantity" value="1" min="1" max="99" style="width=1px"><br>',m.textAlign="center";var c=document.createElement("div");c.className="totalValue",c.innerHTML="₴"+(n.price*parseFloat(m.childNodes[1].value)).toFixed(2),c.style.display="inline-block",c.style.width="15%";var d=document.createElement("div");d.id=n.name,d.appendChild(a),d.appendChild(l),d.appendChild(r),d.appendChild(o),d.appendChild(m),d.appendChild(c),d.style.background="#FFFFFF",d.style.marginTop="20px",d.style.width="100%",d.style.borderBottom="1px solid grey";var u=document.getElementsByClassName("cart_in_image");Array.from(u).forEach((function(e){e.style.objectFit="contain"})),a.addEventListener("click",(function(e){d.remove();for(var t=0;t<i.length;t++)i[t]==n.name&&(i.splice(t,1),s())})),m.addEventListener("click",(function(e){c.textContent="₴"+(n.price*parseFloat(m.childNodes[1].value)).toFixed(2),s()})),document.getElementById("items_container").appendChild(d),s()}else alert("You already have that item in your shopping cart!\nUse the cart tools to modify quantity")}))}))}function m(e){a=e}(l=new XMLHttpRequest).onreadystatechange=function(){if(l.readyState===XMLHttpRequest.DONE&&200===l.status){m(l.responseText);var e,t=JSON.parse(a),n=document.getElementsByClassName("item")[0];null!=t[0].special_price?(document.getElementsByClassName("item_name")[0].innerHTML=t[0].name+"<p><s>₴"+t[0].price+"</s></p>",document.getElementsByClassName("item_price")[0].innerHTML="₴"+t[0].special_price):(document.getElementsByClassName("item_name")[0].innerHTML=t[0].name,document.getElementsByClassName("item_price")[0].innerHTML="₴"+t[0].price),document.getElementsByClassName("item_image")[0].src=t[0].image_url;for(var i=1;i<t.length;i++)e=n.cloneNode(!0),document.getElementById("items_container1").appendChild(e),null!=t[i].special_price?(document.getElementsByClassName("item_name")[i].innerHTML=t[i].name+"<p><s>₴"+t[i].price+"</s></p>",document.getElementsByClassName("item_price")[i].innerHTML="₴"+t[i].special_price):(document.getElementsByClassName("item_name")[i].innerHTML=t[i].name,document.getElementsByClassName("item_price")[i].innerHTML="₴"+t[i].price),document.getElementsByClassName("item_image")[i].src=t[i].image_url;!function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){var t;e.readyState===XMLHttpRequest.DONE&&200===e.status&&function(){m(e.responseText);var n=JSON.parse(a),l=document.getElementsByClassName("category")[0];document.getElementsByClassName("category")[0].innerHTML='<a href="#home">'+n[0].name+"</a>",document.getElementsByClassName("category")[0].addEventListener("click",(function(e){document.getElementsByClassName("banner")[0].innerHTML="<h1>"+n[0].name+"</h1>"}));for(var i,r,s=function(e){t=l.cloneNode(!0),document.getElementsByClassName("menu")[0].appendChild(t),document.getElementsByClassName("category")[e].innerHTML='<a href="#home">'+n[e].name+"</a>",document.getElementsByClassName("category")[e].addEventListener("click",(function(t){document.getElementsByClassName("banner")[0].innerHTML="<h1>"+n[e].name+"</h1>"}))},c=1;c<n.length;c++)s(c);i=document.getElementsByClassName("category"),Array.from(i).forEach((function(e){var t=e.cloneNode(!0);t.style.position="relative",t.style.width="100%",t.style.height=100/Array.from(i).length+"%",t.addEventListener("click",(function(e){document.getElementsByClassName("banner")[0].innerHTML="<h1>"+t.textContent+"</h1>"})),document.getElementById("small_categories").appendChild(t)})),document.getElementById("mobile_categories").addEventListener("click",(function(e){var t=document.getElementById("small_categories");"block"===t.style.display?t.style.display="none":t.style.display="block"})),(r=document.getElementsByClassName("cart_button"))[1].addEventListener("click",(function(e){document.getElementsByClassName("overlay")[0].style.display="inline-block",document.getElementById("cart-wrapper").style.display="inline-block"})),r[0].addEventListener("click",(function(e){document.getElementsByClassName("overlay")[0].style.display="inline-block",document.getElementById("cart-wrapper").style.display="inline-block"})),document.getElementById("cart_close_button").addEventListener("click",(function(e){document.getElementsByClassName("overlay")[0].style.display="none",document.getElementById("cart-wrapper").style.display="none"})),o()}()},e.open("GET","https://nit.tron.net.ua/api/category/list"),e.send()}()}},l.open("GET","https://nit.tron.net.ua/api/product/list"),l.send()},function(e,t,n){}]);