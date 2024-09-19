import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "./context/RouterProvider.jsx";
import {router} from "./context/router.jsx";


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
