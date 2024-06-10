import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';

export const routes = createBrowserRouter([
    { 
        path: '', 
        element: <App />,
        children: [
            { path: ':id', element: <ProfileDetails /> }
        ]
    }
]);