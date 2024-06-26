export interface Forum {
  _id: number;
  title: string;
  description: string;
  category: string;
  total_likes: number;
  total_comments: number;
  createdAt: Date;
  updatedAt: Date;
}
