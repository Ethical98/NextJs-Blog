import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';
import marked from 'marked';

export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return { title, date, body };
};

export const getPosts = async () => {
  const slugs = await getSlugs();
  const posts = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    const { title } = post;
    posts.push({ slug, title });
  }
  return posts;
};
export const getSlugs = async () => {
  const suffix = '.md';
  const files = await readdir('content/posts');
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -suffix.length));
};
