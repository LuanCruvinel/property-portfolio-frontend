import React, {useState} from 'react';
import axios from 'axios';
import {TextField, Button, Typography, Container, Box} from '@mui/material';

function UserForm() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/usuario', {
                name,
                userName,
                email,
                password
            });
            alert('Usuário cadastrado com sucesso!');
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('Erro desconhecido ao cadastrar usuário.');
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Cadastre-se
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Nome"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Login"
                        name="username"
                        autoComplete="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Senha"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default UserForm;
