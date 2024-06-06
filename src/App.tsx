import React from 'react';
import Header from './components/Home';
import HomeImage from './components/HomeImage';
import MainContent from './components/MainContent';
import UserForm from './components/UserForm';
import LoginPage from './components/LoginPage';
import { Routes, Route } from 'react-router-dom';
import ClientManager from "./components/ClientManager";
import PropertyManager from "./components/PropertyManager";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<><HomeImage /><MainContent /></>} />
                <Route path="/usuario" element={<UserForm />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/clientes" element={<ClientManager />} />
                <Route path="/imoveis" element={<PropertyManager />} />
            </Routes>
        </div>
    );
}

export default App;
