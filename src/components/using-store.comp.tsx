import React from 'react';
import { useStore } from '../stores/helpers/use-store';
import { observer } from 'mobx-react';

type UsingStoreProps = {
  title: string;
}

const UsingStoreComp: React.FC<UsingStoreProps> = observer(function UsingStoreComp(props) {
  const { data: { todo, user }, ui: {globalView} } = useStore();

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

export default UsingStoreComp;
