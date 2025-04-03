import { memo } from 'react';
import HighlightAgent from './HighlightAgent';
import { HighlightAgentType } from '@app/types/agentModel';
import Slider from 'react-slick';

type ListHighlightAgentProps = {
    highlightAgents: HighlightAgentType[];
};

function ListHighlightAgent({ highlightAgents }: ListHighlightAgentProps) {
    return (
        <>
            <div className='absolute bottom-2 xxl:bottom-8 left-[5%] xxl:left-[8.3%] items-center justify-center gap-x-5 xxl:gap-x-20 hidden xl:flex'>
                {highlightAgents.map(agent => (
                    <HighlightAgent key={agent.id} name={agent.name} image={agent.image} />
                ))}
            </div>
            <div className='xl:hidden absolute bottom-0 left-0 w-full'>
                {highlightAgents && (
                    <Slider
                        dots
                        initialSlide={1}
                        responsive={[
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    className: 'w-[85%] mx-auto',
                                },
                            },
                        ]}
                        dotsClass='!bottom-0 slick-dots'
                        infinite
                        speed={500}
                        slidesToShow={3}
                        slidesToScroll={3}
                        className='w-[90%] mx-auto'
                    >
                        {highlightAgents.map(agent => (
                            <div key={agent.id} className='w-full !flex justify-center items-center'>
                                <HighlightAgent name={agent.name} image={agent.image} />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </>
    );
}
export default memo(ListHighlightAgent);
