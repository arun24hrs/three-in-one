import logo from './logo.svg';
import './App.css';
import TempConverter from './components/TempConverter';

function App() {
  return (
    <div className="App">
      <h1 id='heading'>Temperature Converter</h1>
      <TempConverter/>
    </div>
  );
}

export default App;
