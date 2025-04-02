import Image from 'next/image';
import React from 'react';
import { AgentModel } from '@app/types/agentModel';

type AgentCardProps = {
    agent: AgentModel;
    loading: boolean;
}

export default function AgentCard({ agent, loading }: AgentCardProps) {
    return (
        <div className='max-w-[267px] p-4 rounded-[10px] bg-[rgba(26,26,26,0.6)]'>
            <div className='relative w-full aspect-square bg-red-200 flex flex-col rounded-[4px]' style={{
                background: agent.backgroundColor,
            }}>
                <div className='px-4 pt-2'>
                    <div className='bg-[rgb(49,59,69,0.5)] backdrop-opacity-50 py-1 px-3 rounded-[4px] inline-block'>
                        <span className='text-xs leading-5 font-medium capitalize'>{agent.tag}</span>
                    </div>
                </div>
                <Image
                    src={agent.image}
                    alt='agent'
                    objectFit='contain'
                    width={235}
                    height={197}
                />
            </div>
            <div className='mt-6'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-[16px]'>
                        {agent.name}
                    </p>
                    <p className='font-medium text-sm'>
                        {agent.price.toFixed(2)} ETH
                    </p>
                </div>
                <div className='mt-4 flex gap-3 items-center'>
                    <Image src={agent.owner.avatar} alt='avatar' width={32} height={32} />
                    <p className='font-medium text-xs'>
                        {agent.owner.name}
                    </p>
                </div>
            </div>
        </div>
    );
}