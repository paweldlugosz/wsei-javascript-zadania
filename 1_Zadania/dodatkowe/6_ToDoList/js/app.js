let counterUi;
let counter = 0;
let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('taskInput');
    const inputPriority = document.getElementById('priorityInput');
    const addButton = document.getElementById('addTaskButton');
    counterUi = document.getElementById('counter');
    counterUi.innerText = counter;
    addButton.addEventListener('click', () => {
        let val = inputText.value;
        if (val.length > 5 && val.length < 100) {
            let priority = parseFloat(inputPriority.value);
            if (priority && Number.isInteger(priority) && (priority > 0 && priority <= 10)) {
                let task = new Task(val, priority);
                console.log(task);
                tasks.push(task);
                counterUi.innerText = ++counter;
                inputPriority.value = '';
                inputText.value = '';
                render();
            } else {
                alert('Invalid priority value: "' + inputPriority.value + '"! (1 - 10)');
                inputPriority.value = '';
            }
        } else {
            if (val.length <= 5) alert('The text is too short!');
            else  alert('The text is too long!');
        }
    });

    const removeFinishedButton = document.getElementById('removeFinishedTasksButton');
    removeFinishedButton.addEventListener('click', () => {
          tasks = tasks.filter((task) => !task.complete);
          render();
    });
});

function Task (text, priority) {
    this.text = text;
    this.priority = priority;
    this.complete = false;
}

function render() {
    tasks.sort((a, b) => b.priority - a.priority);
    const taskList = document.querySelector('#taskList');

    while (taskList.firstChild) taskList.firstChild.remove();

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        
        let item = document.createElement('li');
        if (task.complete) item.classList.add('done');

        let text = document.createElement('h1');
        text.innerText = task.text;

        let buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Delete';
        buttonDelete.addEventListener('click', () => {
            let index = tasks.indexOf(task);
            if (index > -1) tasks.splice(index, 1);
            if (!task.complete) counterUi.innerText = --counter;
            render();
        });

        let buttonComplete = document.createElement('button');
        buttonComplete.innerText = 'Complete';
        buttonComplete.addEventListener('click', () => {
            task.complete = !task.complete;
            counterUi.innerText = task.complete ? --counter : ++counter;
            render();
        });

        item.appendChild(text);
        item.appendChild(buttonDelete);
        item.appendChild(buttonComplete);
        taskList.appendChild(item);
    }
}