import { Box, Toolbar, CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import Drawer from './Drawer/index'
import Nav from './Nav/index'

export default function Layout({ children }: { children?: ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Nav />
            <Drawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh' }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
