import DropDown from './components/dropdown';
import Item from './components/item';

function App() {
  return (
    <div style={{margin: "0 20%"}}>
      <DropDown iconStyle={{width: "32", height: "32"}} position="right">
        <Item>Rename</Item>
        <Item>Delete</Item>
        <Item>Share</Item>
        <Item><button>Click here!</button></Item>
       </DropDown>
    </div>
  );
}

export default App;
