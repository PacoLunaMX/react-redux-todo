import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const taskState = useSelector( state => state.tasks)


  return (
    <div className="App">
      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
