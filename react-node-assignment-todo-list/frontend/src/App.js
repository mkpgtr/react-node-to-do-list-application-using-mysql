import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import AllTasks from './components/AllTasks';
import { useEffect } from 'react';


// ! For this app to work, please create a MYSQL database named 'tasks' and in there create a table named 'tasksList'
// ! inside that table create two columns id(auto increment) and taskName with varchar 50

function App() {

  
  return (
    <div className="App">
      <Form />
      <AllTasks />
    </div>
  );
}

export default App;
