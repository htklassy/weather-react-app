import Weather from "./Weather.js";
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Weather city="Denver" />
        <small>
        <a href="https://github.com/htklassy/weather-app-week7" target="_blank" rel="noreferrer">Open-source code</a> by Lynn Nguyen
        </small>
    </div>
  );
}

export default App;
