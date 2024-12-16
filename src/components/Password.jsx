import "./Password.css";

import FormControl from "./FormControl";

import { useState } from "react";

const Password = ({
  className,
  getLetterLowerCase,
  getLetterUperCase,
  getNumbers,
  getSymbols,
}) => {
  const [characters, setCharacters] = useState(10);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [letters, setLetters] = useState(false);
  const [password, setpassword] = useState("");
  const [Visiblepassword, setVisiblepassword] = useState(false);
  const [copy, setCopy] = useState("Copiar");

  const charactersNumber = (e) => {
    setCharacters(e.target.value);
  };

  const NumbersCheck = (e) => {
    setNumbers(e.target.checked);
  };

  const SymbolCheck = (e) => {
    setSymbols(e.target.checked);
  };

  const LetterCheck = (e) => {
    setLetters(e.target.checked);
  };

  const generatePassword = () => {

    let newPassword = "";

    const lengthpassword = characters;

    let generators = [];

    if (numbers === true) {
      generators.push(getNumbers);
    }

    if (letters === true) {
      generators.push(getLetterLowerCase, getLetterUperCase);
    }

    if (symbols === true) {
      generators.push(getSymbols);
    }

    if (generators.length === 0) return;

    for (let i = 0; i < lengthpassword; i += generators.length) {
      generators.forEach(() => {
        const random =
          generators[Math.floor(Math.random() * generators.length)]();

          newPassword += random;
        
      });
    }

    newPassword = newPassword.slice(0, lengthpassword)

    setpassword(newPassword);

    setVisiblepassword(true);

  };

  const copyPassword = (e) =>{
    e.preventDefault();

    navigator.clipboard.writeText(password).then(()=>{
        setCopy("Senha copiada com sucesso!");

        setTimeout(()=>{
          setCopy("Copiar")
        },1000)
    })
  }

  return (
    <>
      <div id="generate-options" className={className}>
        <p>Selecione as opções que você deseja</p>

        <FormControl
          id="length"
          type="text"
          content="Quantidade de caracteres"
          value={characters}
          action={(e) => charactersNumber(e)}
        />

        <FormControl
          id="letters"
          type="checkbox"
          content="Letras"
          action={(e) => LetterCheck(e)}
        />

        <FormControl
          id="numbers"
          type="checkbox"
          content="Números"
          action={(e) => NumbersCheck(e)}
        />

        <FormControl
          id="symbols"
          type="checkbox"
          content="Símbolos"
          action={(e) => SymbolCheck(e)}
        />

        <button id="generate-password" onClick={generatePassword}>Criar senha</button>
      </div>

      <div id="generated-password" style={Visiblepassword ? { display: "block" } : {display : "none"}}>
        <p>Aqui está a sua senha:</p>
        <h4>{password}</h4>
        <button id="copy-password" onClick={(e)=> copyPassword(e)}>{copy}</button>
      </div>
    </>
  );
};

export default Password;
