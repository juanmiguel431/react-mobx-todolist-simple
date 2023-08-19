import React from 'react';
import RootStore from '../stores/root-store';
import { Observer } from 'mobx-react';

const store = new RootStore();
const userId = store.data.user.add('Juan Miguel');
const todoId = store.data.todo.add(userId, 'Task 1');

const todo = store.data.todo.getById(todoId);

export const Test: React.FC = () => {
  return (
    <>
      <h1>
        <Observer>
          {() => {
            console.log('JMPC1');
            return <>{todo?.name}</>;
          }}
        </Observer>
      </h1>
      <button onClick={_ => todo?.updateName('Do the homework')}>Do the homework</button>
      <button onClick={_ => todo?.updateName('Watch television')}>Watch television</button>
    </>
  );
}

export default Test;
