// let title = document.getElementById("header-title");
// title.textContent = "My lister";
// let head = document.getElementById("main-header");
// head.style.borderBottom="6px solid black";
// let item = document.getElementsByClassName("title");
// item[0].style.fontWeight="bold";
// item[0].style.color = "green";
//let items = document.getElementsByClassName("list-group-item");
//items[2].style.backgroundColor="green";

// for(i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }
//var second_item = document.querySelector(".list-group-item:nth-Child(2)");
//second_item.style.backgroundColor="green";
//var third_item = document.querySelector(".list-group-item:nth-child(3)");
//third_item.style.display="none";
// var list = document.querySelectorAll(".list-group-item:nth-child(odd)");
// for(let i=0;i<list.length;i++){
//     list[i].style.backgroundColor="green";
// // }
// var items = document.getElementById("items");
// items.parentElement.style.backgroundColor="yellow";
// items.lastElementChild.style.backgroundColor="skyblue";
// console.log(items.lastChild)

// var main_title = document.getElementById("header-title");
// var text = document.createTextNode("Hello ");
// main_title.prepend(text);

// var lists = document.getElementsByClassName("list-group-item");
// lists[0].prepend(text)
let list = document.getElementById("items");
document.querySelector("input[type='submit']").addEventListener("click", function(e){ 
    e.preventDefault();
        let li = document.createElement("li");
        let del = document.createElement("button");
        let cross = document.createTextNode("X");
        del.appendChild(cross);
        del.classList.add('btn','btn-danger','btn-sm','float-right','delete');

        let val = document.getElementsByClassName("form-control");
        let item_name = document.createTextNode(val[0].value);
        li.appendChild(item_name);
        let atr = document.createAttribute("class");
        atr.value="list-group-item";
        li.setAttributeNode(atr);
        li.appendChild(del);
        list.appendChild(li);

});
var tms = document.getElementsByClassName("delete");
for(let i=0; i<tms.length; i++){
    tms[i].addEventListener('click',del);
}
function del(e){
    if(confirm("are you sure?")){
        var d = e.target.parentElement;
        list.removeChild(d);
    }
}