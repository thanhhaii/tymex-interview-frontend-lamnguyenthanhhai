'use client';

import Image from 'next/image';
import { Col, Row, Button, Empty } from 'antd';
import SearchForm from './_components/searchForm/SearchForm';
import AgentCard from '@app/components/ui/agentCard/AgentCard';
import TagList from './_components/searchForm/TagList';
import { useCallback, useState } from 'react';
import { SearchFormValues, AgentResponse } from '@app/types/filterModels';
import { buildQueryString } from '@app/utils/urlUtils';
import { usePaginatedFetch } from '@app/hooks/usePaginatedFetch';
import HeaderBanner from './_components/headerBanner/HeaderBanner';
export default function Marketplace() {
    const [searchParams, setSearchParams] = useState<SearchFormValues>({
        tag: '',
    });

    const fetchAgents = useCallback(async (searchParams: SearchFormValues = {}) => {
        const response = await fetch(`/api/marketplace/agents${buildQueryString(searchParams)}`);
        const data: AgentResponse = await response.json();

        return data;
    }, []);

    const { data: agents, loading, hasMore, onGetNextPage } = usePaginatedFetch({
        apiFn: fetchAgents,
        initialParams: searchParams,
    });

    const handleSearch = useCallback((values: SearchFormValues) => {
        setSearchParams(values);
    }, []);

    const handleTagSelect = useCallback((tag: string) => {
        setSearchParams(state => ({
            ...state,
            tag: tag === state.tag ? '' : tag,
        }));
    }, []);

    return (
        <section className='relative min-h-screen w-full overflow-hidden'>
            <Image
                src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743443247/tymex-interview/background_o6b0ci.jpg"
                alt="Background"
                className='selectDisable'
                fill
                priority
                quality={70}
                style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <HeaderBanner />
            <div className="container mx-auto my-30 px-3">
                <Row gutter={[40, 40]}>
                    <Col span={24} lg={8} xxl={6}>
                        <SearchForm onSearch={handleSearch} />
                    </Col>
                    <Col span={24} lg={16} xxl={18}>
                        <Row gutter={[30, 30]}>
                            <Col span={24}>
                                <TagList onTagSelect={handleTagSelect} selectedTag={searchParams.tag} />
                            </Col>
                            <Col span={24}>
                                <Row
                                    gutter={[{
                                        xs: 16,
                                        sm: 24,
                                    },{
                                        xs: 16,
                                        sm: 24,
                                    }]}
                                    className='xl:scrollbar-custom xl:max-h-[2000px] xl:overflow-y-auto'
                                >
                                    {agents.map((agent) => (
                                        <Col key={agent.id} span={12} md={8} xxl={6}>
                                            <AgentCard agent={agent} loading={loading} />
                                        </Col>
                                    ))}
                                    {agents.length === 0 && (
                                        <Col span={24} className='text-center mt-20'>
                                            <Empty description={
                                                <h3 className='text-2xl font-bold'>
                                                    No agents found
                                                </h3>
                                            } />
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                            {hasMore && (
                                <Col span={24} className='text-center'>
                                    <Button type='primary' className='!py-6 md:!px-40 w-full px-auto md:w-max' onClick={onGetNextPage}>
                                        View more
                                    </Button>
                                </Col>
                            )}
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