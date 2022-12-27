import { useCallback, useReducer } from "react";
const formReducer = (state, action) => {
  switch (action.TYPE) {
    case "SET_DATA":
      return {
        inputs: action.inputs,
        formIsValid: action.formIsValid,
      };
    case "INPUT_CHANGE":
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (!state.inputs[inputId]) {
            continue;
          }
          if (inputId === action.id) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.id]: {
              value: action.value,
              isValid: action.isValid,
            },
          },
          formIsValid: formIsValid
        };
      
     
    default:
      return state;
  }
};
const useForm = (initialInputs, initialInputsValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    formIsValid: initialInputsValidity,
  });

  const inpuHandler = useCallback((id, value, isValid) => {
    // console.log(id + ":"+value);
    dispatch({
      TYPE: "INPUT_CHANGE",
      id: id,
      value: value,
      isValid: isValid,
    });
  }, []);

  const setFormData = useCallback((inputs, formValidity) => {
    dispatch({
      TYPE: "SET_DATA",
      inputs: inputs,
      formIsValid: formValidity,
    });
  }, []);
  return  [formState, inpuHandler ];
};

export default useForm;
