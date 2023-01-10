import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../Feature/employeesSlice";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export const store = configureStore({
    reducer: {
      employeesList: employeesReducer,
    }
});

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, employeesReducer)

// export const store = configureStore({
//   // Reducer "employeesList: employeesReducer" remplacé par persistedReducer
//   // persistedReducer est un Reducer amélioré avec possibilité de "persistence" du loginReducer sur le localStorage
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   // middleware: [thunk] => already included in configureStore
// })

// // On passe le store en paramètre de persistStore qui est la fonction qui va "persists & rehydrates" le State
// export const persistor = persistStore(store)