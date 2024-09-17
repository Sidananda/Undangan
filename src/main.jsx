
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import router from './router';


import 'primereact/resources/themes/saga-blue/theme.css';  // Tema PrimeReact (bisa disesuaikan)
import 'primereact/resources/primereact.min.css';          // Gaya dasar PrimeReact
import 'primeicons/primeicons.css';                        // Ikon PrimeIcons

import './styles/Tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
