import "./Form.css";

import FormControl from "./FormControl";

import Password from "./Password";

import { useState } from "react";

const Form = ({
  getLetterLowerCase,
  getLetterUperCase,
  getNumbers,
  getSymbols
}) => {
  const [className, setClassName] = useState("hide");

  function handleToggle() {
    setClassName((prevClassName) =>
      prevClassName === "hide" ? "show" : "hide"
    );
  }

  return (
    <div id="register-form">
      <h2>Crie a sua conta</h2>
      <p>Registre-se para utilizar todas as funcionalidades do sistema</p>
      <FormControl
        id="name"
        placeholder="Digite o seu nome"
        type="text"
        content="Nome:"
      />
      <FormControl
        id="email"
        placeholder="Digite o seu email"
        type="email"
        content="Email:"
      />
      <FormControl
        id="password"
        placeholder="Digite a sua senha"
        type="password"
        content="Senha:"
      />
      <p>
        Quer ajuda para criar uma senha segura?{" "}
        <span id="open-generate-password" onClick={handleToggle}>
          Clique Aqui
        </span>
      </p>

      <Password
        className={className}
        getLetterLowerCase={getLetterLowerCase}
        getLetterUperCase={getLetterUperCase}
        getNumbers={getNumbers}
        getSymbols={getSymbols}
      />

      <FormControl
        id="confirm-password"
        placeholder="Confirme a sua senha"
        type="password"
        content="Confirmação de Senha:"
      />

      <input type="submit" value="Cadastrar" />
    </div>
  );
};

export default Form;
