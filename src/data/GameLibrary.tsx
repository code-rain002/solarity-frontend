import { GameLibraryDataType, LiveEventsDataType } from "modal/library";

export const EventsMenu = [
    "Your DAOs",
    "Friends",
    "Tournaments",
    "Events"
];

export const LibraryMenu = [
    'Up and Coming',
    'Popular',
    'Featured',
    'Top Rated'
];

export const LiveEventsData : LiveEventsDataType[] = [
    {
        image: "/images/library/temp/plaza.png",
        title: "Solarity Hall",
        creator: {
            avatar: "/images/library/temp/users/user1.png",
            name: "tmeta"
        },
        friends: [
            {
                avatar: "/images/library/temp/users/user1.png",
                name: "Meta",
            }, {
                avatar: "/images/library/temp/users/user2.png",
                name: "Rocco",
            }, {
                avatar: "/images/library/temp/users/user3.png",
                name: "Beka",
            }, {
                avatar: "/images/library/temp/users/user4.png",
                name: "Supa",
            }, {
                avatar: "/images/library/temp/users/user5.png",
                name: "Bella",
            }, 
        ],
        createAt: "2022.08.14 18:42:00"
    }, 
    {
        image: "/images/library/temp/poker.jpg",
        title: "Poker Night",
        creator: {
            avatar: "/images/library/temp/users/creator2.png",
            name: "monke DAO"
        },
        friends: [
            {
                avatar: "/images/library/temp/users/user1.png",
                name: "Meta",
            }, {
                avatar: "/images/library/temp/users/user2.png",
                name: "Rocco",
            }, {
                avatar: "/images/library/temp/users/user3.png",
                name: "Beka",
            }, {
                avatar: "/images/library/temp/users/user4.png",
                name: "Supa",
            }, {
                avatar: "/images/library/temp/users/user5.png",
                name: "Bella",
            }, 
        ],
        createAt: "2022.08.14 18:42:00"
    }, {
        image: "/images/library/temp/bepple.jpeg",
        title: "New Auction",
        creator: {
            avatar: "/images/library/temp/users/creator1.png",
            name: "Beeple"
        },
        friends: [
            {
                avatar: "/images/library/temp/users/user1.png",
                name: "Meta",
            }, {
                avatar: "/images/library/temp/users/user2.png",
                name: "Rocco",
            }, {
                avatar: "/images/library/temp/users/user3.png",
                name: "Beka",
            }, {
                avatar: "/images/library/temp/users/user4.png",
                name: "Supa",
            }, {
                avatar: "/images/library/temp/users/user5.png",
                name: "Bella",
            }, 
        ],
        createAt: "2022.08.14 18:42:00"
    }, 
]

export const GameLibraryData : GameLibraryDataType[] = [
    {
        image : "/images/library/temp/miniroyale.png",
        title: "Mini Royale",
        likes: 97,
        members : 231,
        owner: "@MiniRoyale",
        category: "P2E",
        iframe: "https://miniroyale.io/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/aurory.jpeg",
        title: "Aurory",
        likes: 97,
        members : 231,
        owner: "@Aurory",
        category: "P2E",
        iframe: "https://app.aurory.io/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/somnium.webp",
        title: "Somnium",
        likes: 97,
        members : 231,
        owner: "@Somnium",
        category: "P2E",
        iframe: "https://somniumspace.com/parcel/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/tetris.png",
        title: "Tetris",
        likes: 97,
        members : 231,
        owner: "@Tetris",
        category: "P2E",
        iframe: "https://tetr.io/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/webaverse.jpeg",
        title: "Webaverse",
        likes: 97,
        members : 231,
        owner: "@MMMORG",
        category: "P2E",
        iframe: "https://app.webaverse.com/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/oncyber.png",
        title: "OnCyber.io",
        likes: 97,
        members : 231,
        owner: "@PanzerDogs",
        category: "P2E",
        iframe: "https://oncyber.io/6529om",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/portals.jpeg",
        title: "Portals",
        likes: 97,
        members : 231,
        owner: "@Portals",
        category: "P2E",
        iframe: "https://theportal.to/demo",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/plaza.png",
        title: "Solarity Plaza",
        likes: 97,
        members : 231,
        owner: "@TwoZoos",
        category: "P2E",
        iframe: "https://solarity-frontend.vercel.app/oraziogrinzosih/hub/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/poker.jpg",
        title: "Poker Night",
        likes: 97,
        members : 231,
        owner: "@888",
        category: "P2E",
        iframe: "https://solarity-frontend.vercel.app/oraziogrinzosih/hub/",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, {
        image : "/images/library/temp/minecraft.webp",
        title: "Minecraft",
        likes: 97,
        members : 231,
        owner: "@Mojanc",
        category: "P2E",
        iframe: "https://classic.minecraft.net/?join=Aklaj1y66iD8xJvx",
        description: "Description",
        twitter: "https://twitter.com",
        discord: "https://discord.com",
        website: "https://solarity.xyz",
        quests: [
            {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6
            }
        ],
        stores: [
            {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            }, {
                title: "2x Money",
                image: "/images/library/temp/stores.png",
                price: 450,
            },
        ]
    }, 
]
