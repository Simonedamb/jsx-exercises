import logo from "./logo.svg";
import "./App.css";

const hello = <h1>Hello, World!;</h1>;

const welcome = (name) => {
  return <h1>{name}</h1>;
};

const result = (num1, num2) => {
  return <h2>{num1 + num2}</h2>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {hello}
        {welcome("Simone")}
        {result(10, 10)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
