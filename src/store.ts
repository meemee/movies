import { configureStore } from '@reduxjs/toolkit';
import DevTools from './components/DevTools';
import rootReducer from './reducers';

const enhancers = [];
if (process.env.NODE_ENV === 'development') enhancers.push(DevTools.instrument())

const store = configureStore({
  reducer: rootReducer,
  devTools: {},
  enhancers: enhancers
})

export default store