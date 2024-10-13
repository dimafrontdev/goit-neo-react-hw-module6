import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice.js";
import { filtersReducer } from "./filtersSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const contactsPersistConfig = {
  key: "root",
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
