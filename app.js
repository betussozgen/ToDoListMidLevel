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




//functions
function addTodo(e){
    e.preventDefault() //tıklandığında sayfayı yenilemesini engelledim.

    //create todo div.
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo") //todoList içerisine classList ekledim.

    //check mark button - solundaki butonu oluşturdum. 
    const completedButton = document.createElement("button")
    completedButton.innerHTML = "<i class='fas fa-check-circle'></i>" //buton içerisine ikonu ekledim.
    completedButton.classList.add("completed-btn")

    //create todo li

    
     //check trash button - sağıdaki butonu oluşturdum. 
     const trashButton = document.createElement("button")
     trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>" //buton içerisine ikonu ekledim.
     trashButton.classList.add("trash-btn")

    console.log(completedButton)
    console.log(trashButton)
    
}