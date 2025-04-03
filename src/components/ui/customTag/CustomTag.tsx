import classNames from 'classnames';
import React from 'react';

type CustomTagProps = {
    label: string;
    onPress?: () => void;
    isActive?: boolean;
}

export default function CustomTag({ label, onPress, isActive = false }: CustomTagProps) {
    return (
        <div className={classNames(
            'px-4 py-[10px] rounded-[4px] inline-block w-max',
            'cursor-pointer',
            {
                'bg-linear-gradient-inactive': !isActive,
                'bg-linear-gradient': isActive,
            },
        )} onClick={onPress}>
            <p className='text-white text-sm font-medium whitespace-nowrap'>{label}</p>
        </div>
    );
}