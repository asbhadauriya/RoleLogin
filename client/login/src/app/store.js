import { configureStore, createStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { userSlice } from '../services/auth.service';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { AnyAction,Reducer } from '@reduxjs/toolkit';



const reducers = combineReducers({
    user: userSlice.reducer,
  });

  const persistConfig = {
    key: 'root',
    storage,
  }

 
  

  const persistedReducer = persistReducer(persistConfig, reducers)
 

  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;

//   export default configureStore({

//       reducer: persistedReducer,
//       devTools: process.env.NODE_ENV !== 'production',
//       middleware: [thunk],


// });