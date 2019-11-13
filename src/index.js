import './scss/main.scss';

var names = [];
var values = []; 
function updateTotal(){
values=[];
for (let i=0;i<names.length;i++) {
	for (let y=0;y<document.getElementsByClassName("totalValue").length;y++){
		if (document.getElementsByClassName("totalValue")[y].parentElement.id==names[i]){
			//values.push(document.getElementsByClassName("totalValue")[y].value);
			values.push(document.getElementsByClassName("totalValue")[y].innerHTML.replace("₴",""));
			break;
	}
	}
}
let kek=0;
for (let e=0;e<document.getElementsByClassName("quantities").length;e++) {
kek+=parseFloat(document.getElementsByClassName("quantities")[e].childNodes[1].value);
//console.log(document.getElementsByClassName("quantities")[e].childNodes[1].value);
}

for (let v=0;v<document.getElementsByClassName("text").length;v++) document.getElementsByClassName("text")[v].innerHTML=kek;
let lol=0
for (let g=0;g<values.length;g++) lol+=parseFloat(values[g]);
document.getElementById("la_value").innerHTML="SUBTOTAL    ₴"+lol.toFixed(2)+" UAH";
if (names.length!=0) document.getElementById("subtotal_container").style.display="block";
else document.getElementById("subtotal_container").style.display="none";
}
function addListenersToCart(){

	const cart = document.getElementsByClassName("cart_button");
	cart[1].addEventListener("click",function(event){
document.getElementsByClassName("overlay")[0].style.display="inline-block";
document.getElementById("cart-wrapper").style.display="inline-block";
	})
	cart[0].addEventListener("click",function(event){
document.getElementsByClassName("overlay")[0].style.display="inline-block";
document.getElementById("cart-wrapper").style.display="inline-block";
	})
	const cart_close_b = document.getElementById("cart_close_button");
	cart_close_b.addEventListener("click",function(event){
document.getElementsByClassName("overlay")[0].style.display="none";
document.getElementById("cart-wrapper").style.display="none";
	})
}
function identityCheck(input){
	if (names.length==0) return true;
	else {
		for (let i=0;i<names.length;i++) {
			if (input==names[i]) return false;
		}
		return true;
	}
}
function addListenersToItems(){
const cartBtn = document.querySelectorAll(".item button");
cartBtn.forEach(function(btn){
	btn.addEventListener("click",function(event){
	let lol;
	/*price*/	if (event.target.parentElement.previousElementSibling.childElementCount>0){
			lol=(event.target.parentElement.previousElementSibling.childNodes[1].nodeValue);
		}
		else {
			lol=(event.target.parentElement.previousElementSibling.textContent);
		}
	const item = {};
item.img=event.target.parentElement.parentElement.childNodes[0].childNodes[0].src;
item.name = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
let string_space=lol.split('₴');
string_space.forEach(function(part){

if (!isNaN(part)){
item.price=parseFloat(part);}
})

if (identityCheck(item.name)==true) {
	names.push(item.name);
let cartItemRemoveButton = document.createElement("div");
cartItemRemoveButton.className="remove_b";
cartItemRemoveButton.innerHTML="<button type=\"button\">x</button>";
cartItemRemoveButton.style.display="inline-block";
cartItemRemoveButton.style.verticalAlign="middle";
cartItemRemoveButton.style.marginLeft="2%";
let cartItemImage = document.createElement("div");
cartItemImage.innerHTML="<img class=\"cart_in_image\" src=\""+item.img+"\" width=\"85\" height=\"85\">";
cartItemImage.style.padding="20px";

cartItemImage.style.verticalAlign="middle";
cartItemImage.style.display="inline-block";
let cartItemName = document.createElement("div");
cartItemName.style.top="20px";
cartItemName.style.width="20%";
cartItemName.style.verticalAlign="middle";
cartItemName.innerHTML=item.name;
cartItemName.style.display="inline-block";
let cartItemPrice = document.createElement("div");
cartItemPrice.innerHTML="₴"+item.price;
cartItemPrice.style.display="inline-block";
cartItemPrice.style.marginLeft="20%";

let cartItemInput = document.createElement("div");
cartItemInput.className="quantities";
cartItemInput.style.display="inline-block";
cartItemInput.innerHTML=" <input type=\"number\" name=\"quantity\" value=\"1\" min=\"1\" max=\"99\" style=\"width=1px\"><br>"
cartItemInput.textAlign="center";
let cartItemTotalPrice= document.createElement("div");
cartItemTotalPrice.className="totalValue";
cartItemTotalPrice.innerHTML="₴"+(item.price*parseFloat(cartItemInput.childNodes[1].value)).toFixed(2);

cartItemTotalPrice.style.display="inline-block";
cartItemTotalPrice.style.width="15%";
let cartItem=document.createElement("div");
cartItem.id=item.name;
cartItem.appendChild(cartItemRemoveButton);
cartItem.appendChild(cartItemImage);
cartItem.appendChild(cartItemName);
cartItem.appendChild(cartItemPrice);

cartItem.appendChild(cartItemInput);


cartItem.appendChild(cartItemTotalPrice);
cartItem.style.background="#FFFFFF";
cartItem.style.marginTop="20px";
cartItem.style.width="100%";
cartItem.style.borderBottom="1px solid grey";
let els=document.getElementsByClassName("cart_in_image");
Array.from(els).forEach((el) => {
   el.style.objectFit="contain";
});
cartItemRemoveButton.addEventListener("click",function(event){
cartItem.remove();
for (let i=0;i<names.length;i++) 
if(names[i]==item.name){
names.splice(i,1);
updateTotal();
};
	});
cartItemInput.addEventListener("click",function(event){
cartItemTotalPrice.textContent="₴"+(item.price*parseFloat(cartItemInput.childNodes[1].value)).toFixed(2);
updateTotal();
	});
const cart = document.getElementById("items_container");
cart.appendChild(cartItem);
updateTotal();
}
else {

	alert("You already have that item in your shopping cart!\nUse the cart tools to modify quantity");
}


	});
});
}
function addListenersToMMenu(){

	let els=document.getElementsByClassName("category");
Array.from(els).forEach((el) => {
	 let cln = el.cloneNode(true);
	 cln.style.position="relative";
	 cln.style.width="100%";
	  cln.style.height=100/Array.from(els).length+"%";
	  cln.addEventListener("click",function(event){
    document.getElementsByClassName("banner")[0].innerHTML="<h1>"+cln.textContent+"</h1>";
         });

  document.getElementById("small_categories").appendChild(cln);
});
document.getElementById("mobile_categories").addEventListener("click",function(event){
let x = document.getElementById("small_categories");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }


});
}

