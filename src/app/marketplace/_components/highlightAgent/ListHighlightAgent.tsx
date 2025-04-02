'use client';

import { memo, useEffect, useState } from 'react';
import HighlightAgent from './HighlightAgent';
import { HighlightAgentType } from '@app/types/agentModel';

function ListHighlightAgent() {
    const [highlightAgents, setHighlightAgents] = useState<HighlightAgentType[]>([]);

    useEffect(() => {
        fetch('/api/marketplace/highlight-agents')
            .then(res => res.json())
            .then(data => setHighlightAgents(data.data));
    }, []);

    return (
        <div className='absolute bottom-8 left-[8.3%] flex items-center justify-center gap-x-20'>
            {highlightAgents.map(agent => (
                <HighlightAgent key={agent.id} name={agent.name} image={agent.image} />
            ))}
        </div>
    );
}
export default memo(ListHighlightAgent);
