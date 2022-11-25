import { Home, Inbox, User, Users, WinBar } from "components/icons";

export const HeaderMenuTitles = [
    {
        name: 'Explore',
        link: 'explore'
    },
    {
        name: 'Marketplace',
        link: 'marketplace'
    },
    {
        name: 'Communities',
        link: 'community'
    },
    {
        name: 'Live now',
        link: 'experience'
    },
    {
        name: 'Games',
        link: 'games'
    }
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