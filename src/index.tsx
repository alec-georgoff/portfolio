import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/General.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/HomePage.scss';
import './styles/EducationPage.scss';
import './styles/ExperiencePage.scss';
import './styles/Components.scss';
import HomePage from './routes/HomePage';
import EducationPage from './routes/EducationPage';
import ExperiencePage from './routes/ExperiencePage';
import ApplicationWrapper from './components/ApplicationWrapper';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ApplicationWrapper>
                <HomePage />
            </ApplicationWrapper>
        ),
    },
    {
        path: 'experience',
        element: (
            <ApplicationWrapper>
                <ExperiencePage />
            </ApplicationWrapper>
        ),
    },
    {
        path: 'education',
        element: (
            <ApplicationWrapper>
                <EducationPage />
            </ApplicationWrapper>
        ),
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
