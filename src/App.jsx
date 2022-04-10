import React from 'react'
import AddInput from './components/AddInput';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList/';

function App() {
  return (
    <div className="App container">
      <TodoHead/>
      <AddInput/>
      <TodoList/>
    </div>
  );
}

export default App;
