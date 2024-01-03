import { useState } from "react";
import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from './components/SecondTask/SecondTask'



function App() {
  const [firstTask, setFirstTask] = useState(true);


  const styleButton = {
    padding: '5px 15px', 
    borderRadius: 8, 
    border: 'none', 
    cursor: 'pointer'
  }

  const styleHeader = {
    padding: 20, 
    backgroundColor: 'gray', 
    display: 'flex', 
    justifyContent: 'flex-end', 
    gap:20
  }

  return (
    <div className="App" style={{maxWidth: 1200, margin: '0 auto'}}>
      <nav style={styleHeader}>
        <button style={styleButton} onClick={() => setFirstTask(true)}>float</button>
        <button style={styleButton} onClick={() => setFirstTask(false)}>flex</button>
      </nav>
      {firstTask === true ? 
        <>
          <h1 style={{textAlign: 'center'}}>Використання float</h1>
          <FirstTask/>
        </>
        
        : 
        
        <>
          <h1 style={{textAlign: 'center'}}>Використання flex</h1>
          <SecondTask/>
        </>}
      
    </div>
  );
}

export default App;
