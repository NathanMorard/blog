export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  author: string;
  date: string;
}