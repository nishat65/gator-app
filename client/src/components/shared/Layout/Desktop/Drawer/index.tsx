import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'

import NavSection from './NavItem'
import { navConfig } from './navConfig'
import { DRAWER_WIDTH } from 'utils/constant'

export default function SideBar() {
    const renderContent = (
        <NavSection navConfig={navConfig} />
    )
    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            {renderContent}
        </Drawer>
    )
}
