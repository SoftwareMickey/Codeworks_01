import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import LandingPage from './pages/LandingPage/LandingPage';
import ContactsPage from './pages/Contacts';
import AboutPage from './pages/About/About';
import Services from './pages/Services/Services';

const route = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        errorElement: '',
        children: [
            {index: true, path: '', element: <LandingPage/>},
            {path: 'services', element: <Services/>},
            {path: 'contacts', element: <ContactsPage/>},
            {path: 'about', element: <AboutPage/>}
        ]
    }
])

function App() {
    return <RouterProvider router={route}/>
}

export default App
