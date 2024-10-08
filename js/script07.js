document.getElementById("btnAdd").addEventListener("click", aggiungiaLista);
//                                CREO LA DATA
const createDateNode = (parentNode) => {
    // Recupera il valore della data dall'input
    let dateValue = document.getElementById("toDoDate").value;

    // Formatta la data usando moment.js nel formato europeo gg/mm/aaaa
    let formattedDate = moment(dateValue).format('DD/MM/YYYY');

    // Crea un nodo di tipo "span" per visualizzare la data
    let dateNode = document.createElement("span");
    dateNode.textContent = `(${formattedDate}) `;
    dateNode.style.marginRight = "10px"; // Aggiunge un margine a destra

    // Aggiunge il nodo della data al nodo padre passato come argomento
    parentNode.appendChild(dateNode);

    return dateNode;
}

const createCheckboxNode = (parentNode) => {
    // Create a checkbox:
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-custom"; 
    
    // Append the checkbox to the "li" :
    parentNode.appendChild(checkbox);
    return checkbox
}

const createTextNode = (parentNode) => {
    // Create a text node:
    let textnode = document.createElement("span");
    textnode.textContent = document.getElementById("toDoElement").value;
    
    // Append the text to the "li" :
    parentNode.appendChild(textnode);
    return textnode
}

const createEditButton = (parentNode, textnode) => {
    // Create an edit button:
    let editButton = document.createElement("button");
    editButton.innerHTML = '<i class="bi bi-pencil-fill"></i>';
    editButton.className = "button";

    // Event listener to edit the item:
    editButton.addEventListener('click', function() {
        let newText = prompt("Modifica il tuo elemento:", textnode.textContent);
        if (newText) {
            textnode.textContent = newText;
        }
    });

    parentNode.appendChild(editButton);
    return 
}

const createDeleteButton = (parentNode) => {
    // Create a delete button:
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="bi bi-trash-fill"></i>'; 
    deleteButton.className = "button";

    // Event listener to delete the item:
    deleteButton.addEventListener('click', function() {
        parentNode.remove(); 
    });

    return parentNode.appendChild(deleteButton);
}

function aggiungiaLista() {
    // Create an "li" :
    let node = document.createElement("li");

    // add the style of the li
    node.classList.add("pixel-corners--wrapper");

    createDateNode(node)
    const checkbox = createCheckboxNode(node)
    const textnode = createTextNode(node)

    createEditButton(node, textnode)
    createDeleteButton(node)

    // Append the "li" to the list:
    document.getElementById("listaToDo").appendChild(node);

    // Reset the input field:
    document.getElementById("toDoElement").value = "";

    // Event listener for the checkbox to toggle line-through:
    checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
            textnode.style.textDecoration = "line-through";
        } else {
            textnode.style.textDecoration = "none";
        }
    });
}
 
//https://stackoverflow.com/questions/76242307/todo-list-using-classes
