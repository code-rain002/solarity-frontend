import { Home, Inbox, User, Users, WinBar } from "components/icons";

export const HeaderMenuTitles = [
    'Explore',
    'Games',
    'Marketplace',
    'Communities',
    'Live now',
    // 'Quests',
    // 'Library',
    // 'Popup',
]

export const MENU_ITEMS = [
    {
        name: 'home',
        content: <Home />,
        path: ''
    },
    {
        name: 'users',
        content: <Users />,
        path: 'experience'
    },
    {
        name: 'inbox',
        content: <Inbox />,
        'path': "social"
    },
    {
        name: 'winbar',
        content: <WinBar />,
        path: 'marketplace'
    },
    {
        name: 'user',
        content: <User />,
        path: ''
    }
];