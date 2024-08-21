import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .use(gfm) // GitHub Flavored Markdown
    .process(markdown);
  return result.toString();
}
