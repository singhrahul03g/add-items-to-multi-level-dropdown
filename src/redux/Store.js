import { configureStore } from '@reduxjs/toolkit'
import treeReducer from './Reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'items',
  storage,
}

const persistedReducer = persistReducer(persistConfig, treeReducer)


  export const store = configureStore({
    reducer: {
      items: persistedReducer
    },
  })

  export const persistor = persistStore(store)



// export const store = configureStore({
//   reducer: {
//     items: treeReducer
//   },
// })