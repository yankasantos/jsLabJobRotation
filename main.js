class List {
    constructor() {
        this.data = [];
    }
    add(data){
        this.data.push(data);
    }
}

class ToDoList extends List{
    
}

const MinhaLista = new ToDoList();

document.getElementById('addItem').onclick = function(){
    MinhaLista.addToDo();
}