var sas;


function f(input){
sas=input;
}
function getItems(){
let url ="https://nit.tron.net.ua/api/product/list";
let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      f(httpRequest.responseText);
let answer = JSON.parse(sas);

  let itm= document.getElementsByClassName("item")[0];
    if (answer[0].special_price!=null) {document.getElementsByClassName("item_name")[0].innerHTML=answer[0].name+"<p><s>₴"+answer[0].price+"</s></p>";

    document.getElementsByClassName("item_price")[0].innerHTML="₴"+answer[0].special_price;}
 else {
      document.getElementsByClassName("item_name")[0].innerHTML=answer[0].name;
    document.getElementsByClassName("item_price")[0].innerHTML="₴"+answer[0].price;  
 }
 document.getElementsByClassName("item_image")[0].src=answer[0].image_url;
 var cln;

for (let i=1;i<answer.length;i++){
	//console.log(answer);
 cln = itm.cloneNode(true);
 document.getElementById("items_container1").appendChild(cln);
    if (answer[i].special_price!=null) {document.getElementsByClassName("item_name")[i].innerHTML=answer[i].name+"<p><s>₴"+answer[i].price+"</s></p>";

    document.getElementsByClassName("item_price")[i].innerHTML="₴"+answer[i].special_price;

}
 else {
      document.getElementsByClassName("item_name")[i].innerHTML=answer[i].name;
    document.getElementsByClassName("item_price")[i].innerHTML="₴"+answer[i].price;  
 }
   document.getElementsByClassName("item_image")[i].src=answer[i].image_url;
    }
    getCategories();

  }
}
  httpRequest.open("GET", url);
  httpRequest.send();
}
function getCategories(){
let url="https://nit.tron.net.ua/api/category/list";

let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      f(httpRequest.responseText);
let answer = JSON.parse(sas);

  let itm= document.getElementsByClassName("category")[0];
     document.getElementsByClassName("category")[0].innerHTML="<a href=\"#home\">"+answer[0].name+"</a>";
         document.getElementsByClassName("category")[0].addEventListener("click",function(event){
    document.getElementsByClassName("banner")[0].innerHTML="<h1>"+answer[0].name+"</h1>";
         });
 var cln;

for (let i=1;i<answer.length;i++){
	//console.log(answer);
 cln = itm.cloneNode(true);
 document.getElementsByClassName("menu")[0].appendChild(cln);
     document.getElementsByClassName("category")[i].innerHTML="<a href=\"#home\">"+answer[i].name+"</a>";
       document.getElementsByClassName("category")[i].addEventListener("click",function(event){
    document.getElementsByClassName("banner")[0].innerHTML="<h1>"+answer[i].name+"</h1>";
         });
    }
    addListenersToMMenu();
addListenersToCart();
addListenersToItems();

  }
}
  httpRequest.open("GET", url);
  httpRequest.send();
}
getItems();

