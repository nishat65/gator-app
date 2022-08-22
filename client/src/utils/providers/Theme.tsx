import { ThemeProvider, createTheme } from '@mui/material'
import * as utils from 'utils/constant'

const theme = createTheme({
    palette: {
        primary: {
            main: utils.primaryColor,
            light: utils.secondaryColor,
            dark: utils.black,
            contrastText: utils.white,
        },
    },
})

const ThemeContextProvider = (props: any) => {
    const { children } = props
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeContextProvider
