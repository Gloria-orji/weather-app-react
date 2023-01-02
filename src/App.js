import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/Gloria-orji/weather-app-react"
            rel="noopener noreferrer"
          >
            opensource on GitHub
          </a>
          and
          <a
            href="https://chimerical-hotteok-4e2015.netlify.app/"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          by Gloria Orji
        </footer>
      </div>
    </div>
  );
}

export default App;
