//função que adiciona tarefa
function addTask() {

    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value
    console.log(taskTitle)

    if (taskTitle) {
        
        //clonar template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)
        
        //adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle

        //remover classes desnecessarias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adicinar tarefa na lista
        const list = document.querySelector('#task-list')

        list.appendChild(newTask)

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this)
        })

        //adicionar o evento completar
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this)
        })

        //limpar texto
        document.querySelector('#task-title').value = ''
    }
}

//função de remover

function removeTask(task) {
    task.parentNode.remove(true)
}

//função completar
function completeTask(task) {
    const taskComplete = task.parentNode
    taskComplete.classList.toggle('done')
}

//evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e) {
    
    e.preventDefault()
    
    addTask() 

})