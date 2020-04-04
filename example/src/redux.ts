import { createStore } from "redux";

const TOGGLE_ACTION_TYPE = "TOGGLE_ACTION_TYPE" as const;

const toggle = () => {
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

export const configureStore = () => createStore(reducer);
