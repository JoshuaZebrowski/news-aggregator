export interface NewsSource {
  id: number;
  name: string;
  url: string;
  category: string;
  description: string;
}

export const newsSources: NewsSource[] = [
  // World News
  {
    id: 1,
    name: 'BBC News',
    url: 'https://www.bbc.com/news',
    category: 'World News',
    description: 'British public service broadcaster providing comprehensive global news coverage'
  },
  {
    id: 2,
    name: 'Reuters',
    url: 'https://www.reuters.com',
    category: 'World News',
    description: 'International news organization known for factual reporting'
  },
  {
    id: 3,
    name: 'The New York Times',
    url: 'https://www.nytimes.com',
    category: 'World News',
    description: 'American daily newspaper with global reach and influence'
  },
  {
    id: 4,
    name: 'The Guardian',
    url: 'https://www.theguardian.com',
    category: 'World News',
    description: 'British daily newspaper with strong investigative journalism'
  },
  {
    id: 5,
    name: 'Associated Press',
    url: 'https://apnews.com',
    category: 'World News',
    description: 'Independent global news organization'
  },

  // Technology
  {
    id: 6,
    name: 'Wired',
    url: 'https://www.wired.com',
    category: 'Technology',
    description: 'Leading source of technology news and analysis'
  },
  {
    id: 7,
    name: 'The Verge',
    url: 'https://www.theverge.com',
    category: 'Technology',
    description: 'Comprehensive coverage of technology news and reviews'
  },
  {
    id: 8,
    name: 'TechCrunch',
    url: 'https://techcrunch.com',
    category: 'Technology',
    description: 'Breaking technology news and startup coverage'
  },
  {
    id: 9,
    name: 'Ars Technica',
    url: 'https://arstechnica.com',
    category: 'Technology',
    description: 'In-depth technology news and analysis'
  },

  // Business
  {
    id: 10,
    name: 'The Wall Street Journal',
    url: 'https://www.wsj.com',
    category: 'Business',
    description: 'Leading source of business and financial news'
  },
  {
    id: 11,
    name: 'Financial Times',
    url: 'https://www.ft.com',
    category: 'Business',
    description: 'International business and financial news'
  },
  {
    id: 12,
    name: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    category: 'Business',
    description: 'Global business and financial news'
  },
  {
    id: 13,
    name: 'The Economist',
    url: 'https://www.economist.com',
    category: 'Business',
    description: 'Weekly newspaper focusing on international business and world affairs'
  },

  // Sports
  {
    id: 14,
    name: 'ESPN',
    url: 'https://www.espn.com',
    category: 'Sports',
    description: 'Comprehensive sports news and coverage'
  },
  {
    id: 15,
    name: 'BBC Sport',
    url: 'https://www.bbc.com/sport',
    category: 'Sports',
    description: 'Global sports news and live coverage'
  },
  {
    id: 16,
    name: 'The Athletic',
    url: 'https://theathletic.com',
    category: 'Sports',
    description: 'In-depth sports journalism and analysis'
  },

  // Entertainment
  {
    id: 17,
    name: 'Variety',
    url: 'https://variety.com',
    category: 'Entertainment',
    description: 'Entertainment industry news and reviews'
  },
  {
    id: 18,
    name: 'The Hollywood Reporter',
    url: 'https://www.hollywoodreporter.com',
    category: 'Entertainment',
    description: 'Film, television, and entertainment news'
  },
  {
    id: 19,
    name: 'Deadline',
    url: 'https://deadline.com',
    category: 'Entertainment',
    description: 'Breaking entertainment news and industry analysis'
  },

  // Science
  {
    id: 20,
    name: 'Nature',
    url: 'https://www.nature.com',
    category: 'Science',
    description: 'International weekly journal of science'
  },
  {
    id: 21,
    name: 'Science Magazine',
    url: 'https://www.science.org',
    category: 'Science',
    description: 'Leading scientific research and news'
  },
  {
    id: 22,
    name: 'Scientific American',
    url: 'https://www.scientificamerican.com',
    category: 'Science',
    description: 'Science news and research analysis'
  },

  // Health
  {
    id: 23,
    name: 'STAT News',
    url: 'https://www.statnews.com',
    category: 'Health',
    description: 'Health and medicine news and analysis'
  },
  {
    id: 24,
    name: 'Medical News Today',
    url: 'https://www.medicalnewstoday.com',
    category: 'Health',
    description: 'Health news and medical information'
  },
  {
    id: 25,
    name: 'Healthline',
    url: 'https://www.healthline.com',
    category: 'Health',
    description: 'Health and wellness news and information'
  },

  // Politics
  {
    id: 26,
    name: 'The Washington Post',
    url: 'https://www.washingtonpost.com',
    category: 'Politics',
    description: 'American daily newspaper covering politics and national affairs'
  },
  {
    id: 27,
    name: 'Politico',
    url: 'https://www.politico.com',
    category: 'Politics',
    description: 'Political news and analysis'
  },
  {
    id: 28,
    name: 'The Hill',
    url: 'https://thehill.com',
    category: 'Politics',
    description: 'Political news and congressional coverage'
  },

  // Environment
  {
    id: 29,
    name: 'Inside Climate News',
    url: 'https://insideclimatenews.org',
    category: 'Environment',
    description: 'Climate change and environmental news'
  },
  {
    id: 30,
    name: 'Grist',
    url: 'https://grist.org',
    category: 'Environment',
    description: 'Environmental news and solutions'
  },
  {
    id: 31,
    name: 'E&E News',
    url: 'https://www.eenews.net',
    category: 'Environment',
    description: 'Energy and environmental policy news'
  }
]; 