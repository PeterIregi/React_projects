
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const Content = () => {
    const [items ,setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One half pound of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: true,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

  return (
    <div className="App">
    <Header title="Store"/>

    <Content 
      items={items}
      setItems={setItems}
    />
      
    <Footer />

    </div>
  );
  }
}


export default App;
