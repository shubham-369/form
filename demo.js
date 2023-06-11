let list = document.getElementById("items");

document.querySelector("input[type='submit']").addEventListener("click", function(e) {
  e.preventDefault();

  let li = document.createElement("li");
  let del = document.createElement("button");
  let delText = document.createTextNode("Delete");
  del.appendChild(delText);
  del.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete');

  let edit = document.createElement("button");
  let editText = document.createTextNode("Edit");
  edit.appendChild(editText);
  edit.classList.add('btn', 'btn-primary', 'btn-sm', 'ml-3', 'float-right', 'edit');
  
  let val = document.getElementsByClassName("form-control");
  let item_name = document.createTextNode(val[0].value);
  li.appendChild(item_name);

  let atr = document.createAttribute("class");
  atr.value = "list-group-item";
  li.setAttributeNode(atr);

  li.appendChild(edit);
  li.appendChild(del);
  list.appendChild(li);

  val[0].value="";
});

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
const input = document.getElementById('search-box');
const filter = document.getElementsByClassName("list-group-item");

input.addEventListener('input', ()=>{
  const search_text = input.value.toLowerCase();
  for(let i=0; i<filter.length; i++){
    const item_text = filter[i].textContent.toLowerCase();
    
    if(item_text.includes(search_text)){
      filter[i].style.display = "";
    }
    else{
      filter[i].style.display = "none";
    }
  }
});