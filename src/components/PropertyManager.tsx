import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function PropertyManager() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const clearFields = () => {
        setId('');
        setName('');
        setAddress('');
        setPrice('');
        setDescription('');
        setType('');
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/imoveis/${id}`);
            if (response.data) {
                const { name, address, price, description, type } = response.data;
                setName(name);
                setAddress(address);
                setPrice(price.toString());
                setDescription(description);
                setType(type);
            } else {
                alert('Nenhum imóvel encontrado com o ID fornecido.');
                clearFields();
            }
        } catch (error) {
            alert('Erro ao buscar o imóvel!');
            clearFields();
        }
    };

    const handleDelete = async () => {
        if (!id) {
            alert('Por favor, insira um ID para remover o imóvel.');
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/imoveis/${id}`);
            alert('Imóvel removido com sucesso!');
            clearFields();
        } catch (error) {
            alert('Erro ao remover o imóvel!');
            clearFields();
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/imoveis', {
                name,
                address,
                price: Number(price),
                description,
                type
            });
            alert('Imóvel cadastrado com sucesso!');
            clearFields();
        } catch (error) {
            alert('Erro ao cadastrar imóvel!');
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
                    Gestão de Imóveis
                </Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="ID do Imóvel"
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <Button onClick={handleSearch} variant="contained" sx={{ mt: 1, mb: 1 }}>
                    Buscar Imóvel
                </Button>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Nome"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        label="Preço"
                        name="price"
                        type="number"
                        autoComplete="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Descrição"
                        name="description"
                        multiline
                        rows={4}
                        autoComplete="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Tipo"
                        name="type"
                        autoComplete="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Cadastrar/Atualizar Imóvel
                    </Button>
                </Box>
                <Button onClick={handleDelete} fullWidth variant="contained" color="error" sx={{ mt: 1 }}>
                    Remover Imóvel
                </Button>
            </Box>
        </Container>
    );
}

export default PropertyManager;
