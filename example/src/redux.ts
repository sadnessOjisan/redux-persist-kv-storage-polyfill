import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "../../dist/index";
const TOGGLE_ACTION_TYPE = "TOGGLE_ACTION_TYPE" as const;

export const toggle = () => {
  return {
    type: TOGGLE_ACTION_TYPE,
  };
};

type ActionType = ReturnType<typeof toggle>;

export type State = {
  flg: boolean;
};

const initialState: State = {
  flg: false,
};

const reducer = (state: State = initialState, action: ActionType) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_ACTION_TYPE:
      return {
        ...state,
        flg: !state.flg,
      };
    default:
      return state;
  }
};

const storage = createWebStorage();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const configureStore = () => {
  const store = createStore(persistedReducer);
  return {
    store,
    persistor: persistStore(store),
  };
};
