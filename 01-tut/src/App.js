import logo from './logo.svg';
import './App.css';

function App() {
  const handlenameChange = () =>{
    const names = ['Bob', 'Kevin','Peter'];
    const int  = Math.floor(Math.random()*3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handlenameChange()}! 
        </p>
       
        {/*<p>
          {"Peter"}<br></br>
          {[1, 2, 3]}
        </p>*/}
      </header>

    </div>
  );
}

export default App;
