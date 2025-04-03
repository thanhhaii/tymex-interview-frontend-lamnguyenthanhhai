'use client';

import React, { useState, useCallback } from 'react';
import { Row, Col, Button } from 'antd';
import SearchForm from '../searchForm/SearchForm';
import AgentCard from '@app/components/ui/agentCard/AgentCard';
import TagList from '../searchForm/TagList';
import { SearchFormValues } from '@app/types/filterModels';
import { ProForm } from '@ant-design/pro-components';

const AgentStore = () => {
    const [form] = ProForm.useForm();
    const [searchParams, setSearchParams] = useState<SearchFormValues>({});

    const handleSearch = useCallback((values: SearchFormValues) => {
        setSearchParams(values);
    }, []);

    return (
        <ProForm form={form} onFinish={handleSearch}>
            <Row gutter={[40, 40]}>
                <Col span={24} lg={6}>
                    <SearchForm onSearch={handleSearch} />
                </Col>
                <Col span={24} lg={18}>
                    <Row gutter={[30, 30]}>
                        <Col span={24}>
                            <TagList onTagSelect={handleTagSelect} selectedTag={searchParams.tag} />
                        </Col>
                        {agents.map((agent) => (
                            <Col key={agent.id} span={12} md={6}>
                                <AgentCard agent={agent} loading={loading} />
                            </Col>
                        ))}
                        {hasMore && (
                            <Col span={24}>
                                <Button type='primary' onClick={onGetNextPage}>Load more</Button>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </ProForm>
    );
};

export default AgentStore;