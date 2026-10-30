import Square from './Square';
import Input from './Input';
import { useState } from 'react';


function App() {
  const [ colorValue, setColorValue] = useState('');
  return (
    <div className="App">
     <h1> Hello !</h1>
     <Square 
      colorValue={ colorValue}
     />
     <Input
     colorValue={ colorValue }
     setColorValue={ setColorValue }
     />

    </div>
  );
}

export default App;
