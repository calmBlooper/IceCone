import './scss/main.scss';


const url='https://nit.tron.net.ua/api/category/list';

var sas;


function f(input){
sas=input;
  console.log(sas);
}


let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      f(httpRequest.responseText);
    }
  }
  httpRequest.open("GET", url);
  httpRequest.send();
   console.log(sas);