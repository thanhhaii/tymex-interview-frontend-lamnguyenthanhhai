import { AgentModel } from '@app/types/agentModel';

export const agents: AgentModel[] = [
    {
        id: 1,
        name: 'The DJ',
        price: 2.75,
        tier: 'EPIC',
        theme: 'Music',
        time: '24h',
        image: 'https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/neonguy_evaham.png',
        owner: {
            name: 'Ghozali_Ghozalu',
            avatar: 'https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/neonguy_evaham.png',
        },
    },
    {
        id: 2,
        name: 'Cyber Warrior',
        price: 5.2,
        tier: 'LEGENDARY',
        theme: 'Cyberpunk',
        time: '7d',
        image: 'https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/neonguy_evaham.png',
        owner: {
            name: 'CryptoKing',
            avatar: 'https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/neonguy_evaham.png',
        },
    },
    // Add more mock agents as needed
];