import {
    Stack,
    Typography,
    Grid,
    TextField,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { AccountCircle, VisibilityOff, Visibility } from '@mui/icons-material'

export default function LoginForm() {
    return (
        <Stack paddingX={4} spacing={5}>
            <Typography
                variant="h4"
                fontWeight={700}
                component="div"
                marginTop={10}
            >
                Login
            </Typography>
            <Grid container direction={'column'}>
                <Grid item>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">
                            Username
                        </InputLabel>
                        <OutlinedInput
                            fullWidth
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Username"
                                        edge="end"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Username"
                        />
                    </FormControl>
                </Grid>
                <Grid item marginTop={3}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            // id="outlined-adornment-password"
                            // type={values.showPassword ? 'text' : 'password'}
                            // value={values.password}
                            // onChange={handleChange('password')}
                            fullWidth
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        //   onClick={handleClickShowPassword}
                                        //   onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                        <VisibilityOff />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <LoadingButton
                sx={{ padding: 1 }}
                loading={false}
                variant="contained"
            >
                Login
            </LoadingButton>
        </Stack>
    )
}
