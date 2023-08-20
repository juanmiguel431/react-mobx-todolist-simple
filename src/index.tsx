import { MobXProviderContext } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import createStore from './stores/helpers/create-store';
import { StoreProvider } from './stores/helpers/store-context';

const store = createStore();

const userId = store.data.user.add('Juan Miguel');
store.data.todo.add(userId, 'Connect MobX to React');
store.data.todo.add(userId, 'Finish the course!');
store.data.todo.add(userId, 'Building Amazing MobX Applications!');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreProvider value={store}>
      <App/>
    </StoreProvider>
  </React.StrictMode>
);
