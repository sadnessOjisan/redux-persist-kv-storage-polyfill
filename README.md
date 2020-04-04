# redux-persist-kv-storage-polyfill

Storage adapter to use [kv-storage](https://github.com/GoogleChromeLabs/kv-storage-polyfill) for redux-persist.

## Installation

```
npm install --save redux-persist-kv-storage-polyfill
```

or

```
yarn add redux-persist-kv-storage-polyfill
```

## How to use

For detail, please see [example](https://github.com/sadnessOjisan/redux-persist-kv-storage-polyfill/tree/master/example/src).

```ts
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist-kv-storage-polyfill";

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
```
