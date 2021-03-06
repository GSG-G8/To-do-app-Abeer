var todoFunctions = {
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    return todoFunctions.cloneArrayOfObjects(todos).concat({
      id: todoFunctions.generateId(),
      description: newTodo,
      done: false
    });
  },

  deleteTodo: function(todos, idToDelete) {
    return todoFunctions.cloneArrayOfObjects(todos).filter(element => {
      if (element.id !== idToDelete) {
        return element;
      }
    });
  },
  markTodo: function(todos, idToMark) {
    return todoFunctions.cloneArrayOfObjects(todos).map(element => {
      if (element.id === idToMark) {
        element = {
          id: element.id,
          description: element.description,
          done: !element.done
        };
      }
      return element;
    });
  },

  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
