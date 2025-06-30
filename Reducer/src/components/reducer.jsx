import React, { useReducer } from "react";

const CoutChanger = (state, action) => {
  const current = state[0];
 
  switch (action.type) {
    case "increase":
      if (action.subtype1 && action.subtype2) {
        return [{
          count: current.count + 1,
          age: current.age + 1
        }];
      }
      else if (action.subtype == "count") {
        return [{
          count: current.count + 1,
          age: current.age
        }];
      }
      else {
        return [{
          count: current.count,
          age: current.age + 1
        }];
      }
    case "decrease":
      if (action.subtype1 && action.subtype2) {
        return [{
          count: current.count > 0 ? current.count - 1 : 0,
          age: current.age > 25 ? current.age - 1 : 0
        }];
      }
      else if (action.subtype == "count") {
        return [{
          count: current.count > 0 ? current.count - 1 : 0,
          age: current.age
        }];
      }
      else {
        return [{
          count: current.count,
          age: current.age > 25 ? current.age - 1 : 0
        }];
      }
    case "reset":
      if (action.subtype1 && action.subtype2) {
        return [{
          count: 0,
          age: 25
        }];
      }
      else if (action.subtype == "count") {
        return [{
          count: 0,
          age: current.age
        }];
      }
      else {
        return [{
          count: current.count,
          age: 25
        }];
      }
    default:
      return state;
  }
};



function Reducer() {
  const [data, dispatch] = useReducer(CoutChanger, [{ count: 0, age: 25 }]);
  return (
    <div className="bg-black p-5 rounded-md w-[600px]">
      <div className="flex justify-center gap-2 border-1 border-white rounded-md p-3">
        <h1 className="text-white font-bold">Count :{data[0].count}</h1>
        <h1 className="text-white font-bold">Age :{data[0].age}</h1>
      </div>

      <div className="flex justify-between mt-5">
        <button
          onClick={() => dispatch({ type: "increase", subtype: "count" })}
          className="p-1 m-1"
        >
          increase Count
        </button>
        <button
          onClick={() => dispatch({ type: "decrease", subtype: "count" })}
          className="p-1 m-1"
        >
          decrease Count
        </button>
        <button
          onClick={() => dispatch({ type: "reset", subtype: "count" })}
          className="p-1 m-1"
        >
          reset Count
        </button>
      </div>

      <div className="flex justify-between mt-5">
        <button
          onClick={() => dispatch({ type: "increase", subtype: "Age" })}
          className="p-1 m-1"
        >
          increase Age
        </button>
        <button
          onClick={() => dispatch({ type: "decrease", subtype: "Age" })}
          className="p-1 m-1"
        >
          decrease Age
        </button>
        <button
          onClick={() => dispatch({ type: "reset", subtype: "Age" })}
          className="p-1 m-1"
        >
          reset Age
        </button>
      </div>

      <div className="flex justify-between mt-5">
        <button
          onClick={() =>
            dispatch({ type: "increase", subtype1: "Age", subtype2: "count" })
          }
          className="p-1 m-1"
        >
          increase Both
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrease", subtype1: "Age", subtype2: "count" })
          }
          className="p-1 m-1"
        >
          decrease Both
        </button>
        <button
          onClick={() =>
            dispatch({ type: "reset", subtype1: "Age", subtype2: "count" })
          }
          className="p-1 m-1"
        >
          reset Both
        </button>
      </div>
    </div>
  );
}
export default Reducer;
