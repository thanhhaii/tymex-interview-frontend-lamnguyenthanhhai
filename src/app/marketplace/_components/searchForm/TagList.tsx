'use client';

import CustomTag from '@app/components/ui/customTag/CustomTag';
import { useEffect, useState, memo } from 'react';
import { TagItem } from '@app/types/filterModels';

interface TagListProps {
    onTagSelect: (tag: string) => void;
    selectedTag?: string;
}

function TagList({ onTagSelect, selectedTag }: TagListProps) {
    const [tags, setTags] = useState<TagItem[]>([]);

    useEffect(() => {
        fetch('/api/marketplace/tags')
            .then(res => res.json())
            .then(data => setTags(data.data));
    }, []);

    return (
        <div className='flex gap-x-6 overflow-x-auto scrollbar-custom w-full pb-3'>
            {tags.map((tag) => (
                <CustomTag
                    key={tag.id}
                    label={tag.name}
                    isActive={selectedTag === tag.slug}
                    onPress={() => onTagSelect(tag.slug)}
                />
            ))}
        </div>
    );
}

export default memo(TagList);
