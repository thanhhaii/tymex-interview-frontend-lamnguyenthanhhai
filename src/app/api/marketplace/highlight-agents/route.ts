import { NextResponse } from 'next/server';
import { highlightAgents } from './mockData';

export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: highlightAgents,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error instanceof Error ? error.message : 'Internal server error' },
            { status: 500 },
        );
    }
}