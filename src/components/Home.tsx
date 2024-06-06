import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Portfolio de Imóveis
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/clientes">Cliente</Button>
                <Button color="inherit" component={Link} to="/imoveis">Imóvel</Button>
                <Button color="inherit" component={Link} to="/usuario">Cadastre-se</Button>
                <IconButton color="inherit" component={Link} to="/login">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Home;
