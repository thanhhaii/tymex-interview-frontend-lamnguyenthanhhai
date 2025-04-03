import { AgentModel } from './agentModel';

export type PaginationResponse<T> = {
    hasMore: boolean;
    items: T[];
    total: number;
    offset: number;
    size: number;
};

export type ResponseBase<T> = {
    success: boolean;
    data: T;
    message?: string;
};

export type GetAgentsResponse = ResponseBase<PaginationResponse<AgentModel>>;

