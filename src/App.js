import './App.css';
import Navbar from './Compenents/Navbar';
import TaxtArea from './Compenents/TaxtArea';

function App() {
  return (
    <>
    <Navbar title="Text Converter" about="About"/>
    <TaxtArea heading="Enter Your Text To UpperCase / LowerCase"/>
    </>
  );
}

export default App;
