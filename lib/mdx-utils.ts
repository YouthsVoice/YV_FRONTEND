// lib/mdx-utils.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { docSections } from '../components/dosc_comp/content/docs';

export async function getDocContent(slug: string) {
  const docsDir = path.join(process.cwd(), 'content/docs');
  const filePath = path.join(docsDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    content,
    frontMatter: data,
  };
}

export function getAllDocPaths() {
  return docSections.flatMap(section =>
    section.items.map(item => ({
      params: {
        slug: item.href.replace('/docs/', '').split('/'),
      },
    }))
  );
}