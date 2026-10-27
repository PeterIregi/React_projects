
import Header from './Header';
import AddItem from './AddItem'
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() { 
    const [items ,setNewItems] = useState (JSON.parse(localStorage.getItem('shoppinglist')));
    const [search, setSearch] = useState("");
    const setAndSaveItems = (newItems)=>{
        setNewItems(newItems)
        localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }
    

    const [newItem, setNewItem]  = useState("")
    const addItem = (item) => {
        const id = items.length ? items[items.length-1].id +1 : 1;
        const myNewItem = {id, checked: false, item};
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems);

    }
    const handleCheck = (id)=>{
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } :item);
        setAndSaveItems(listItems);
    }

    const handleDelete = (id)=>{
        const listItems = items.filter((item)=> item.id !== id);
        setAndSaveItems(listItems);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem("");
        
    }

  return (
    <div className="App">
    <Header title="Groceries list"/>
    <SearchItem
        search={search}
        setSearch={setSearch}
    />
    <AddItem 
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />
    <Content 
      items={items}
      
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
      
    <Footer 
    length={items.length}/>

    </div>
  );
  }




export default App;
