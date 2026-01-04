export type BlogPost = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
  comments: number;
};
export type BlogData = {
  id: number;
  title: string;
  slug: string;
  category: string;
  banner: string;
  short_description: string;
  description: string; // HTML string
  comment_count: number;
  status: number; // usually 0 | 1
  link: string | null;
  meta_title: string | null;
  meta_description: string | null;
};
