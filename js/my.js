let inputExe = document.getElementById("input-exe");
let listContainer = document.getElementById("listContainer");
let addBtn = document.getElementById("add");

// add function:
addBtn.onclick = function(){
    if(inputExe.value === ''){
        alert('Please add a task in the input field')
    }else{
        let newItem = document.createElement("li");
        newItem.innerHTML = inputExe.value;
        listContainer.appendChild(newItem);

        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        newItem.appendChild(cross);
        cross.style.cssText = `
        position : absolute;
        right : 0px;
        top: 5px;
        color: #555;
        font-size: 22px ;
        height: 30px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        transition : 0.5s;
        `
        cross.onmouseenter = function(){
            this.style.backgroundColor = '#ff5945';
            this.style.color = '#fff';
        }
        cross.onmouseout = function(){
            this.style.backgroundColor = 'transparent';
            this.style.color = '#555';
        }
    }
    inputExe.value = '';
    saveData();
    inputExe.focus();
}

listContainer.addEventListener('click',function(item){
    if(item.target.tagName === 'LI'){
        item.target.classList.toggle('checked');
    }else if(item.target.tagName === 'SPAN'){
        item.target.parentElement.remove();
    }
    saveData();
},false);



function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTasks();   