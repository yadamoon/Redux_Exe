import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  resetCoin,
} from "../Features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div className="space-x-3 text-center justifay-center space-y-4">
      <hr />
      <button
        className="bg-green-500 p-2 text-white rounded"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>

      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>

      <button
        className="bg-green-500 p-2 text-white rounded"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        IncrementBy 10
      </button>

      <button
        className="bg-red-800 text-white p-2 rounded"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
      >
        DecrementBy 10
      </button>

      <button
        className="text-white bg-gray-600"
        onClick={() => {
          dispatch(resetCoin(0));
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
