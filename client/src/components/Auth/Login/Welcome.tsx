import {
    Stack,
    Typography,
    Grid,
    Card,
    Box,
    CardContent,
    CardMedia,
} from '@mui/material'
import { tertiaryColor } from 'utils/constant'
import Testimonial from './Testimonial'
import Slider from 'react-slick'
import './styles.css'

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}

export default function Welcome() {
    return (
        <Stack spacing={2} className="welcome-login">
            <Typography component="div">Gator</Typography>
            <Grid container>
                <Grid item>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        component="div"
                        marginTop={10}
                    >
                        Start your journey with us!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel.
                    </Typography>
                </Grid>
            </Grid>
            <Box padding={3} marginTop={40}>
                <Testimonial />
            </Box>
        </Stack>
    )
}
