
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
            const popups =document.querySelectorAll('.modal');
            popups.forEach((ele)=>{
                ele.style.display='none';
            })
        }

        // Add Button
        window.onclick = function(event) {
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