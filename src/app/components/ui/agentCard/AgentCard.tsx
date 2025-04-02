import React from 'react';
import { Card, Skeleton } from 'antd';
import Image from 'next/image';
import { Agent } from '@app/types/agentModel';

interface AgentCardProps {
    agent: Agent;
    loading?: boolean;
}

export default function AgentCard({ agent, loading }: AgentCardProps) {
    if (loading) {
        return (
            <Card className="bg-transparent border-none">
                <Skeleton.Image active />
                <Skeleton active paragraph={{ rows: 2 }} />
            </Card>
        );
    }

    return (
        <Card className="bg-transparent border-none">
            <div className="relative">
                <Image
                    src={agent.image}
                    alt={agent.name}
                    width={200}
                    height={168}
                    className="object-contain"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                <p className="text-sm text-gray-400">{agent.owner.name}</p>
                <p className="text-lg font-bold text-primary mt-2">{agent.price} ETH</p>
            </div>
        </Card>
    );
}