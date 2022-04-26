import React, {useReducer} from "react";

const reducer = (state, action) => {
switch (action.type) {
  case "INCREMENT":
    return {count: state.count + 1, showText: state.showText}
    case "toggleShowText":
      return { count: state.count, showText: !state.showText}
      default:
        return state
}
};

const ReducerTutorial = () => {
   const [state, dispatch] = useReducer(reducer,
    {count: 0, showText: true}) 

  return (
    <div>
      <h1>{state.count}</h1>
      <button 
      onClick={() => {
        dispatch({ type: "INCREMENT"});
        dispatch({type: "toggleShowText"});
      }}>
    Click Here
    </button>
    {state.showText && <p>This a text</p>}
      </div>
  );
};

export default ReducerTutorial;

//When the page rerenders the variables change
//executing many actions at the same time in a single system state to keep track of all changes with the onclick function