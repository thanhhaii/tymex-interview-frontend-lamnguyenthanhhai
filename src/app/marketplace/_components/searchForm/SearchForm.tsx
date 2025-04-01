'use client';

import { CloseCircleFilled } from '@ant-design/icons';
import { ProForm, ProFormSelect, ProFormSlider, ProFormText } from '@ant-design/pro-components';
import LabelCustom from '@app/components/ui/labelCustom/LabelCustom';
import { Button } from 'antd';
import React from 'react';

export default function SearchForm() {
    const [form] = ProForm.useForm();

    return (
        <ProForm
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
                                onClick={props.reset}
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
                }}
            />
            <ProFormSlider
                range
                min={0.01}
                max={200}
                marks={{
                    0.01: '0.01 ETH',
                    200: '200 ETH',
                }}
                fieldProps={{
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
                }}
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
            />
        </ProForm>
    );
}