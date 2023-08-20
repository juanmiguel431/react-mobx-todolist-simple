import React from 'react';
// import Test from './test';
import { UsingStoreComp, UsingStoreCompClass } from './using-store.comp';

function App() {
  return (
    <div className="app">
      <h1>My React App</h1>
      {/*<Test title="Using MobX" />*/}
      <UsingStoreCompClass title="Juan Todo List" />
    </div>
  );
}

export default App;
