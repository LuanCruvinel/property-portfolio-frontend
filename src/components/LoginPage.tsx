import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, TextField} from '@mui/material';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}

export default LoginPage;
