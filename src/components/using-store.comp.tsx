import React from 'react';
import { useStore } from '../stores/helpers/use-store';
import { Observer, observer } from 'mobx-react';
import { StoreConsumer } from '../stores/helpers/store-context';
import RootStore from '../stores/root-store';

type UsingStoreProps = {
  title: string;
}

export const UsingStoreComp: React.FC<UsingStoreProps> = observer(function UsingStoreComp(props) {
  const { data: { todo, user }, ui: { globalView } } = useStore();

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={_ => {
        const juan = user.items[0];
        todo.add(juan.id, `New Task ${globalView.todoCount}`);
      }}>
        Add new
      </button>
      <ul>
        {todo.items.map(t => <li key={t.id}>{t.name}</li>)}
      </ul>
    </div>
  )
})

export const UsingStoreCompClass = class UsingStoreComp extends React.Component<UsingStoreProps> {
  render() {
    return (
      <StoreConsumer>
        {(context) => {
          const { data: { user, todo }, ui: { globalView } } = context;
          return (
            <Observer>
              {() => (
                <div>
                  <h1>{this.props.title}</h1>
                  <button onClick={_ => {
                    const juan = user.items[0];
                    todo.add(juan.id, `New Task ${globalView.todoCount}`);
                  }}>
                    Add new
                  </button>
                  <ul>
                    {todo.items.map(t => <li key={t.id}>{t.name}</li>)}
                  </ul>
                </div>
              )}
            </Observer>
          );
        }}
      </StoreConsumer>
    )
  }
}
