type Tags = {
  _id: string;
  name: string;
};

type Author = {
  _id: string;
  name: string;
  image: string;
};

export type Question = {
  _id: string;
  title: string;
  tags: Tags[];
  author: Author;
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
};
