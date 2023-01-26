//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
consttodoFiletr = document.querySelector('.filter-todo')

//alerts 
const alertWarning = document.querySelector('.alert-warning')
const alertSuccess = document.querySelector('.alert-success')

//events
todoButton.addEventListener('click',addTodo)

todoList.addEventListener('click', deleteCheck)



//functions
function addTodo(e){
    e.preventDefault() //tıklandığında sayfayı yenilemesini engelledim.

    const isEmpty = str => !str.trim().length; //boşluk kontrolü

    if(isEmpty(todoInput.value)){
        alertWarning.style.display = "block"
        setTimeout(() => {
            alertWarning.style.display = "none"
        }, 1500);

        //clear todo input value
        todoInput.value = "";

    }else{

        alertSuccess.style.display = "block"
        setTimeout(() => {
            alertSuccess.style.display = "none"
        }, 1500);

        //create todo div.
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo") //todoList içerisine classList ekledim.

    //check mark button - solundaki butonu oluşturdum. 
    const completedButton = document.createElement("button")
    completedButton.innerHTML = "<i class='fas fa-check-circle'></i>" //buton içerisine ikonu ekledim.
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)

    //create todo li
    const newTodo = document.createElement("li")
    newTodo.innerHTML = todoInput.value; //todoInput'un value'sını newTodo'nun içerisine at.
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)



    
     //check trash button - sağıdaki butonu oluşturdum. 
     const trashButton = document.createElement("button")
     trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>" //buton içerisine ikonu ekledim.
     trashButton.classList.add("trash-btn")
     todoDiv.appendChild(trashButton)


     //append to list
     todoList.appendChild(todoDiv)

     

    console.log(todoDiv)
    console.log(trashButton)
        
    }

    
    
}


function deleteCheck(e){
    
}