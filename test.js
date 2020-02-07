// var test = require('tape');
var todoFunctions = require("./js/logic");


// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });
describe("Testing add todo ", () => {
  test("create todo", () => {
    const actual = todoFunctions.addTodo([], "todo");
    const expected = [{ id: 1, description: "todo", done: false }];
    expect(actual).toEqual(expected);
  });

  test("create new todo", () => {
    const actual = todoFunctions.addTodo(
      [{ id: 1, description: "todo", done: false }],
      "todo 1"
    );
    const expected = [
      { id: 1, description: "todo", done: false },
      { id: 2, description: "todo 1", done: false }
    ];
    expect(actual).toEqual(expected);
  });
});
//Test delete todo

describe("Testing delete todo ", () => {
  test("Delete todo", () => {
    const actual = todoFunctions.deleteTodo(
      [
        { id: 1, description: "todo", done: false },
        { id: 2, description: "todo 1", done: false }
      ],
      1
    );
    const expected = [{ id: 2, description: "todo 1", done: false }];
    expect(actual).toEqual(expected);
  });
});

// test markTodo
describe("Testing Mark Todo ", () => {
  test("Mark todo", () => {
    const actual = todoFunctions.markTodo(
      [
        { id: 1, description: "todo", done: false },
        { id: 2, description: "todo 1", done: false }
      ],
      1
    );
    const expected = [
      { id: 1, description: "todo", done: true },
      { id: 2, description: "todo 1", done: false }
    ];
    expect(actual).toEqual(expected);
  });
});
