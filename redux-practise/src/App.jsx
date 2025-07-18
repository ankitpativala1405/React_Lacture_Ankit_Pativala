import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add_cake , add_ice_cream } from "./redux/Action";

const App = () => {

  const count = useSelector((state) => state);

  console.log(count);

  const dispatch = useDispatch();

  return (
    <>
      <div className="head">App</div>
      <div className="btn">{count.case1.cake1}</div>
      <div className="btn">{count.case1.ice_cream1}</div>
        <div className="btn">{count.case2.cake2}</div>
      <div className="btn">{count.case2.ice_cream2}</div>
      <button className="btn" onClick={() => dispatch(add_cake())}>add cake</button>
      <button className="btn" onClick={() => dispatch(add_ice_cream())}>add ice_cream</button>
    </>
  );
};

export default App;
