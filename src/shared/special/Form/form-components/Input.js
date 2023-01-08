import { validate } from "../../../../validator/validators";
import { useEffect, useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.TYPE) {
    case "INPUT":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validator) || false,
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};
const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });
  const inputChangeHandler = (event) => {
    dispatch({
      TYPE: "INPUT",
      val: event.target.value,
      validator: props.validator,
    });
  };

  const touchHandler = () => {
    dispatch({
      TYPE: "TOUCH",
    });
  };
  const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  if (props.textAria) {
    return (
      <div className={`input  ${
        !inputState.isValid && inputState.isTouched && "input--invalid"
      }`}>
        <label
          htmlFor="textaria"
          value={props.label}
          onChange={inputChangeHandler}
          className={
            props.labelClassName ? props.labelClassName : ""
          }
        >{props.label}</label>
        <textarea
          id="textaria"
          name = {props.name}

          placeholder={props.placeholder}
          value={props.value}
          onChange={inputChangeHandler}
          onBlur= {touchHandler}
          className={props.inputClassName ? props.inputClassName : ""}
          rows={props.rows ? props.rows : 5}
        />
      </div>
    );
  }
  return (
    <div
      className={`input ${
        !inputState.isValid && inputState.isTouched && "input--invalid"
      }`}
    >
      <label
        htmlFor="input"
        className={` ${props.labelClassName ? props.labelClassName : ""}`}
      >
        {props.label}
      </label>
      <input
        onChange={inputChangeHandler}
        name = {props.name}
        onBlur={touchHandler}
        value={props.value}
        placeholder = {props.placeholder}
        className={` ${props.inputClassName ? props.inputClassName : ""}`}
        id="input"
      />
    </div>
  );
};
export default Input;
