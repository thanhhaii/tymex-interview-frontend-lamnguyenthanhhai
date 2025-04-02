export interface Agent {
    id: number;
    name: string;
    price: number;
    tier: 'EPIC' | 'RARE' | 'LEGENDARY' | 'MYTHIC';
    theme: string;
    time: string;
    image: string;
    owner: {
        name: string;
        avatar: string;
    };
}

export interface HighlightAgentType {
    id: number;
    name: string;
    image: string;
}