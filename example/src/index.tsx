import * as React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore, State, toggle } from "./redux";

const { store, persistor } = configureStore();

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
    <PersistGate persistor={persistor}>
      <Root></Root>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
