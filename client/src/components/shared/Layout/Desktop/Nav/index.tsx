import { Stack, AppBar, Box } from '@mui/material'
import { GatorInput, GatorButton } from 'modules/index'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import { DRAWER_WIDTH, white } from 'utils/constant'

const rootStyles = {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    ml: `${DRAWER_WIDTH}px`,
    bgcolor: white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    color: '#00000099',
}

const ButtonStyles = {
    position: 'absolute',
    left: '18%',
    padding: '8px 0 8px 30px',
}

export default function NavBar() {
    return (
        <AppBar elevation={0} position="fixed" sx={rootStyles}>
            <Box component="div" sx={{ flexGrow: 1, position: 'relative' }}>
                {/* <GatorInput sx={{ zIndex: 10 }} />
                <GatorButton variant='contained' sx={ButtonStyles}>
                    <SearchOutlinedIcon />
                </GatorButton> */}
            </Box>
            <Box>
                <Stack gap={3} flexDirection="row" alignItems="center">
                    <SettingsOutlinedIcon />
                    <NotificationsActiveOutlinedIcon />
                </Stack>
            </Box>
        </AppBar>
    )
}
