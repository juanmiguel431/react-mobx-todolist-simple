// # Each todo should have:
//     - id
//     - name
//     - isCompleted
// # Each todo should be able to move between completed and not completed state
// # Each todo should be able to update the name
// # Print Log on Todo completed state change
// # Add ability to add and remove todo
// # Add ability to get list of completed todos and not completed todos
// # Print log every time new todo is added or removed with the current status: total, completed, incomplete
// # Print log only once when all todos are completed


import { action, autorun, computed, makeObservable, observable, reaction } from 'mobx';

class Todo {
  public id: string | null = null;
  public name: string | null = null;
  public isCompleted: boolean = false;

  constructor(props: Partial<Todo>) {
    Object.assign<Todo, Partial<Todo>>(this, props);

    makeObservable(this, {
      id: observable,
      name: observable,
      isCompleted: observable
    });
  }

  public toggleCompletedState = action(() => {
    this.isCompleted = !this.isCompleted;
  })

  public updateName = action((name: string) => {
    this.name = name;
  })
}

class TodoList {
  public todoList: Todo[] = [];

  constructor() {
    makeObservable(this, {
      todoList: observable,
      completed: computed,
      pending: computed,
    });
  }

  public add = action((todo: Todo) => {
    this.todoList.push(todo);
  })

  public remove = action((id: string) => {
    this.todoList = this.todoList.filter(p => p.id !== id);
  })

  get completed() {
    return this.todoList.filter(p => p.isCompleted);
  }

  get pending() {
    return this.todoList.filter(p => !p.isCompleted);
  }
}

const todoList = new TodoList();

const reactionDisposer = reaction(
  () => todoList.pending.length === 0 && todoList.completed.length > 0,
  () => {
    console.log('Todo list is completed');
  }
)



const todo = new Todo({id: '1', name: 'Task 1'});

const autorunDisposer = autorun(() => {
  console.log(`Todo: id: ${todo.id} name: ${todo.name} completed: ${todo.isCompleted}`);
});

todoList.add(todo);
todo.toggleCompletedState();

autorunDisposer();
reactionDisposer();

// to make peace with typescript :D - remove when u start
export {};
