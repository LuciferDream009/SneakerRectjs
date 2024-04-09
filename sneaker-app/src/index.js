import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 <QueryClientProvider client={queryClient}>
   <Provider store={store}>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
//</React.StrictMode>
);

reportWebVitals();
