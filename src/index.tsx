import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserContext from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';
import TasksContext from './contexts/TasksContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <ThemeContext>
        <TasksContext>
          <App />
        </TasksContext>
      </ThemeContext>
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
