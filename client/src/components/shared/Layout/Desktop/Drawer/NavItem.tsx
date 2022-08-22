import { NavLink as RouterLink, matchPath, useLocation, useMatch } from 'react-router-dom'
// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import type { navConfig } from './navConfig'
import {
    Box,
    List,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    ListItemButtonProps
} from '@mui/material'

// ----------------------------------------------------------------------

const ListItemStyle = styled((props: ListItemButtonProps) => (
    <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    margin: '10px 0',
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    borderRadius: 20,
    padding: 10,
})) as typeof ListItemButton

const ListItemIconStyle = styled(ListItemIcon)({
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}) as typeof ListItemIcon

export function NavItem({ item, active }: { item: navConfig; active: CallableFunction }) {
    const theme = useTheme()

    const isActiveRoot = active(item.path)

    const { title, path, icon, info, children } = item

    const activeRootStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        bgcolor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
        ),
    }

    return (
        <ListItemStyle
            component={RouterLink}
            to={path}
            sx={{
                ...(isActiveRoot && activeRootStyle),
            }}
        >
            {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
            <ListItemText disableTypography primary={title} />
        </ListItemStyle>
    )
}

export default function NavSection({
    navConfig,
    ...other
}: {
    navConfig: navConfig[]
}) {
    const { pathname } = useLocation()
    const match = (path: string) =>
        path ? !!matchPath({ path, end: false }, pathname) : false

    return (
        <Box {...other}>
            <List sx={{ p: 1 }}>
                {navConfig.map((item: any) => (
                    <NavItem key={item.title} item={item} active={match} />
                ))}
            </List>
        </Box>
    )
}
