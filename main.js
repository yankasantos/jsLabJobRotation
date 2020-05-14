class ToDoList{
    constructor(){
        this.toDos = [];
    }

    addToDo(){
        this.toDos.push('Novo item To Do');
        console.log(this.toDos);
    }
}

const MinhaLista = new ToDoList();

document.getElementById('addItem').onclick = function(){
    MinhaLista.addToDo();
}