import authReducer from './features/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuración de persistencia
const persistConfig = {
    key: 'root',
    storage,
};

// Envuelve el authReducer con persistencia
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer, // Ajuste importante: usa un objeto de reducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Esto evita errores con la persistencia
        }),
});

// Configuración de los listeners de la store
setupListeners(store.dispatch);

// Persister para la persistencia de la store
export const persistor = persistStore(store);

// Tipos para el estado global y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
