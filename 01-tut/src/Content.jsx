import { useState } from 'react' ;

const Content = () => {
    const [name, setName] = useState('Peter');
    const [count, setCount] = useState(0); 
    const handleNameChange = () =>{
    const names = ['Bob', 'Kevin','Peter'];
    const int  = Math.floor(Math.random()*3);
    setName(names[int]);
  }
const handleClick = () => {
    setCount(count+1)
    console.log(count)
  }
const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
}
const handleClick3 = (e) => {
    console.log(e.target.innerText)
}
    return(
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>change Name</button>
            <button onClick={() => handleClick()}>Click Me</button>
            <button onClick={(e) =>{handleClick3(e)}}>Click me</button>
        </main>
    )
}
export default Content