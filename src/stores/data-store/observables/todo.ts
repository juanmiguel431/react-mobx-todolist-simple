import { action, computed, IReactionDisposer, makeObservable, observable, reaction, when } from 'mobx';
import { Todo } from '../../../models/data';
import { v4 as uuidv4 } from 'uuid';

export class ObservableTodo implements Todo {
  public id: string = uuidv4().replace(/-/g, '');
  public name: string | null = null;
  public isCompleted: boolean = false;
  public userId: string;
  private readonly reactionDisposer: IReactionDisposer;

  constructor(name: string, userId: string) {
    makeObservable(this, {
      name: observable,
      isCompleted: observable,
      updateName: action,
      toggleCompletedState: action,
    });

    this.name = name;
    this.userId = userId;

    this.reactionDisposer = reaction(
      (r) => this.isCompleted,
      () => {
        console.log(`Todo ${this.name} is in state ${this.isCompleted}`);
      }
    );
  }

  dispose() {
    this.reactionDisposer()
  }

  public toggleCompletedState = () => {
    this.isCompleted = !this.isCompleted;
  }

  public updateName = (name: string) => {
    this.name = name;
  }
}


export class ObservableTodoList {
  public todoList: ObservableTodo[] = [];
  private readonly reactionDisposer: IReactionDisposer;

  constructor() {
    makeObservable(this, {
      todoList: observable,
      completed: computed,
      pending: computed,
      add: action,
      remove: action
    });

    this.reactionDisposer = reaction(
      () => this.todoList.length,
      () => {
        console.log(`Todo list change: Total: ${this.todoList.length} Pending: ${this.pending.length} Completed: ${this.completed.length}`);
      }
    );

    when(
      () => this.pending.length === 0 && this.completed.length > 0,
      () => {
        console.log('ObservableTodo list is completed');
      }
    )
  }

  public dispose() {
    this.reactionDisposer();
  }

  public add = (name: string, userId: string) => {
    this.todoList.push(new ObservableTodo(name, userId));
  }

  public getByName = (name: string) => {
    return this.todoList.find(t => t.name === name);
  }

  public remove = (name: string) => {
    const todoIndex = this.todoList.findIndex(p => p.name === name);
    if (todoIndex === -1) return;

    const todo = this.todoList[todoIndex];
    todo.dispose();

    this.todoList.splice(todoIndex, 1);
  }

  get completed() {
    return this.todoList.filter(p => p.isCompleted);
  }

  get pending() {
    return this.todoList.filter(p => !p.isCompleted);
  }
}
