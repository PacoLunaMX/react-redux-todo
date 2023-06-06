import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Route, Routes} from 'react-router-dom'

function App() {


  return (
        <Routes>        
          <Route path='/' element={<TaskList />}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
  );
}

export default App;
