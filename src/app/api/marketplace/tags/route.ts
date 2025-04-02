import { NextResponse } from 'next/server';

export async function GET() {
    // Mock data for tags
    const tags = [
        {
            id: 1,
            name: 'All',
            slug: 'all',
        },
        {
            id: 2,
            name: 'Upper Body',
            slug: 'upper-body',
        },
        {
            id: 3,
            name: 'Lower Body',
            slug: 'lower-body',
        },
        {
            id: 4,
            name: 'Hat',
            slug: 'hat',
        },
        {
            id: 5,
            name: 'Shoes',
            slug: 'shoes',
        },
        {
            id: 6,
            name: 'Accessories',
            slug: 'accessories',
        },
        {
            id: 7,
            name: 'Legendary',
            slug: 'legendary',
        },
        {
            id: 8,
            name: 'Mythic',
            slug: 'mythic',
        },
        {
            id: 9,
            name: 'Epic',
            slug: 'epic',
        },
        {
            id: 10,
            name: 'Rare',
            slug: 'rare',
        },
    ];

    return NextResponse.json({
        success: true,
        data: tags,
    });
}
