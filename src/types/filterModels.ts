import { AgentModel } from './agentModel';

export interface TagItem {
    id: number;
    name: string;
    slug: string;
}

export interface SearchFormValues {
    search?: string;
    price?: [number, number];
    tier?: string;
    theme?: string;
    time?: string;
    priceOrder?: 'asc' | 'desc';
    tag?: string;
}

export interface AgentResponse {
    success: boolean;
    data: {
        items: AgentModel[];
        total: number;
        offset: number;
        size: number;
        hasMore: boolean;
    };
}