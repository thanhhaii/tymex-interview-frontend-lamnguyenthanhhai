import { NextRequest, NextResponse } from 'next/server';
import { agentsMockData } from './mockData';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        const offset = parseInt(searchParams.get('offset') || '0');
        const size = parseInt(searchParams.get('size') || '10');

        const search = searchParams.get('search') || '';
        const priceRange = searchParams.get('price')?.split(',');
        const tier = searchParams.get('tier');
        const theme = searchParams.get('theme');
        const time = searchParams.get('time');
        const priceOrder = searchParams.get('priceOrder');
        const tag = searchParams.get('tag');
        let filteredAgents = agentsMockData;

        if (search) {
            filteredAgents = filteredAgents.filter(agent =>
                JSON.stringify(agent).toLowerCase().includes(search.toLowerCase()),
            );
        }

        if (priceRange && priceRange.length === 2) {
            const [minPrice, maxPrice] = priceRange.map(Number);
            filteredAgents = filteredAgents.filter(agent =>
                agent.price >= minPrice && agent.price <= maxPrice,
            );
        }

        if (tier) {
            filteredAgents = filteredAgents.filter(agent => agent.tier.toLowerCase().includes(tier.toLowerCase()));
        }

        if (theme) {
            filteredAgents = filteredAgents.filter(agent => agent.theme.toLowerCase().includes(theme.toLowerCase()));
        }

        if (time) {
            filteredAgents.sort((a, b) => {
                if (priceOrder === 'asc') {
                    return a.time - b.time;
                } else {
                    return b.time - a.time;
                }
            });
        }

        if (priceOrder) {
            filteredAgents.sort((a, b) => {
                if (priceOrder === 'asc') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        }

        if (tag) {
            filteredAgents = filteredAgents.filter(agent => agent.tag.toLowerCase().includes(tag.toLowerCase()));
        }

        const paginatedAgents = filteredAgents.slice(offset, offset + size);
        const total = filteredAgents.length;

        return NextResponse.json({
            success: true,
            data: {
                items: paginatedAgents,
                total,
                offset,
                size,
                hasMore: offset + size < total,
            },
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error instanceof Error ? error.message : 'Internal server error' },
            { status: 500 },
        );
    }
}