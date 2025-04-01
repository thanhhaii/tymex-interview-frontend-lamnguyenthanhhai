import Image from 'next/image';
import HighlightAgent from './_components/highlightAgent/HighlightAgent';
import { Col, Row } from 'antd';
import SearchForm from './_components/searchForm/SearchForm';
import AgentCard from '@app/components/ui/agentCard/AgentCard';
import CustomTag from '@app/components/ui/customTag/CustomTag';

export default function Marketplace() {
    return (
        <div className='relative min-h-screen w-full overflow-hidden'>
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
                    className='w-full !relative !h-[unset] aspect-[10/4.2] opacity-70 contrast-75'
                    objectFit='cover'
                    fill
                />
                <div className='absolute inset-0 bg-black opacity-70' />
                <Image
                    src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743274911/tymex-interview/new-tag_tuw1wd.png"
                    alt='footer-background'
                    className='absolute !h-[unset] !inset-[unset] !w-[55%] !left-[10%] !top-[18%]'
                    fill
                    objectFit='contain'
                />
                <Image
                    src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743272555/tymex-interview/footerbackground_mz61yh.png"
                    alt='footer-background'
                    className='absolute !h-[unset] !inset-[unset] !bottom-0 !left-0'
                    fill
                    objectFit='contain'
                />
                <div className='absolute w-[25%] right-[8.3%] bottom-0 !pt-[100%]'>
                    <Image
                        src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743307758/tymex-interview/agent_tzldn5.png"
                        alt='agent'
                        className='absolute !h-[unset] !top-[unset] max-w-[471px]'
                        fill
                        objectFit='contain'
                        quality={100}
                    />
                    <div className='relative'>
                        <Image
                            src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743307757/tymex-interview/agent-frame-name_mvb4sw.png"
                            alt='agent-frame-name'
                            className='absolute !h-[unset] bottom-5 !top-[unset] !left-[unset] !w-[90%]'
                            fill
                            objectFit='contain'
                            quality={100}
                        />
                        <p className='font-bold text-[72px] z-10 absolute bottom-0 left-10'>THE DJ</p>
                    </div>
                </div>
                <div className='absolute bottom-8 left-[8.3%] flex items-center justify-center gap-x-20'>
                    <HighlightAgent
                        name='Assassin'
                        image='https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/assasin_ywpevl.png'
                    />
                    <HighlightAgent
                        name='Neon Guy'
                        image='https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/neonguy_evaham.png'
                    />
                    <HighlightAgent
                        name='Mafia England'
                        image='https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/mafia_hvnnly.png'
                    />
                    <HighlightAgent
                        name='Basketball Girl'
                        image='https://res.cloudinary.com/djxjyxc3y/image/upload/v1743354767/tymex-interview/basketball-girl_h5lhji.png'
                    />
                </div>
            </div>
            <div className="container mx-auto my-30">
                <Row gutter={[40, 40]}>
                    <Col span={6}>
                        <SearchForm />
                    </Col>
                    <Col span={18}>
                        <Row gutter={[40, 40]}>
                            <Col span={24}>
                                <div className='flex gap-x-6'>
                                    {['All', 'Upper Body', 'Lower Body'].map((label, index) => (
                                        <CustomTag key={index} label={label} isActive={index === 0} />
                                    ))}
                                </div>
                            </Col>
                            <Col span={6}>
                                <AgentCard />
                            </Col>
                            <Col span={6}>
                                <AgentCard />
                            </Col>
                            <Col span={6}>
                                <AgentCard />
                            </Col>
                            <Col span={6}>
                                <AgentCard />
                            </Col>
                            <Col span={6}>
                                <AgentCard />
                            </Col>
                            <Col span={6}>
                                <AgentCard />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}