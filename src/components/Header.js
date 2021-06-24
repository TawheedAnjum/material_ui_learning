import React from 'react';
import { Typography, Container, Button, ButtonGroup } from '@material-ui/core';

const Header = () => {
    return(
        <React.Fragment>
            <Typography variant="h2" component="h2" align="center" gutterBottom>
                Album layout
            </Typography>
            <Container maxWidth="sm">
                <Typography align="center" color="textSecondary" variant="h6" gutterBottom>
                    Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                </Typography>
                <ButtonGroup align="center">
                    <Button variant="contained" color="primary">
                        Disable elevation
                    </Button>
                    <Button variant="outlined" color="primary">
                        Disable elevation
                    </Button>
                </ButtonGroup>
            </Container>
        </React.Fragment>
    )
}

export default Header;
