export interface Blog {
  _id: string;
  image_url: string;
  title: string;
  content: string;
  description: string;
  tag: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
