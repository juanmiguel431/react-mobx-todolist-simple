import React from 'react';
import { observer, Observer, useObserver } from 'mobx-react';
import createStore from '../stores/helpers/create-store';

type TestProps = {
  title: string;
}

const store = createStore();

const userId = store.data.user.add('Juan Miguel');
const todoId = store.data.todo.add(userId, 'Connect MobX to React');
const todo = store.data.todo.getById(todoId);

class TestClassBase extends React.Component<TestProps> {

  render() {
    console.log('Render');
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>
          <Observer>
            {() => {
              console.log('JMPC1');
              return <>{todo?.name}</>;
            }}
          </Observer>
        </h2>
        <button onClick={_ => todo?.updateName('Do the homework')}>Do the homework</button>
        <button onClick={_ => todo?.updateName('Watch television')}>Watch television</button>
      </>
    );
  }
}

const TestClassBase2 = observer(class TestClassBase2 extends React.Component<TestProps> {

  render() {
    console.log('Render');
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>{todo?.name}</h2>
        <button onClick={_ => todo?.updateName('Do the homework')}>Do the homework</button>
        <button onClick={_ => todo?.updateName('Watch television')}>Watch television</button>
      </>
    );
  }
})

//Observer
const Test: React.FC<TestProps> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>
        <Observer>
          {() => {
            console.log('JMPC1');
            return <>{todo?.name}</>;
          }}
        </Observer>
      </h2>
      <button onClick={_ => todo?.updateName('Do the homework')}>Do the homework</button>
      <button onClick={_ => todo?.updateName('Watch television')}>Watch television</button>
    </>
  );
}

//useObserver  -- This is deprecated.
const Test2: React.FC<TestProps> = (props) => {
  return useObserver(() => (
    <>
      <h1>{props.title}</h1>
      <h2>{todo?.name}</h2>
      <button onClick={_ => todo?.updateName('Do the homework')}>Do the homework</button>
      <button onClick={_ => todo?.updateName('Watch television')}>Watch television</button>
    </>
  ));
}

const Test3: React.FC<TestProps> = observer(function Test3(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{todo?.name}</h2>
      <button onClick={_ => todo?.updateName('Do the homework')}>Do the homework</button>
      <button onClick={_ => todo?.updateName('Watch television')}>Watch television</button>
    </>
  );
})

export default Test3;
// export default observer(TestClassBase2);
// export default TestClassBase2;
