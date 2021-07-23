

var sohan= document.getElementById("sohan");
function addcss(){
  var newcss = document.getElementById("sohan");
  newcss.classList.add("custom");
}

function remove(){
  var newcss = document.getElementById("sohan");

  newcss.classList.remove("custom");
}

var haters = document.querySelector("#hate");

function  nextbtn(){
  var niharika= document.querySelector("#hate");

  niharika.classList.add("hateyou");
}
function prevbtn(){
  var niharika = document.querySelector("#hate");
  niharika.classList.remove("hateyou")
}