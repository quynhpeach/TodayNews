export interface ResponseAPIResult {
  news: Articles[];
  total_count?: number;
}

export interface Articles {
  id: string;
  name: string;
  author?: string;
  title?: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}
