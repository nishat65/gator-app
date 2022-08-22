import { ReactNode } from "react"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';

export type navConfig = {
    title: string,
    icon: string | ReactNode,
    path: string,
    info?: string,
    children?: any,
}

export const navConfig: navConfig[] = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/home'
    },
    {
        title: 'Task',
        icon: <TaskIcon />,
        path: '/task'
    },
]
