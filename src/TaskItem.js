import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import autosize from 'autosize'

class TaskItem extends Component {
  constructor(props) {
    super()

    this.state = {
      taskEdit: props.task,
      isEditing: false,
    }
  }

  componentDidUpdate() {
    const input = document.querySelector('#taskEdit');
    if (input) {
      autosize(input);
      input.focus();
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

  handleMovePrev = () => this.props.moveTask(this.props.id, this.props.status, -1);
  handleMoveNext = () => this.props.moveTask(this.props.id, this.props.status, 1);

  removeTask = () => this.props.removeTask(this.props.id);
  
  toggleEdit = () => { this.setState({ isEditing: !this.state.isEditing }); }

  render() {

    const { task, status } = this.props;
  
    return(
      <li className={`taskItem taskItem--${status}`} >
      
      {
        status !== 'open' &&
        <button className="btn__task btn__task--prev" onClick={this.handleMovePrev}>
          <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
          <span className="sr-only">Click to move task to the next status</span>
        </button>
      }
    
    { 
      !this.state.isEditing 
        ? <p className="taskItem__text" onClick={this.toggleEdit}>{task}</p> 
        :
          <form action="#" onSubmit={this.handleEditSubmit} className="clearfix">
            {/* TODO remove autocomplete for submission */}
            <textarea className="taskItem__editInput" id="taskEdit" name="taskEdit" onChange={this.handleChange} value={this.state.taskEdit}>
            </textarea>
            <button type="button" onClick={this.removeTask} className="btn__task btn__task--delete">Delete</button>
            <button type="button" onClick={this.toggleEdit} className="btn__task btn__task--edit">Cancel</button>
            <button className="btn__task btn__task--save">Save</button>
          </form>  
    }
      
    {
      status !== "complete" &&
        <button className="btn__task btn__task--next" onClick={this.handleMoveNext}>
          <FontAwesomeIcon icon={faChevronRight} aria-hidden="true"/>
          <span className="sr-only">Click to move task to the next status</span>
        </button>
    }
    </li>
    ) 
  }
}

export default TaskItem;