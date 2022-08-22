import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { ReactComponent as Account } from 'assets/svg/account_placeholder.svg'
import { tertiaryColor } from 'utils/constant'
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}

export default function Testimonial() {
    return (
        <Slider {...settings}>
            <Card
                sx={{
                    p: 1,
                    height: '150px',
                    backgroundColor: `${tertiaryColor} !important`,
                }}
                variant="outlined"
            >
                <CardContent>
                    <Typography variant="body2" color="white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel.
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{
                    p: 1,
                    height: '150px',
                    backgroundColor: `${tertiaryColor} !important`,
                }}
                variant="outlined"
            >
                <CardContent>
                    <Typography variant="body2" color="white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel.
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{
                    p: 1,
                    height: '150px',
                    backgroundColor: `${tertiaryColor} !important`,
                }}
                variant="outlined"
            >
                <CardContent>
                    <Typography variant="body2" color="white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel.
                    </Typography>
                </CardContent>
            </Card>
        </Slider>
    )
}
