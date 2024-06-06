import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function ClientManager() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const clearFields = () => {
        setName('');
        setCpf('');
        setPhoneNumber('');
        setAddress('');
        setCity('');
    };

    const handleSearch = async () => {
        clearFields();
        try {
            const response = await axios.get(`http://localhost:3000/clientes/${id}`);
            const { name, cpf, phoneNumber, address, city } = response.data;
            setName(name);
            setCpf(cpf);
            setPhoneNumber(phoneNumber);
            setAddress(address);
            setCity(city);
        } catch (error) {
            clearFields();
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/clientes/${id}`);
            alert('Cliente removido com sucesso!');
            clearFields();

        } catch (error) {
            alert('Erro ao remover o cliente!');
            clearFields();
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/clientes', {
                name,
                cpf,
                phoneNumber,
                address,
                city
            });
            alert('Cliente cadastrado com sucesso!');
            clearFields();
        } catch (error) {
            alert('Erro ao cadastrar cliente!');
            clearFields();
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
                    Gestão de Clientes
                </Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="ID do Cliente"
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <Button onClick={handleSearch} variant="contained" sx={{ mt: 1, mb: 2 }}>
                    Buscar Cliente
                </Button>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                        label="CPF"
                        name="cpf"
                        autoComplete="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Telefone"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Endereço"
                        name="address"
                        autoComplete="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Cidade"
                        name="city"
                        autoComplete="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                        Cadastrar
                    </Button>
                    <Button onClick={handleDelete} fullWidth variant="contained" color="error" sx={{ mt: 1 }}>
                        Remover Cliente
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ClientManager;
