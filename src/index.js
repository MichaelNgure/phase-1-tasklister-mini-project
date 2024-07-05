document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescriptionInput = document.getElementById('new-task-description')
  const tasksList = document.getElementById('tasks')
  const submitInput = document.getElementById('submitInput')
  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  submitInput.addEventListener('click', task)

  function task (){

    const li = document.createElement('li')
    li.textContent = newTaskDescriptionInput.value 
    tasksList.append(li)
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteItem)
    function deleteItem(){
      li.remove()
    }
  }

});
