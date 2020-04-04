import * as React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, State, toggle } from "./redux";

const store = configureStore();

const Root = () => {
  const dipatch = useDispatch();
  const state = useSelector((state: State) => state);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <button
        onClick={() => {
          dipatch(toggle());
        }}
      >
        toggle!
      </button>
      <div>now state is ... {state.flg ? "ON" : "OFF"}</div>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root></Root>
  </Provider>,
  document.getElementById("root")
);
