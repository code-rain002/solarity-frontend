import { GameLibraryDataType, LiveEventsDataType, FriendsDataType, RoomListDataType } from "modal/library";

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

export const GameDetailMenu = [
    "About",
    "Store",
    "Server",
    "Reviews"
]

export const LiveEventsData: LiveEventsDataType[] = [
    {
        image: "/images/library/temp/shareholders_meeting.png",
        title: "Shareholders",
        creator: {
            avatar: "/images/library/temp/users/creator1.png",
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
        image: "/images/library/temp/artist_auction.png",
        title: "Artist auction",
        creator: {
            avatar: "/images/library/temp/users/creator2.png",
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

export const GameLibraryData: GameLibraryDataType[] = [
    {
        image: "/images/library/temp/miniroyale.png",
        title: "Mini Royale",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/aurory.jpeg",
        title: "Aurory",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/somnium.webp",
        title: "Somnium",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/tetris.png",
        title: "Tetris",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/webaverse.jpeg",
        title: "Webaverse",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/oncyber.png",
        title: "OnCyber.io",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/portals.jpeg",
        title: "Portals",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/plaza.png",
        title: "Solarity Plaza",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/poker.jpg",
        title: "Poker Night",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    }, {
        image: "/images/library/temp/minecraft.webp",
        title: "Minecraft",
        likes: 97,
        members: 231,
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
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
            }, {
                title: "Second Sea",
                description: "You've unlocked the Second Sea!",
                image: "/images/library/temp/badges.png",
                rarity: 0.6,
                price: 450
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
        ],
        reviews: [
            {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }, {
                owner: "Lonstantin1982",
                content: "I love this game.Before I played Collect All Pets, I had no friends and no purpose in life. These things haven’t changed but this game is more motivated and exsited, fantastic, excellent",
                likes: 57,
                dislikes: 2,
                createAt: "2022-8-30 00:00:00"
            }
        ]
    },
]

export const FriendsData: FriendsDataType[] = [
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (1).png",
    name: "Jimma1xdetwedddd",
    link: "https://solarity.xyz/Jimma1xdetwedddd"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (2).png",
    name: "Muhamad1",
    link: "https://solarity.xyz/Muhamad1"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (3).png",
    name: "Chenwang1",
    link: "https://solarity.xyz/Chenwang1"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (4).png",
    name: "Satoshi1",
    link: "https://solarity.xyz/Satoshi1"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (1).png",
    name: "Jimma2",
    link: "https://solarity.xyz/Jimma2"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (2).png",
    name: "Muhamad2",
    link: "https://solarity.xyz/Muhamad2"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (3).png",
    name: "Chenwang2",
    link: "https://solarity.xyz/Chenwang2"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (4).png",
    name: "Satoshi2",
    link: "https://solarity.xyz/Satoshi2"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (1).png",
    name: "Jimma3",
    link: "https://solarity.xyz/Jimma3"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (2).png",
    name: "Muhamad3",
    link: "https://solarity.xyz/Muhamad3"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (3).png",
    name: "Chenwang3",
    link: "https://solarity.xyz/Chenwang3"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (4).png",
    name: "Satoshi3",
    link: "https://solarity.xyz/Satoshi3"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (1).png",
    name: "Jimma4",
    link: "https://solarity.xyz/Jimma4"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (2).png",
    name: "Muhamad4",
    link: "https://solarity.xyz/Muhamad4"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (3).png",
    name: "Chenwang4",
    link: "https://solarity.xyz/Chenwang4"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (4).png",
    name: "Satoshi4",
    link: "https://solarity.xyz/Satoshi4"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (1).png",
    name: "Jimma5",
    link: "https://solarity.xyz/Jimma5"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (2).png",
    name: "Muhamad5",
    link: "https://solarity.xyz/Muhamad5"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (3).png",
    name: "Chenwang5",
    link: "https://solarity.xyz/Chenwang5"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (4).png",
    name: "Satoshi5",
    link: "https://solarity.xyz/Satoshi5"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (1).png",
    name: "Jimma6",
    link: "https://solarity.xyz/Jimma6"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (2).png",
    name: "Muhamad6",
    link: "https://solarity.xyz/Muhamad6"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (3).png",
    name: "Chenwang6",
    link: "https://solarity.xyz/Chenwang6"
  },
  {
    avatar: "/images/experience/psuedo_avatars/pseudoAvatar (4).png",
    name: "Satoshi6",
    link: "https://solarity.xyz/Satoshi6"
  },
];

export const RoomListData: RoomListDataType[] = [
  {
    imgUrl: "/images/experience/room_images/room_8_avatar_lg.jpg",
    roomName: "6529 Photo A",
  },
  {
    imgUrl: "/images/experience/room_images/room_7_avatar_lg.jpg",
    roomName: "Justin Aversano’s Twin Flames",
  },
  {
    imgUrl: "/images/experience/room_images/room_6_avatar_lg.jpg",
    roomName: "CyberKongz",
  },
  {
    imgUrl: "/images/experience/room_images/room_5_avatar_lg.jpg",
    roomName: "Dummy text",
  },
  {
    imgUrl: "/images/experience/room_images/room_4_avatar_lg.jpg",
    roomName: "9438 Photo C",
  },
  {
    imgUrl: "/images/experience/room_images/room_3_avatar_lg.jpg",
    roomName: "6529 Photo A",
  },
];
