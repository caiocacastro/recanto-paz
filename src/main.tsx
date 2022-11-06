import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages';
import configureStore from './store/configureStore';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from './theme';

const { store, persist } = configureStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
