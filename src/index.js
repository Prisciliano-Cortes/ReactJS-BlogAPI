import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Blog from './components/routes/Blog';
import Contacto from './components/routes/Contacto';
import Inicio from './components/routes/Inicio';
import NoEncontrada from './components/routes/NoEncontrado';
import Post from './components/routes/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Inicio />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<Post />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="*" element={<NoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

