import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/General.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/HomePage.scss';
import './styles/EducationPage.scss';
import HomePage from './routes/HomePage';
import EducationPage from './routes/EducationPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'experience',
        element: <div>Experience page</div>,
    },
    {
        path: 'education',
        element: <EducationPage />,
    },
    {
        path: 'hobbies',
        element: <div>Hobbies page</div>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
