import React from 'react';
import { Typography, Container } from '@material-ui/core';

function Footer() {
    return (
      <div>
        <Container maxWidth="xs" align="center" style={{ marginTop: "4rem", marginBottom: "4rem"}}>
          <Typography variant="h6" gutterBottom>
            Footers
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="TextSecondary">
            Something here to give the footer a purpose! Copyright © Your
            Website 2021.
          </Typography>
        </Container>
      </div>
    );
}

export default Footer;
