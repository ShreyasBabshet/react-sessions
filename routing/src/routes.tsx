import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EducationPage from "./pages/EducationPage/EducationPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";


export const routes = createBrowserRouter([
    {
        path: '',
        element: <App />,

        children: [
            { 
                path: 'home', 
                element: <HomePage />,
                children: [
                    { path: 'profile', element: <ProfilePage />  },
                    { path: 'education', element: <EducationPage />  }
                ]
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            }
        ]
    }
]);