import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';

function HomeImage() {
    return (
        <Grid container>
            <Grid item xs={12} sx={{ mb: 4 }}>
                <Card sx={{ maxWidth: '100vw', boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={process.env.PUBLIC_URL + '/imagemHome.jpeg'}
                        alt="Imagem decorativa"
                        sx={{ width: '100%', height: '60vh' }}
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default HomeImage;
