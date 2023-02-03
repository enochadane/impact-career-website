import React, { useReducer } from 'react';

const ActionKind = {
  INPUT: 'INPUT',
  BLUR: 'BLUR',
  RESET: 'RESET',
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.payload, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return state;
};

const useInput = (validation, initialValue) => {
  const initialInputState = {
    value: '',
    isTouched: false,
  };

  if (initialValue) {
    initialInputState.value = initialValue;
  }

  const [inputState, dispatch] = useReducer(inputStateReducer, {
    ...initialInputState,
  });

  const isValid = validation(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: ActionKind.INPUT, payload: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: ActionKind.BLUR });
  };

  const reset = () => {
    dispatch({ type: ActionKind.RESET });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
