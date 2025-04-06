import { NextResponse } from 'next/server';
import { newsSources } from '@/data/newsSources';

export async function POST(request: Request) {
  try {
    const { selectedTopics } = await request.json();
    
    // Get all sources for the selected topics
    const sources = newsSources.filter(source => 
      selectedTopics.includes(source.category)
    );

    // TODO: Implement actual LLM integration here
    // For now, we'll return a mock response
    const mockNews = sources.map(source => ({
      source: source.name,
      url: source.url,
      category: source.category,
      headlines: [
        "Sample headline 1 from " + source.name,
        "Sample headline 2 from " + source.name,
        "Sample headline 3 from " + source.name
      ]
    }));

    return NextResponse.json({ news: mockNews });
  } catch (error) {
    console.error('Error aggregating news:', error);
    return NextResponse.json(
      { error: 'Failed to aggregate news' },
      { status: 500 }
    );
  }
} 