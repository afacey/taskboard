import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext.js';
import Header from './components/Header.js';
import TaskBoardMenu from './components/TaskBoardMenu.js';
import TaskLists from './components/TaskLists.js';
import Footer from './components/Footer.js';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
  <div className={`pageContainer ${theme}`}>
    {/* START of HEADER */}
    <Header />
    
    {/* START of MAIN */}
    <main>
      <div className="wrapper">
        <TaskBoardMenu />
        <TaskLists />
      </div>
    </main>

    {/* START of FOOTER */}
    <Footer />
  </div>
  );
}

export default App;
