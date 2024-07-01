
let show = document.getElementById("to_add_proj");

// Object to hold form URLs for different projects - Popup
var projectForms = {
    'first project': 'forms/first-project-form.html',
    'second project': 'forms/second-project-form.html',
    'add task': 'forms/add-task-form.html' // Example for Add Task button
};


function openFormModal(content) {
    let modal = document.getElementById('formModal');
    let modalForm = modal.querySelector('.modal-form');
    modalForm.action = projectForms[content.toLowerCase()];
    modal.style.display = 'block';
}


function closeFormModal() {
    const popups = document.querySelectorAll('.modal');
    popups.forEach((ele) => {
        ele.style.display = 'none';
    })
}

// Add Button
window.onclick = function (event) {
    let modal = document.getElementById('formModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById('send').addEventListener('click', (e) => {
    e.preventDefault();

    const projectName = document.getElementById('nameproject').value;
    const projectDescription = document.getElementById('projectinput').value;

    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    if (!signedInUser) {
        alert("No user is signed in.");
        return;
    }

    if (!signedInUser.projects) {
        signedInUser.projects = [];
    }

    const project = {
        projectName: projectName,
        projectDescription: projectDescription
    };

    signedInUser.projects.push(project);
    localStorage.setItem("signedInUser", JSON.stringify(signedInUser));

    displayProjects();


});

document.getElementById('editSend').addEventListener('click', (e) => {
    e.preventDefault();

    const projectName = document.getElementById('editProjectName').value;
    const projectDescription = document.getElementById('editProjectDescription').value;
    const projectIndex = document.getElementById('editSend').getAttribute('data-index');

    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    if (!signedInUser) {
        alert("No user is signed in.");
        return;
    }

    signedInUser.projects[projectIndex] = {
        projectName: projectName,
        projectDescription: projectDescription
    };

    localStorage.setItem("signedInUser", JSON.stringify(signedInUser));

    displayProjects();
    closeEditFormModal();
});

function displayProjects() {
    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    const projectContainer = document.getElementById('to_add_proj');
    projectContainer.innerHTML = '';

    if (signedInUser && signedInUser.projects) {
        signedInUser.projects.forEach((project, index) => {
            const projectHTML = `
                        <div class="card mb-3">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-table me-1"></i>
                                    <div>${project.projectName}</div>
                                </div>
                                <div class="bg-danger rounded p-2 btn" onclick="removeProject(${index})">
                                    <span class="text-light"> - Remove Project</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <p>${project.projectDescription}</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-info" onclick="openEditFormModal(${index})">Edit</button>
                                </div>
                            </div>  
                            <div id="p_cards" class="card-body">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header card-header d-flex justify-content-between">
                                        <span>To Do</span>
                                        <i class="fa-solid fa-plus" style="color: #769fcd;"></i>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div class="taskItem ">
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>
                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>

                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                    </ul>
                                </div>
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header d-flex justify-content-between">

                                        <span>In progress</span>
                                        <i class="fa-solid fa-plus" style="color: #769fcd;"></i>

                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                    </ul>
                                </div>
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header d-flex justify-content-between">
                                        <div>
                                            <span>Completed</span>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-plus " style="color: #769fcd;"></i>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div> 
                        </div>  
                        

                    `;
            projectContainer.innerHTML += projectHTML;
        });
    }
}

function removeProject(index) {
    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    if (signedInUser && signedInUser.projects) {
        signedInUser.projects.splice(index, 1);
        localStorage.setItem('signedInUser', JSON.stringify(signedInUser));
        displayProjects();
    }
}

function openEditFormModal(index) {
    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    if (signedInUser && signedInUser.projects) {
        const project = signedInUser.projects[index];
        document.getElementById('editProjectName').value = project.projectName;
        document.getElementById('editProjectDescription').value = project.projectDescription;
        document.getElementById('editSend').setAttribute('data-index', index);
    }

    var modal = document.getElementById('editFormModal');
    modal.style.display = 'block';
}

function closeFormModal() {
    var modal = document.getElementById('formModal');
    modal.style.display = 'none';
}

