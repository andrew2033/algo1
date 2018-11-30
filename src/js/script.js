const container = document.getElementById("app");
const todos = [
  {
    name: "come to school",
    completed: true
  },
  {
    name: "learn javascript",
    completed: false
  },
  {
    name: "learn debugger",
    completed: false
  }
];

const todoInput = document.createElement("input");
todoInput.setAttribute("type", "text");
container.appendChild(todoInput);
todoInput.addEventListener("keypress", event => {
  if (event.which === 13) {
	todoList.innerHTML = '';
    const newTodo = {
      name: event.target.value,
      completed: false
	};
	
    todos.push(newTodo);
	renderTodos(todos);

	
  }
});



const todoList = document.createElement("ul");
container.appendChild(todoList);

const checkedElementFunc = (targetElem) => {
	for (let i = 0 ; i < todos.length; i++){
		if (todos[i] == targetElem){
			todos[i].completed = true;
		}

	}

}

function renderTodos(todos) {
  for (const todo of todos) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.name;


    if (todo.completed) {
      todoItem.style.setProperty("text-decoration", "line-through");
    }
    const toggle = document.createElement("input");
    toggle.setAttribute("type", "checkbox");
	toggle.checked = todo.completed;
	toggle.addEventListener("click", function(event){
		let checkedElement=event.target.innerHTML;
		checkedElementFunc(checkedElement);

		if (event.target.checked) {
			todoItem.style.setProperty("text-decoration", "line-through");
				const newTodo = {
				name: todo.name,
				completed: true
			  };
			  todos.push(newTodo);


		  } else {
			todoItem.style.setProperty("text-decoration", "none");
			const newTodo = {
				name: todo.name,
				completed: false
			  };
			  todos.push(newTodo);
		  }
	})
	todoList.appendChild(todoItem);
    todoItem.appendChild(toggle);
    
  }
}

// TODO:
// 1. Fix bug when all items are being appended.
// 2. Update todo completed state on checked.
// 3. Implement filter. Hide all completed todos.