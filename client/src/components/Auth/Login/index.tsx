import * as React from 'react'
import { Box, Container, Grid } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import { primaryColor } from 'utils/constant'
import './styles.css'
import Welcome from './Welcome'
import Form from './Form'

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box className="login-container">
                    <Grid container marginY={4}>
                        <Grid item md={5} padding={1}>
                            <Box
                                bgcolor={primaryColor}
                                height={'90vh'}
                                padding={3}
                                borderRadius={'8px'}
                            >
                                <Welcome />
                            </Box>
                        </Grid>
                        <Grid item md={7} padding={1}>
                            <Box height={'90vh'}>
                                <Form />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}
