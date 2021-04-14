import './App.css';
import Home from './components/Home.jsx' ;
import { connect } from 'react-redux';
import { addTask,getData } from './actions';
function App({ appState, addNewTask, getNewData}) {
  function handleAddTask(){
    const task =document.querySelector('.task').value;
    addNewTask(task);
    getNewData();

  }

  return (
    <div className="App">
      <Home></Home>
      {/* <h1>All your tasks</h1>
      <div className='tasks'>
        {
          appState.tasks.map((task)=>(
            <p>{task}</p>
          ))
        }
        {console.log(appState)}
      </div>
      <input type="text"className="task"/>
      <button onClick={handleAddTask}>Add task</button> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  appState: state,
});


const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(addTask(task)),
  getNewData: () => dispatch(getData),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
