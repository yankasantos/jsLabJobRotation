"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToDoList = /*#__PURE__*/function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.toDos = [];
  }

  _createClass(ToDoList, [{
    key: "addToDo",
    value: function addToDo() {
      this.toDos.push('Novo item To Do');
      console.log(this.toDos);
    }
  }]);

  return ToDoList;
}();

var MinhaLista = new ToDoList();

document.getElementById('addItem').onclick = function () {
  MinhaLista.addToDo();
};
