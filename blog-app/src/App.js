import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import BlogPost, { Comments } from './pages/BlogPost.js';

const router = createBrowserRouter([
    {
        element: <Layout />, // Layout component wrapping the nested routes
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/post/:slug",
                element: <BlogPost />
            },
            {
                path: "/comments",
                element: <Comments />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;