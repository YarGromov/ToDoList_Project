import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <TodoList/>
    </div>
  );
}

const TodoList = () => {
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
        </div>
    )
}

export default App;
