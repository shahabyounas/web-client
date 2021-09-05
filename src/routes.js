import Home from './pages/home'
import Landing from './pages/landing'
import Profile from './pages/profile'
import Income from './pages/income'
import Audience from './pages/audience'
import Insights from './pages/insights'
import Notifications from './pages/notifications'
import Settings from './pages/settings'
import EventCreate from './pages/event/create'
import Event from './pages/event'


const routes = [
    {
        name: 'landing',
        path: '/',
        component: Landing,
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
    },
    {
        name: 'profile',
        path: '/profile',
        component: Profile,
    },
    {
        name: 'event',
        path: '/event',
        component: Event,
    },
    {
        name: 'event',
        path: '/event/create',
        component: EventCreate,
    },
    {
        name: 'income',
        path: '/income',
        component: Income,
    },
    {
        name: 'audience',
        path: '/audience',
        component: Audience,
    },
    {
        name: 'insights',
        path: '/insights',
        component: Insights,
    },
    {
        name: 'notifications',
        path: '/notifications',
        component: Notifications,
    },
    {
        name: 'account settings',
        path: '/settings',
        component: Settings,
    },
    {
        name: 'help',
        path: '/help',
        component: Home,
    },
    {
        name: 'logout',
        path: '/logout',
        component: Home,
    }
]

export default routes;