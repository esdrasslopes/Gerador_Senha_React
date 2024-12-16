import "./App.css";

import Banner from "./components/Banner";

import Form from "./components/Form";

function App() {
  function getLetterLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getLetterUperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getNumbers() {
    return Math.random(Math.random() * 10).toString();
  }

  function getSymbols() {
    const symbols = "(){}[]=<>/,.!@#$%&*";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  return (
    <div id="register-container">
      <Banner />
      <Form
        getLetterLowerCase={getLetterLowerCase}
        getLetterUperCase={getLetterUperCase}
        getNumbers={getNumbers}
        getSymbols={getSymbols}
      />
    </div>
  );
}

export default App;
