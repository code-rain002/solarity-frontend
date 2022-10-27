import { Home, Inbox, User, Users, WinBar } from "components/icons";

export const HeaderMenuTitles = [
    'Explore',
    'Marketplace',
    'Community',
    'Experience',
    'Social',
    'Quests',
    'Library',
    'Popup',
]

export const MENU_ITEMS = [
    {
        name: 'home',
        content: <Home />,
    },
    {
        name: 'users',
        content: <Users />,
    },
    {
        name: 'inbox',
        content: <Inbox />,
    },
    {
        name: 'winbar',
        content: <WinBar />,
    },
    {
        name: 'user',
        content: <User />,
    }
];