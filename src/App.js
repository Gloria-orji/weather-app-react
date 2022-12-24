import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/Gloria-orji/weather-react">
            opensource on GitHub
          </a>
          and
          <a href="https://chimerical-hotteok-4e2015.netlify.app/">
            hosted on Netlify
          </a>
          by Gloria Orji
        </footer>
      </div>
    </div>
  );
}

export default App;
