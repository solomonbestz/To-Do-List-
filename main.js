const todo_input = document.getElementById('todo-input')
const add_task_btn = document.getElementById('add-task')
const todo_list  = document.getElementById('todo-list')


// Add A Task
const add_task = () => {
    const get_task_text = todo_input.value.trim()

    if(get_task_text !== ''){
        const task_item = createTaskItem(get_task_text)
        todo_list.appendChild(task_item)
        todo_input.value = '';
    }
}

// Create A New Task
const createTaskItem = (get_task_text) => {
    // Creating a li element for each task
    const task_item = document.createElement('li')
    task_item.className ='todo_item'

    // Creating a check box input element for each task
    const check_box = document.createElement('input')
    check_box.type = 'checkbox'
    check_box.classList.add('checkbox')

    // Creating a span element for each task content
    const task_text_span = document.createElement('span')
    task_text_span.textContent = get_task_text

    const delete_btn = document.createElement('button')
    delete_btn.textContent = 'Delete'
    delete_btn.classList.add('delete-btn')
    delete_btn.addEventListener('click', delete_task)

    // append the chilc li to the parent element ul
    task_item.appendChild(check_box)
    task_item.appendChild(task_text_span)
    task_item.appendChild(delete_btn)

    return task_item

} 

// Update A Task

// Delete A Task

const delete_task = (event) => {
    const task_item = event.target.parentNode
    todo_list.removeChild(task_item)
}

// Cross Out Task
const toggle_task = (event) => {
    const task_item = event.target.parentNode
    task_item.classList.toggle('completed')
}


// Event Listener
add_task_btn.addEventListener('click', add_task)
todo_input.addEventListener('keydown', function (event) {
    if(event.key === 'Enter'){
        add_task()
    }    
})
todo_list.addEventListener('change', toggle_task)

// Examples of tasks
const initial_tasks = ['Learn Python', 'Learn Sql', 'Learn Javascript']

initial_tasks.forEach((task) => {
    const task_item = createTaskItem(task)
    todo_list.appendChild(task_item)
})