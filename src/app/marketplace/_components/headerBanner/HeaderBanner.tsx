'use client';

import Image from 'next/image';
import ListHighlightAgent from '../highlightAgent/ListHighlightAgent';
import { HighlightAgentType } from '@app/types/agentModel';
import { useEffect, useMemo, useState } from 'react';

const HeaderBanner = () => {
    const [agentsHighlight, setAgentsHighlight] = useState<HighlightAgentType[]>([]);

    const featuredAgent = useMemo(() => {
        return agentsHighlight?.find((agent: HighlightAgentType) => agent.isHighlight);
    }, [agentsHighlight]);

    const highlightAgents = useMemo(() => {
        return agentsHighlight.filter((agent: HighlightAgentType) => {
            return !agent.isHighlight;
        });
    }, [agentsHighlight]);

    useEffect(() => {
        const fetchHighlightAgents = async () => {
            try {
                const response = await fetch('/api/marketplace/highlight-agents');
                const { data } = await response.json();
                setAgentsHighlight(data);
            } catch {
                setAgentsHighlight([]);
            }
        };

        fetchHighlightAgents();
    }, []);

    return (
        <div className='relative h-[450px] md:h-[500px] xl:h-auto w-full'>
            <Image
                alt='background-marketplace'
                src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743271313/tymex-interview/marketplace-background_tedoce.jpg"
                className='w-full !relative xl:!h-[unset] xl:aspect-[10/4.2] opacity-70 contrast-75 bg-red object-contain xl:object-cover'
                fill
            />
            <div className='absolute inset-0 bg-black opacity-70' />
            <Image
                src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743274911/tymex-interview/new-tag_tuw1wd.png"
                alt='footer-background'
                className='
                        absolute
                        object-contain
                        xl:!h-[unset]
                        xl:!inset-[unset]
                        !w-[80%]
                        translate-x-[-50%]
                        !left-[50%]
                        !top-[-10%]
                        xl:translate-x-[0]
                        xl:!w-[55%]
                        xl:!left-[10%]
                        xl:!top-[18%]
                    '
                fill
            />
            <Image
                src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743272555/tymex-interview/footerbackground_mz61yh.png"
                alt='footer-background'
                className='absolute object-contain !h-[unset] !inset-[unset] !bottom-0 !left-0'
                fill
            />
            {featuredAgent && (
                <div className='absolute w-[25%] right-[8.3%] bottom-0 !pt-[100%] hidden xl:block'>
                    <Image
                        src={featuredAgent.highlightImage || ''}
                        alt='agent'
                        className='absolute object-contain !h-[unset] !top-[unset] max-w-[471px]'
                        fill
                        quality={100}
                    />
                    <div className='relative flex items-center justify-center pl-20 mb-5'>
                        <Image
                            src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743307757/tymex-interview/agent-frame-name_mvb4sw.png"
                            alt='agent-frame-name'
                            height={150}
                            width={400}
                            objectFit='contain'
                        />
                        <p className='font-bold text-[60px] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-secondary'>{featuredAgent?.name}</p>
                    </div>
                </div>
            )}
            <ListHighlightAgent highlightAgents={highlightAgents} />
        </div>
    );
};

export default HeaderBanner;
