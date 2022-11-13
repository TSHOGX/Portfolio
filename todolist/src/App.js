// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    // this.repl_url = "http://3.134.81.74:8000"
    this.repl_url = "http://127.0.0.1:8000"
    this.state = {
      todoList:[],
      activeItem:{
        id:null,
        title:'',
        complete:false,
      },
      editing:false,
    }

    this.fetchTasks = this.fetchTasks.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.startEdit = this.startEdit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.completeItem = this.completeItem.bind(this)
  };

  componentDidMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    console.log('Fetching...')

    fetch(`${this.repl_url}/api/task-list/`)
    .then(Response => Response.json())
    // .then(data=>console.log(data))
    .then(data =>
      this.setState({
        todoList:data
      })
      )
  }

  handleChange(e){
    var name = e.target.name
    var value = e.target.value
    console.log('Name:', name)
    console.log('Value:', value)

    this.setState({
      activeItem:{
        ...this.state.activeItem,
        title:value
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('ITEM:', this.state.activeItem);

    var url = `${this.repl_url}/api/task-create/`

    if(this.state.editing === true){
      url = `${this.repl_url}/api/task-update/${this.state.activeItem.id}/`
      this.setState({
        editing:false
      })
    }

    fetch(url, {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(this.state.activeItem)
    }).then((Response) => {
      this.fetchTasks()  // fetch again for the new submition
      this.setState({  // clear the input box
        activeItem:{
          id:null,
          title:'',
          complete:false,
        }
      })
    }).catch(function(error){
      console.log('ERROR:', error)
    })
  }

  startEdit(task){
    this.setState({
      activeItem:task,
      editing:true,
    })
  }

  deleteItem(task){
    fetch(`${this.repl_url}/api/task-delete/${task.id}/`, {
      method:'DELETE',
      headers:{
        'Content-type':'application/json',
      },
    }).then((Response) => {
      this.fetchTasks()
    })
  }

  completeItem(task){
    task.completed = !task.completed
    fetch(`${this.repl_url}/api/task-update/${task.id}/`, {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify({'completed':task.completed, 'title':task.title}),
    }).then((Response) => {
      this.fetchTasks()
    })
  }

  render(){
    var tasks = this.state.todoList
    var self = this  // allow loop this.startEdit to self.startEdit

    return(
      <div className='container'>

        <div id='task-container'>

          <div id='form-wrapper'>
            <form onSubmit={this.handleSubmit} id='form'>
              <div className='flex-wrapper'>
                <div style={{flex: 6}}>
                  <input onChange={this.handleChange} className='form-control' id='title' value={this.state.activeItem.title} type="text" name="title" placeholder='Add new task here' />
                </div>
                <div style={{flex: 1}}>
                  <input id='submit' className='btn btn-warpping' type="submit" name="Add" />
                </div>
              </div>
            </form>
          </div>

          <div id='list-wrapper'>
            {tasks.map(function(task, index){
              return(
                <div key={index} className="task-wrapper flex-wrapper">
                  
                  <div onClick={() => self.completeItem(task)} style={{flex:7}}>
                    {task.completed === false ? (
                      <span>{task.title}</span>
                    ) : (
                      <strike>{task.title}</strike>
                    )}
                  </div>

                  <div style={{flex:1}}>
                    <button onClick={() => self.startEdit(task)} className="btn btn-sm btn-outline-info">Edit</button>
                  </div>

                  <div style={{flex:1}}>
                    <button onClick={() => self.deleteItem(task)} className="btn btn-sm btn-outline-dark delete">-</button>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    )
  }
}

export default App;
