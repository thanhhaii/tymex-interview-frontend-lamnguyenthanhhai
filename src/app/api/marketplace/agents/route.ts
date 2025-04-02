import { NextRequest, NextResponse } from 'next/server';
import { agents } from './mockData';

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

        let filteredAgents = [...agents];

        if (search) {
            filteredAgents = filteredAgents.filter(agent =>
                agent.name.toLowerCase().includes(search.toLowerCase()) ||
                agent.owner.name.toLowerCase().includes(search.toLowerCase()),
            );
        }

        if (priceRange && priceRange.length === 2) {
            const [minPrice, maxPrice] = priceRange.map(Number);
            filteredAgents = filteredAgents.filter(agent =>
                agent.price >= minPrice && agent.price <= maxPrice,
            );
        }

        if (tier) {
            filteredAgents = filteredAgents.filter(agent => agent.tier === tier);
        }

        if (theme) {
            filteredAgents = filteredAgents.filter(agent => agent.theme === theme);
        }

        if (time) {
            filteredAgents = filteredAgents.filter(agent => agent.time === time);
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