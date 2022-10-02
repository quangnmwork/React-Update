import { useReducer } from "react";
import HooksLayout from "~/layout/HooksLayout";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement": {
      console.log("Decrease");
      return { count: state.count - action.payload };
    }
    default:
      throw new Error();
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <HooksLayout>
      <div className="text-center my-5">
        <p> Count: {state.count}</p>
        <button
          onClick={() => dispatch({ type: "decrement", payload: 5 })}
          className="btn"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "increment", payload: 5 })}
          className="btn ml-2"
        >
          +
        </button>
      </div>
    </HooksLayout>
  );
};
export default Reducer;
