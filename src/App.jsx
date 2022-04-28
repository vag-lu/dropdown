import DropDown from './components/dropdown';
import Item from './components/item';
import './App.css'

function App() {
  return (
    <div className='App' style={{margin: "0 20%"}}>
      <DropDown iconStyle={{width: "32", height: "32"}} position="right">
        <Item>Rename</Item>
        <Item>Delete</Item>
        <Item>Share</Item>
       </DropDown>
    </div>
  );
}

export default App;
