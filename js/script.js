let $todoInput;
let $addBtn;
let $ulList;
let $todoAlert;
let $removeTask;
let $removeAllTasks;
let $liItem;
let $todoList;
let $allTasks;
let $newTask;
let $newElements;
let $hideListBtn;
let $sizeUpBtn;
let $sizeDownBtn;
let $todo;

const main = () => {
    prepareDomElements()
    prepareDomEvents()

}
const prepareDomElements = () => {
    $todoInput = document.querySelector('.todoInput')
    $addBtn = document.querySelector('.addBtn')
    $ulList = document.querySelector('ul')
    $todoAlert = document.querySelector('.todoAlert')
    $removeAllTasks = document.querySelector('.clearBtn')
    $todoList = document.querySelector('.todo-list')
    $allTasks = $ulList.getElementsByTagName('li')
    $hideListBtn = document.querySelector('.hideList')
    $sizeUpBtn = document.querySelector('.sizeUp')
    $sizeDownBtn = document.querySelector('.sizeDown')
    $todo = document.querySelector('.todo')
}
const prepareDomEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
    $removeAllTasks.addEventListener('click', clearAllTasks)
    $ulList.addEventListener('click', checkClick)
    $hideListBtn.addEventListener('click', hideShowList)
    $sizeUpBtn.addEventListener('click', add)
    $sizeDownBtn.addEventListener('click', subtract)
}

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.textContent = $todoInput.value;
        $ulList.appendChild($newTask)

        const rejectTask = document.createElement('button')
        rejectTask.classList.add('reject')
        rejectTask.innerHTML = '<i class="fas fa-times"></i>'
        $newTask.appendChild(rejectTask)

        const completeBtn = document.createElement('button')
        completeBtn.classList.add('complete')
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        $newTask.appendChild(completeBtn)

        $todoInput.value = ''
        $todoAlert.innerText = ''
        $newElements = $ulList.querySelectorAll('li')

    } else {
        $todoAlert.innerText = 'Nie podałeś zadania!'
        $todoAlert.style.color = 'rgb(255,255,255)'
    }
}
const checkClick = (e) => {
    if (e.target.closest('button').className === 'reject') {
        deleteTask(e)
    } else if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.closest('button').classList.toggle('completedBtn')
    }
}

const deleteTask = (e) => {
    const deleted = e.target.closest('li');
    deleted.remove()

    if ($allTasks.length === 0) {
        $todoAlert.innerText = 'Brak zadań na liście!'
    }
}
const clearAllTasks = () => {
    $newElements.forEach(el => el.remove());
    $todoAlert.innerText = 'Brak zadań na liście!'
}
let num = 900;

const add = () => {
    const sum = num += 40;
    const newScore = sum + 'px'
    $todo.style.width = newScore;
    $todo.style.maxWidth = '1100px'
}

const subtract = () => {
    const sum = num -= 40;
    const newScore = sum + 'px'
    $todo.style.width = newScore
    $todo.style.minWidth = '800px'
}

const hideShowList = () => {
    $newElements.forEach(el => {
        if ($hideListBtn.textContent === 'hide list') {
            el.classList.toggle('hide-list')
        }
    })
}

document.addEventListener('DOMContentLoaded', main)