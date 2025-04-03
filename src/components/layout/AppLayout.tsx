'use client';

import { ProLayout } from '@ant-design/pro-components';
import { Button } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Footer from './Footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <ProLayout
            contentStyle={{
                padding: 0,
                marginTop: -56,
            }}
            location={{ pathname }}
            headerRender={(_, defaultDom: React.ReactNode) => {
                return React.cloneElement(defaultDom as React.ReactElement, {
                    className: 'xxl:px-[160px]',
                } as any);
            }}
            stylish={{
                header: (_, ...rest) => ({
                    ...rest,
                    backgroundColor: 'rgba(23, 22, 26, 0.7)',
                    border: 'none',
                    paddingBlock: 22,
                    height: 84,
                }),
            }}
            menu={{
                request: async () => [
                    { path: '/', name: 'HOME' },
                    { path: '/about', name: 'ABOUT US' },
                    { path: '/teams', name: 'OUR TEAMS' },
                    { path: '/marketplace', name: 'MARKETPLACE', style: { color: '#C55AE0' } },
                    { path: '/roadmap', name: 'ROADMAP' },
                    { path: '/whitepaper', name: 'WHITEPAPER' },
                ]}}
            menuItemRender={(item) => (
                <Link
                    href={item.path || ''}
                    className={classNames('text-white font-bold text-sm', {
                        'text-linear-gradient': item.itemPath === pathname,
                    })}>
                    {item.name}
                </Link>
            )}
            fixedHeader
            title=""
            footerRender={() => (<Footer />)}
            layout="top"
            logo={false}
            avatarProps={{
                render() {
                    return (
                        <div>
                            <Button type="primary" size='large'>Connect Wallet</Button>
                        </div>
                    );
                },
            }}
        >
            {children}
        </ProLayout>
    );
}