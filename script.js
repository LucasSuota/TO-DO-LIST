const addBtn = document.querySelector('.inputArea button')
const todoInput = document.querySelector('.inputArea input')
const todoList = document.querySelector('.todoList')

let todoitems = []

addBtn.addEventListener('click', () => {
    if(todoInput.value === ''){
        alert('You must insert something!')
    } else {
        getNewTodo(todoInput.value);
        todoInput.value = ''
    }
})

function getNewTodo(text){
    todoitems.push(text);
    toBd(todoitems);
}

function toBd(bd){
    localStorage.setItem('list', JSON.stringify(bd));
    loadItems();
}

function loadItems(){
    todoList.innerHTML = '';
    todoitems = JSON.parse(localStorage.getItem('list'));
    todoitems.forEach((item, i) => {
        insertItems(item, i);
    })
}

function insertItems(item, i){
    const newItem = document.createElement('div')
    newItem.innerHTML = `
            <div class="newItem_${i} input-group mb-2">
                <span class="form-control">${item}</span>
                <button onclick="remove(${i})" class="btn btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
    `
    todoList.appendChild(newItem);
}

function remove(i){
    document.querySelector(`.newItem_${i}`).remove();
    todoitems.splice(i, 1)
    
}





