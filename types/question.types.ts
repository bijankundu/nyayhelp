export interface Question {
  _id: string;
  title: string;
  description: string;
  category: string;
  total_likes: number;
  total_comments: number;
  createdAt: Date;
  updatedAt: Date;
}
