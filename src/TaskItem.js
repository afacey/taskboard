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

  componentDidUpdate() {
    const input = document.querySelector('#taskEdit');
    input && input.focus();
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
        <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
        <span className="sr-only">Click to move task to the next status</span>
        </button>
      }
      { 
        !this.state.isEditing 
          ? <p onClick={this.toggleEdit}>{task}</p> 
          : <>
              <form action="#" onSubmit={this.handleEditSubmit}>
                {/* TODO remove autocomplete for submission */}
                <input type="text" id="taskEdit" name="taskEdit" onBlur={this.toggleEdit} onChange={this.handleChange} value={this.state.taskEdit} autoComplete="off"/>
                <button className="btn__task btn__task--save">Save</button>
                <button onClick={this.removeTask} className="btn__task btn__task--delete">Delete</button>
              </form>  
            </>
      }
        {/* <button className="btn__task btn__task--edit" onClick={this.toggleEdit}>
          {this.state.isEditing ? 'Cancel' : 'Edit'}
        </button> */}
      
      { status !== 'complete' && <button className="btn__task btn__task--next" onClick={ () => this.props.moveTask(id, status, 1)}>
      <FontAwesomeIcon icon={faArrowRight} aria-hidden="true"/>
      <span className="sr-only">Click to move task to the next status</span>

        </button>}
        </li>
      </>
  
    ) 
  }
}

export default TaskItem;