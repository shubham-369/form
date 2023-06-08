let title = document.getElementById("header-title");
title.textContent = "My lister";
let head = document.getElementById("main-header");
head.style.borderBottom="6px solid black";
let item = document.getElementsByClassName("title");
item[0].style.fontWeight="bold";
item[0].style.color = "green";
let items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";

for(i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}