function closeEditFormModal() {
    var modal = document.getElementById('editFormModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', displayProjects);
function addTask(projectIndex, category) {
    const taskName = prompt(`Enter task name for ${category}:`);
    if (!taskName) return; // If user cancels or provides empty task name

    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    const taskList = signedInUser.projects[projectIndex].tasks[category];
    taskList.push(taskName);

    localStorage.setItem('signedInUser', JSON.stringify(signedInUser));
    displayProjects(); // Refresh project display
}

function editTask(projectIndex, category, taskIndex) {
    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    const currentTaskName = signedInUser.projects[projectIndex].tasks[category][taskIndex];
    const newTaskName = prompt(`Enter new task name for ${category}:`, currentTaskName);

    if (!newTaskName) return; // If user cancels or provides empty task name

    signedInUser.projects[projectIndex].tasks[category][taskIndex] = newTaskName;
    localStorage.setItem('signedInUser', JSON.stringify(signedInUser));
    displayProjects(); // Refresh project display
}

function deleteTask(projectIndex, category, taskIndex) {
    const confirmed = confirm(`Are you sure you want to delete this task?`);
    if (!confirmed) return;

    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'));
    signedInUser.projects[projectIndex].tasks[category].splice(taskIndex, 1);
    localStorage.setItem('signedInUser', JSON.stringify(signedInUser));
    displayProjects(); // Refresh project display
}

// Display projects function remains the same as previously defined

document.addEventListener('DOMContentLoaded', displayProjects);


////////



const sort_by_select = document.getElementById('sort-by')
const all_option = document.getElementById('all')
const Inprogress_option = document.getElementById('Inprogress')
const Completed_option = document.getElementById('Completed')
const Older_to_Newer_option = document.getElementById('Older_to_Newer')
const Newer_to_older_option = document.getElementById('Newer_to_older')

let taskDate = new Date()
let taskDueDate = taskDate.getDay() + '/' + taskDate.getMonth() + '/' + taskDate.getFullYear()

let users = [{
    email: 'abdallah.awaysheh@taskbuddy.com', password: '123', name: 'AbdallahAwaysheh', userData: [
        {
            projectName: 'project1', projectDescription: 'description',
            tasks: [
                { taskName: 'task1', status: 'To Do', dueDate: new Date(1111111111111), taskDescription: 'description' },
                { taskName: 'yasmeen', status: 'Completed', dueDate: new Date(1211111111111), taskDescription: 'description' }]
        },
        {
            projectName: 'project2', projectDescription: 'description', tasks: [
                { taskName: 'task1', status: 'Completed', dueDate: new Date(1311111111111), taskDescription: 'description' },
                { taskName: 'yasmeen', status: 'Completed', dueDate: new Date(1411111111111), taskDescription: 'description' }]
        },
        {
            projectName: 'project3', projectDescription: 'description', tasks: [
                { taskName: 'task1', status: 'Completed', dueDate: new Date(1151111111111), taskDescription: 'description' },
                { taskName: 'task1', status: 'Inprogress', dueDate: new Date(1611111111111), taskDescription: 'description' },
                { taskName: 'task5', status: 'Completed', dueDate: new Date(1171123111111), taskDescription: 'description' }]
        }
    ]
}];

function extractTaskInfo(users) {
    const taskInfoArray = [];
    users.forEach(user => {
        user.userData.forEach(project => {
            project.tasks.forEach(task => {
                taskInfoArray.push({
                    projectName: project.projectName,
                    taskName: task.taskName,
                    dueDate: task.dueDate,
                    status: task.status
                });
            });
        });
    });
    return taskInfoArray;
};

localStorage.setItem('users', JSON.stringify(users));

const tableDiv = document.querySelector('.table-bordered thead')
const userProjects = JSON.parse(localStorage.getItem('users'));

const task_foreach_method = function () {

}

const listElement = document.createElement('tbody')
function dashBoardProjectList(users) {
    users.forEach(user => {
        user.userData.forEach(project => {
            project.tasks.forEach(task => {
                let statusArray = ['Completed', 'To Do', 'Inprogress']
                let activeStatus = statusArray.indexOf(task.status)
                listElement.innerHTML += `<tr>
                <td>${project.projectName}</td>
                <td>${task.taskName}</td>
                <td>
                    <select>
                        <option value="option1">${statusArray.splice(activeStatus, 1)}</option>
                        <option value="option2">${statusArray.pop()}</option>
                        <option value="option3">${statusArray.pop()}</option>
                        </select>
                        </td>
                        <td>${task.dueDate}</td>
                        <td><a id="linkHistory" href="#">>></a></td>
                        </tr>`
            })
            tableDiv.after(listElement)
        })
    })
}

const dashboardButton = document.querySelector('.nav-link').addEventListener('click', dashBoardProjectList(userProjects))


const search_input = document.querySelector('.form-control')

search_input.addEventListener('input', e => {
    sort_by_select.value = '';
    const value = e.target.value.toLowerCase();
    document.querySelector('tbody').innerHTML = ''
    users.forEach(user => {
        user.userData.forEach(project => {
            const taskArray = project.tasks.map(x => x.taskName)
            console.log(taskArray)
            if (project.projectName.toLowerCase().includes(value)) {
                project.tasks.forEach(task => {
                    let statusArray = ['Completed', 'To Do', 'Inprogress']
                    let activeStatus = statusArray.indexOf(task.status)
                    listElement.innerHTML += `<tr>
                <td>${project.projectName}</td>
                <td>${task.taskName}</td>
                <td>
                    <select>
                        <option value="option1">${statusArray.splice(activeStatus, 1)}</option>
                        <option value="option2">${statusArray.pop()}</option>
                        <option value="option3">${statusArray.pop()}</option>
                        </select>
                        </td>
                        <td>${task.dueDate}</td>
                        <td><a id="linkHistory" href="#">>></a></td>
                        </tr>`
                })
                tableDiv.after(listElement)
            } else {
                project.tasks.forEach(task => {
                    if (task.taskName.toLowerCase().includes(value)) {
                        let statusArray = ['Completed', 'To Do', 'Inprogress']
                        let activeStatus = statusArray.indexOf(task.status)
                        listElement.innerHTML += `<tr>
                <td>${project.projectName}</td>
                <td>${task.taskName}</td>
                <td>
                    <select>
                        <option value="option1">${statusArray.splice(activeStatus, 1)}</option>
                        <option value="option2">${statusArray.pop()}</option>
                        <option value="option3">${statusArray.pop()}</option>
                        </select>
                        </td>
                        <td>${task.dueDate}</td>
                        <td><a id="linkHistory" href="#">>></a></td>
                        </tr>`
                    }

                })
                tableDiv.after(listElement)
            }
        })
    })
})

//// sort by status

sort_by_select.addEventListener('click', e => {
    document.querySelector('.form-control').value = ''
    let status_id = e.target.getAttribute('id')
    if (status_id === 'all') {
        document.querySelector('tbody').innerHTML = ''
        dashBoardProjectList(userProjects)
        search_input.value = ''
    } else if (status_id === 'to_do' || status_id === 'Inprogress' || status_id === 'Completed') {
        document.querySelector('tbody').innerHTML = ''
        users.forEach(user => {
            user.userData.forEach(project => {
                project.tasks.forEach(task => {
                    let statusArray = ['Completed', 'To Do', 'Inprogress']
                    let activeStatus = statusArray.indexOf(task.status)
                    if (e.target.innerHTML === task.status) {
                        listElement.innerHTML += `<tr>
                <td>${project.projectName}</td>
                <td>${task.taskName}</td>
                <td>
                    <select>
                        <option value="option1">${statusArray.splice(activeStatus, 1)}</option>
                        <option value="option2">${statusArray.pop()}</option>
                        <option value="option3">${statusArray.pop()}</option>
                        </select>
                        </td>
                        <td>${task.dueDate}</td>
                        <td><a id="linkHistory" href="#">>></a></td>
                        </tr>`
                    }
                })
                tableDiv.after(listElement)
            })
        })

    } else if (status_id === 'Older_to_Newer') {
        document.querySelector('tbody').innerHTML = ''


        const taskInfoArray = extractTaskInfo(users).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        console.log(taskInfoArray);

        function Older_to_Newer_Function(users) {
            users.forEach(user => {
                let statusArray = ['Completed', 'To Do', 'Inprogress']
                let activeStatus = statusArray.indexOf(user.status)
                listElement.innerHTML += `<tr>
                <td>${user.projectName}</td>
                <td>${user.taskName}</td>
                <td>
                    <select>
                        <option value="option1">${statusArray.splice(activeStatus, 1)}</option>
                        <option value="option2">${statusArray.pop()}</option>
                        <option value="option3">${statusArray.pop()}</option>
                        </select>
                        </td>
                        <td>${user.dueDate}</td>
                        <td><a id="linkHistory" href="#">>></a></td>
                        </tr>`
            })
            tableDiv.after(listElement)
        }
        Older_to_Newer_Function(taskInfoArray)

    } else if (status_id === 'Newer_to_older') {
        document.querySelector('tbody').innerHTML = ''


        const taskInfoArray = extractTaskInfo(users).sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
        console.log(taskInfoArray);

        function Newer_to_Older_Function(users) {
            users.forEach(user => {
                let statusArray = ['Completed', 'To Do', 'Inprogress']
                let activeStatus = statusArray.indexOf(user.status)
                listElement.innerHTML += `<tr>
                <td>${user.projectName}</td>
                <td>${user.taskName}</td>
                <td>
                    <select>
                        <option value="option1">${statusArray.splice(activeStatus, 1)}</option>
                        <option value="option2">${statusArray.pop()}</option>
                        <option value="option3">${statusArray.pop()}</option>
                        </select>
                        </td>
                        <td>${user.dueDate}</td>
                        <td><a id="linkHistory" href="#">>></a></td>
                        </tr>`
            })
            tableDiv.after(listElement)
        }
        Newer_to_Older_Function(taskInfoArray)

    }
})

//////

