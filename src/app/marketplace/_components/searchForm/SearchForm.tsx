'use client';

import { CloseCircleFilled } from '@ant-design/icons';
import { ProForm, ProFormSelect, ProFormSlider, ProFormText } from '@ant-design/pro-components';
import LabelCustom from '@app/components/ui/labelCustom/LabelCustom';
import { Button } from 'antd';
import React, { useCallback } from 'react';
import { SearchFormValues } from '@app/types/filterModels';
import { debounce } from '@app/utils/functionUtils';

interface SearchFormProps {
    onSearch: (values: SearchFormValues) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [form] = ProForm.useForm();

    const handleSubmit = async (values: SearchFormValues) => {
        onSearch(values);
    };

    const handleQuickSearch = useCallback(debounce((value: string) => {
        onSearch({
            ...form.getFieldsValue(true),
            search: value,
        });
    }, 300), []);

    return (
        <ProForm
            initialValues={{
                price: [0.01, 200],
                tier: '',
                theme: '',
                time: 'desc',
                priceOrder: 'asc',
            }}
            submitter={{
                searchConfig: {
                    submitText: 'Search',
                },
                submitButtonProps: {
                    className: '!px-[56px] !h-[44px]',
                },
                render(props, dom) {
                    return (
                        <div className='flex gap-12'>
                            <Button
                                onClick={() => {
                                    props.reset();
                                    onSearch({});
                                }}
                                size='large'
                                className='!pl-0'
                                type="text"
                                icon={<CloseCircleFilled
                                    style={{ color: '#FBC625', fontSize: 24 }}
                                />}>
                                Reset filter
                            </Button>
                            {dom[1]}
                        </div>
                    );
                },
            }}
            onFinish={handleSubmit}
            form={form}>
            <ProFormText
                name='search'
                placeholder='Quick search'
                className='[&>.ant-input-outlined]:!bg-transparent'
                fieldProps={{
                    size: 'large',
                    style: {
                        height: 44,
                        backgroundColor: 'transparent',
                    },
                    onChange: (e) => {
                        handleQuickSearch(e.target.value);
                    },
                }}
            />
            <ProFormSlider
                range
                min={0.01}
                max={200}
                marks={{
                    0.01: {
                        label: <p className='mt-4 text-[#D6D6D6] inline-block w-max translate-x-[45%]'>0.01 ETH</p>,
                    },
                    200: {
                        label: <p className='mt-4 text-[#D6D6D6] inline-block w-max translate-x-[-45%]'>200 ETH</p>,
                    },
                }}

                fieldProps={{
                    styles: {
                        track: {
                            background: 'linear-gradient(90deg, rgba(218,69,143,0) 0%, rgba(218,69,143,1) 25%, rgba(218,55,206,1) 80%, rgba(218,52,221,0) 100%',
                        },
                    },
                    tooltip: {
                        formatter(value) {
                            return `${value} ETH`;
                        },
                        styles: {
                            body: {
                                background: 'linear-gradient(59deg, #DA458F, #DA34DD)',
                            },
                        },
                    },
                }}
                name='price'
                label={<LabelCustom label="PRICE" />} />
            <ProFormSelect
                label={<LabelCustom label="TIER" />}
                className='[&>.ant-select-selector]:!bg-transparent'
                fieldProps={{
                    size: 'large',
                    style: {
                        height: 44,
                    },
                }}
                name='tier'
                options={[
                    { label: 'All', value: '' },
                    { label: 'Free', value: 'Free' },
                    { label: 'Basic', value: 'Basic' },
                    { label: 'Premium', value: 'Premium' },
                    { label: 'Enterprise', value: 'Enterprise' },
                ]}
            />
            <ProFormSelect
                name='theme'
                label={<LabelCustom label="THEME" />}
                className='[&>.ant-select-selector]:!bg-transparent'
                fieldProps={{
                    size: 'large',
                    style: {
                        height: 44,
                    },
                }}
                options={[
                    { label: 'All', value: '' },
                    { label: 'Halloween', value: 'Halloween' },
                    { label: 'Christmas', value: 'Christmas' },
                    { label: 'Valentine', value: 'Valentine' },
                    { label: 'Music', value: 'Music' },
                    { label: 'Cyberpunk', value: 'Cyberpunk' },
                    { label: 'Sports', value: 'Sports' },
                ]}
            />
            <ProFormSelect
                name='time'
                label={<LabelCustom label="TIME" />}
                className='[&>.ant-select-selector]:!bg-transparent'
                fieldProps={{
                    size: 'large',
                    style: {
                        height: 44,
                    },
                    removeIcon: false,
                }}
                options={[
                    { label: 'Latest', value: 'desc' },
                    { label: 'Oldest', value: 'asc' },
                ]}
            />
            <ProFormSelect
                name="priceOrder"
                label="PRICE"
                className='[&>.ant-select-selector]:!bg-transparent'
                fieldProps={{
                    size: 'large',
                    style: {
                        height: 44,
                    },
                }}
                options={[
                    { label: 'Low to High', value: 'asc' },
                    { label: 'High to Low', value: 'desc' },
                ]}
            />
        </ProForm>
    );
}