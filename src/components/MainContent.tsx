import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const properties = [
    {
        id: 1,
        title: "CASA 1",
        description: "TESTE DESCRIÇÃO.",
        imageUrl: "/casa1.jpeg",
    },
    {
        id: 2,
        title: "CASA 2",
        description: "TESTE DESCRIÇÃO.",
        price: "R$ "+222.444,
        type: "TESTE DESCRIÇÃO.",
        address: "TESTE DESCRIÇÃO.",
        imageUrl: "/casa2.jpeg",
    }
];

function MainContent() {
    return (
        <Grid container spacing={15} sx={{ pt: 4 }}>
            {properties.map((property) => (
                <Grid item xs={12}
                      sm={4}
                      key={property.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{ height: 300, width: '100%', objectFit: 'conjunctiontain' }}
                            height="140"
                            image={property.imageUrl}
                            alt={property.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {property.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {property.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {property.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default MainContent;
