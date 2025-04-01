import React from 'react';
import Image from 'next/image';

type HighlightAgentProps = {
    name: string;
    image: string;
}

export default function HighlightAgent({ name, image }: HighlightAgentProps) {
    return (
        <div className='w-[200px]'>
            <div className="relative">
                <Image
                    src={image}
                    alt="Agent Character"
                    width={200}
                    height={168}
                    className="object-contain z-10 relative"
                />
                <div className='absolute bottom-[-1px] right-0'>
                    <Image
                        src="https://res.cloudinary.com/djxjyxc3y/image/upload/v1743355050/tymex-interview/agent-background_nimxhs.png"
                        alt="Agent Background"
                        width={200}
                        height={120}
                        className="object-cover drop-shadow-[-12px_12px_0px_#101010] outline-solid border-secondary border-[1px]"
                        priority
                    />
                </div>
            </div>
            <div className='mt-7'>
                <p className='text-lg text-black font-bold uppercase text-center'>{name}</p>
            </div>
        </div>
    );
}