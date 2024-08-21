import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(gfm)
    .process(markdown);
  
  // Preserve CalloutBox tags
  let content = result.toString();
  content = content.replace(/<p><CalloutBox/g, '<CalloutBox');
  content = content.replace(/<\/CalloutBox><\/p>/g, '</CalloutBox>');
  
  return content;
}
