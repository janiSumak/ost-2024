import './App.css';
import Inova from "../../public/inova.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Inova} alt="Inova IT Logo" className="App-logo" />
        <h1 className="App-title">INOVA IT</h1>
        <p className="App-description">
          We are an exceptional team of engineers, designers and artists who research, design and
          develop mobile solutions that people love.
        </p>
      </header>
    </div>
  );
}

export default App;
