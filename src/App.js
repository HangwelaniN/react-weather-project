import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Johannesburg" />
        <footer>
          This code was coded by Hangwelani Ngwekhulu and is{" "}
          <a
            href="https://github.com/HangwelaniN/weather-appl-react/tree/main/my-app"
            target="blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
