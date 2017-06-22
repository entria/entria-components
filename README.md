# Entria Components

## Install

```
npm i @entria/components --save
yarn add @entria/components
```

## Config

The Redux store should know how to handle actions coming from the components:

```js
import { createStore, combineReducers } from 'redux';
import { reducers as entriaComponentsReducers } from '@entria/components';

const rootReducer = combineReducers({
  // ...your other reducers here
  ...entriaComponentsReducers,
});

const store = createStore(rootReducer);
```
