const groceryList=document.querySelector("#list"),listForm=document.querySelector("#list-form"),listInput=document.querySelector("#list-input"),removeCheckedBtn=document.querySelector("#remove-checked"),checkAllBtn=document.querySelector("#check-all"),uncheckAllBtn=document.querySelector("#uncheck-all");let items=JSON.parse(localStorage.getItem("items"))||[];function updateDisplay(e,t=[]){e.innerHTML=t.reduce((e,t,c)=>e+`\n      <li class="list__item">\n        <input id="item${c}" type="checkbox" data-index="${c}" ${t.checked?"checked":""} class="list__checkbox">\n        <label for="item${c}" class="list__text">${t.name}</label>\n      </li>\n    `,"")}function addItem(e){e.preventDefault();const t={name:this.querySelector('input[type="text"]').value,checked:!1};items.push(t),localStorage.setItem("items",JSON.stringify(items)),updateDisplay(groceryList,items),this.reset()}function toggleCheck(e){if(!e.target.matches("input"))return;const t=e.target.dataset.index;items[t].checked=!items[t].checked,localStorage.setItem("items",JSON.stringify(items))}function removeChecked(){items=items.filter(e=>!e.checked),localStorage.setItem("items",JSON.stringify(items)),updateDisplay(groceryList,items)}function checkAll(){items=items.map(e=>({name:e.name,checked:!0})),localStorage.setItem("items",JSON.stringify(items)),updateDisplay(groceryList,items)}function uncheckAll(){items=items.map(e=>({name:e.name,checked:!1})),localStorage.setItem("items",JSON.stringify(items)),updateDisplay(groceryList,items)}items.length>0&&updateDisplay(groceryList,items),listForm.addEventListener("submit",addItem),groceryList.addEventListener("click",toggleCheck),checkAllBtn.addEventListener("click",checkAll),uncheckAllBtn.addEventListener("click",uncheckAll),removeCheckedBtn.addEventListener("click",removeChecked);