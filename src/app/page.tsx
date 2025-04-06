'use client';

import React, { useState } from 'react';
import { newsSources } from '../data/newsSources';

interface NewsItem {
  source: string;
  url: string;
  category: string;
  headlines: string[];
}

const newsCategories = [
  { id: 1, name: 'World News', icon: '🌍' },
  { id: 2, name: 'Technology', icon: '💻' },
  { id: 3, name: 'Business', icon: '💼' },
  { id: 4, name: 'Sports', icon: '⚽' },
  { id: 5, name: 'Entertainment', icon: '🎬' },
  { id: 6, name: 'Science', icon: '🔬' },
  { id: 7, name: 'Health', icon: '🏥' },
  { id: 8, name: 'Politics', icon: '🏛️' },
  { id: 9, name: 'Environment', icon: '🌱' },
];

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [aggregatedNews, setAggregatedNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleTopicClick = (topicId: number) => {
    setSelectedTopics(prev => {
      if (prev.includes(topicId)) {
        return prev.filter(id => id !== topicId);
      } else {
        return [...prev, topicId];
      }
    });
  };

  const handleAggregate = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const selectedCategories = newsCategories
        .filter(category => selectedTopics.includes(category.id))
        .map(category => category.name);

      const response = await fetch('/api/aggregate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedTopics: selectedCategories }),
      });

      if (!response.ok) {
        throw new Error('Failed to aggregate news');
      }

      const data = await response.json();
      setAggregatedNews(data.news);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getSourcesForCategory = (categoryName: string) => {
    return newsSources.filter(source => 
      source.category.toLowerCase() === categoryName.toLowerCase()
    );
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">News Aggregator</h1>
        
        {/* News Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {newsCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleTopicClick(category.id)}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                selectedTopics.includes(category.id) ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              {selectedTopics.includes(category.id) && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Reputable Sources:</h3>
                  <ul className="space-y-2">
                    {getSourcesForCategory(category.name).map(source => (
                      <li key={source.id} className="text-sm">
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {source.name}
                        </a>
                        <p className="text-gray-500 text-xs">{source.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Aggregate Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleAggregate}
            disabled={selectedTopics.length === 0 || isLoading}
            className={`px-6 py-3 rounded-lg text-white font-semibold ${
              selectedTopics.length === 0 || isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isLoading ? 'Aggregating...' : `Aggregate News (${selectedTopics.length} selected)`}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Aggregated News Results */}
        {aggregatedNews.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Aggregated News</h2>
            <div className="space-y-6">
              {aggregatedNews.map((newsItem, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {newsItem.source}
                    </a>
                    <span className="text-sm text-gray-500 ml-2">({newsItem.category})</span>
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {newsItem.headlines.map((headline, idx) => (
                      <li key={idx} className="text-gray-700">{headline}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 