import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
        <li className="taskItem">
      { 
        status !== 'open' && <button className="btn__task btn__task--prev" onClick={ () => this.props.moveTask(id, status, -1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      }
      { 
        !this.state.isEditing ? task : 
        <>
        <form action="#" onSubmit={this.handleEditSubmit}>
          {/* TODO remove autocomplete for submission */}
          <input type="text" id="taskEdit" name="taskEdit" onChange={this.handleChange} value={this.state.taskEdit} autoComplete="off"/>
          <button className="btn__task btn__task--save">Save</button>
          <button onClick={this.removeTask} className="btn__task btn__task--delete">Delete</button>
        </form>  
      </>
      }
        <button className="btn__task btn__task--edit" onClick={this.toggleEdit}>
          {this.state.isEditing ? 'Cancel' : 'Edit'}
        </button>
      
      { status !== 'complete' && <button className="btn__task btn__task--next" onClick={ () => this.props.moveTask(id, status, 1)}>
      <FontAwesomeIcon icon={faArrowRight} />
        </button>}
        </li>
      </>
  
    ) 
  }
}

export default TaskItem;