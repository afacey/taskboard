import React, { Component} from 'react';

class TaskItem extends Component {
  constructor(props) {
    super()

    this.state = {
      taskEdit: props.task,
      isEditing: false
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }

  handleEditSubmit = (evt) => {
    evt.preventDefault();
    this.props.editTask(this.props.id, this.state.taskEdit);
    this.toggleEdit();
  }

  removeTask = () => this.props.removeTask(this.props.id);
  
  toggleEdit = () => this.setState({isEditing: !this.state.isEditing})
  render() {

    const { id, task, status } = this.props;
  
    return(
      <>
        <li>
      { 
        status !== 'new' && <button onClick={ () => this.props.moveTask(id, status, -1)}>
        <span role="img" aria-label="move task to previous status">⬅️</span>
        </button>
      }
      { 
        !this.state.isEditing ? task : 
        <>
        <form action="#" onSubmit={this.handleEditSubmit}>
          <input type="text" id="taskEdit" name="taskEdit" onChange={this.handleChange} value={this.state.taskEdit}/>
          <button><span role="img" aria-label="save editing task">✅</span></button>
      <button type="button" onClick={this.toggleEdit}><span role="img" aria-label="cancel editing task">❌</span></button>
        </form>  
      <button onClick={this.removeTask}><span role="img" aria-label="delete task">🗑</span></button>
      </>
      }
        <button onClick={this.toggleEdit}>Edit</button>
      
      { status !== 'complete' && <button onClick={ () => this.props.moveTask(id, status, 1)}>
        <span role="img" aria-label="move task to next status">➡️</span>
        </button>}
        </li>
      </>
  
    ) 
  }

  // const moveTask = () => props.moveTask(id, status);
}

export default TaskItem;