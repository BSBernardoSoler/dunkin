"use client"
import React from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Cargando...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Providers;
