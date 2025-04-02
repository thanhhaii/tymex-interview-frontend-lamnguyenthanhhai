'use client';

import Image from 'next/image';
import { Col, Row } from 'antd';
import SearchForm from './_components/searchForm/SearchForm';
import AgentCard from '@app/components/ui/agentCard/AgentCard';
import TagList from './_components/searchForm/TagList';
import ListHighlightAgent from './_components/highlightAgent/ListHighlightAgent';
import { useCallback, useEffect, useState } from 'react';
import { SearchFormValues, AgentResponse } from '@app/types/filterModels';
import { AgentModel } from '@app/types/agentModel';
import { buildQueryString } from '@app/utils/urlUtils';

export default function Marketplace() {
    const [agents, setAgents] = useState<AgentModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTag, setSelectedTag] = useState<string>('');

    const fetchAgents = useCallback(async (searchParams: SearchFormValues = {}) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/marketplace/agents${buildQueryString({
                ...searchParams,
                tag: selectedTag,
                offset: 0,
                size: 50,
            })}`);
            const data: AgentResponse = await response.json();

            if (data.success) {
                setAgents(data.data.items);
            }
        } finally {
            setLoading(false);
        }
    }, [selectedTag]);

    const handleSearch = useCallback((values: SearchFormValues) => {
        fetchAgents(values);
    }, [fetchAgents]);

    const handleTagSelect = useCallback((tag: string) => {
        setSelectedTag(tag === selectedTag ? '' : tag);
    }, [selectedTag]);

    useEffect(() => {
        fetchAgents();
    }, [selectedTag]);

    return (
        <section className='relative min-h-screen w-full overflow-hidden'>
            <Image
                src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743443247/tymex-interview/background_o6b0ci.jpg"
                alt="Background"
                fill
                priority
                quality={70}
                style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <div className='relative w-full'>
                <Image
                    alt='background-marketplace'
                    src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743271313/tymex-interview/marketplace-background_tedoce.jpg"
                    className='w-full !relative !h-[unset] aspect-[10/4.2] opacity-70 contrast-75 bg-red object-cover'
                    fill
                />
                <div className='absolute inset-0 bg-black opacity-70' />
                <Image
                    src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743274911/tymex-interview/new-tag_tuw1wd.png"
                    alt='footer-background'
                    className='absolute object-contain !h-[unset] !inset-[unset] !w-[55%] !left-[10%] !top-[18%]'
                    fill
                />
                <Image
                    src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743272555/tymex-interview/footerbackground_mz61yh.png"
                    alt='footer-background'
                    className='absolute object-contain !h-[unset] !inset-[unset] !bottom-0 !left-0'
                    fill
                />
                <div className='absolute w-[25%] right-[8.3%] bottom-0 !pt-[100%]'>
                    <Image
                        src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743307758/tymex-interview/agent_tzldn5.png"
                        alt='agent'
                        className='absolute object-contain !h-[unset] !top-[unset] max-w-[471px]'
                        fill
                        quality={100}
                    />
                    <div className='relative'>
                        <Image
                            src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743307757/tymex-interview/agent-frame-name_mvb4sw.png"
                            alt='agent-frame-name'
                            className='absolute object-contain !h-[unset] bottom-5 !top-[unset] !left-[unset] !w-[90%]'
                            fill
                            quality={100}
                        />
                        <p className='font-bold text-[72px] z-10 absolute bottom-0 left-10'>THE DJ</p>
                    </div>
                </div>
                <ListHighlightAgent />
            </div>
            <div className="container mx-auto my-30">
                <Row gutter={[40, 40]}>
                    <Col span={24} lg={6}>
                        <SearchForm onSearch={handleSearch} />
                    </Col>
                    <Col span={24} lg={18}>
                        <Row gutter={[30, 30]}>
                            <Col span={24}>
                                <TagList onTagSelect={handleTagSelect} selectedTag={selectedTag} />
                            </Col>
                            {agents.map((agent) => (
                                <Col key={agent.id} span={12} md={6}>
                                    <AgentCard agent={agent} loading={loading} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className='relative min-h-[420px]'>
                <Image
                    src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743531787/tymex-interview/content_footer_pbjogf.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover', zIndex: 0 }}
                />
            </div>
        </section>
    );
}