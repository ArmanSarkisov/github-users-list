import React from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const CardActionAreaContent = ({ avatar, login, type }) => (
    <CardActionArea>
        <CardMedia
            component="img"
            alt={login}
            height="140"
            image={ avatar }
            title={login}
            style={{ height: 250 }}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                { login }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                user type: { type }
            </Typography>
        </CardContent>
    </CardActionArea>
);

export default CardActionAreaContent;
