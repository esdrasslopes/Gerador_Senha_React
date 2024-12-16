import { use } from "react";

import "./FormControl.css";

const FormControl = ({ id, content, type, placeholder, value,action }) => {

  function HandleState(e){
    action(e);
  }

  return (
    <div className="form-control">
      <label htmlFor={id}>{content}</label>
      {type === "text" || type === "email" || type === "password"? (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          defaultValue={value}
          onChange={HandleState}
        />
      ) : (
        <input
          type="checkbox"
          id={id}
          onChange={HandleState}
        />
      )}
    </div>
  );
};

export default FormControl;
