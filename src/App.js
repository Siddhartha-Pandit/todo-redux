import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux toolkit</h1>
       <AddTodo />
       <Todo />
      </header>
    </div>
  );
}

export default App;
