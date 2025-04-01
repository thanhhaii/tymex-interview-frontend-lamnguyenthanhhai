import { MailOutlined } from '@ant-design/icons';
import { PhoneOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black !text-white py-10 px-4 md:px-8 md:pt-15">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
                    <div className='md:col-span-2'>
                        <h3 className="font-bold mb-8 text-xl tracking-wider">
                            NAVIGATION
                        </h3>
                        <div className="grid grid-cols-3 gap-x-8 gap-y-3 text-md">
                            <Link
                                href="/"
                                className="!text-white hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/whitepaper"
                                className="!text-white hover:text-white transition-colors"
                            >
                                Whitepaper
                            </Link>
                            <Link
                                href="/faqs"
                                className="!text-white hover:text-white transition-colors"
                            >
                                FAQs
                            </Link>
                            <Link
                                href="/about"
                                className="!text-white hover:text-white transition-colors"
                            >
                                About us
                            </Link>
                            <Link
                                href="/marketplace"
                                className="!text-white hover:text-white transition-colors"
                            >
                                Marketplace
                            </Link>
                            <Link
                                href="/news"
                                className="!text-white hover:text-white transition-colors"
                            >
                                News
                            </Link>
                            <Link
                                href="/teams"
                                className="!text-white hover:text-white transition-colors"
                            >
                                Our teams
                            </Link>
                            <Link
                                href="/roadmap"
                                className="!text-white hover:text-white transition-colors"
                            >
                                Roadmap
                            </Link>
                            <Link
                                href="/community"
                                className="!text-white hover:text-white transition-colors"
                            >
                                Community
                            </Link>
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <h3 className="font-bold mb-8 text-xl tracking-wider">
                            CONTACT US
                        </h3>
                        <div className="space-y-3 text-md">
                            <div className="flex items-center gap-2 !text-white">
                                <PhoneOutlined className="text-white" />
                                <span>01234568910</span>
                            </div>
                            <div className="flex items-center gap-2 !text-white">
                                <MailOutlined className="text-white" />
                                <span>tymex-talent@tymex.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-3'>
                        <h3 className="font-bold mb-8 text-xl tracking-wider">
                            SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                placeholder="Your email address"
                                className="!bg-transparent border border-gray-600 rounded text-white"
                                size='large'
                            />
                            <Button
                                type="primary"
                                className="bg-pink-600 hover:bg-pink-700 border-none"
                                size='large'
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-10 border-t border-[#3A3841] flex flex-col md:flex-row justify-between items-center md:mb-52">
                    <div className="text-md text-gray-400 mb-4 md:mb-0">
                        ©2023 Tyme - Edit. All Rights reserved.
                    </div>
                    <div className="flex gap-6 text-md text-gray-400">
                        <Link
                            href="/security"
                            className="!text-white hover:text-white transition-colors"
                        >
                            Security
                        </Link>
                        <Link href="/legal" className="!text-white hover:text-white transition-colors">
                            Legal
                        </Link>
                        <Link
                            href="/privacy"
                            className="!text-white hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
