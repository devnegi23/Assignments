import {applyMiddleware,configureStore} from '@reduxjs/toolkit';
import LoginReducer from './LoginReducer';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


// export default function configureStore(){
//     const middleWare =[thunkMiddleware]
//     const middleWareEnhancer = applyMiddleware(...middleWare)
// }
export const store = configureStore({
  reducer: {LoginReducer: LoginReducer},
  middleware:[thunk,logger]
});
