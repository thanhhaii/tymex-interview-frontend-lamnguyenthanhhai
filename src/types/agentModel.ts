import { AgentTier } from '@app/constants/enums';

export type AgentModel = {
    id: number;
    name: string;
    price: number;
    tier: AgentTier;
    theme: string;
    time: number;
    image: string;
    owner: {
        name: string;
        avatar: string;
    };
    tag: string;
    backgroundColor?: string;
};

export interface HighlightAgentType {
    id: number;
    name: string;
    image: string;
    isHighlight?: boolean;
    highlightImage?: string;
}