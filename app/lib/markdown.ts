import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

const calloutBoxPlugin = () => {
  return (tree) => {
    visit(tree, 'html', (node) => {
      if (node.value.startsWith('<CalloutBox')) {
        const iconMatch = node.value.match(/icon="([^"]+)"/);
        const icon = iconMatch ? iconMatch[1] : '💡';
        node.value = node.value
          .replace(/<CalloutBox[^>]*>/, `<div class="callout-box" data-icon="${icon}">`)
          .replace('</CalloutBox>', '</div>');
      }
    });
  };
};

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .use(gfm) // GitHub Flavored Markdown
    .use(calloutBoxPlugin)
    .process(markdown);
  return result.toString();
}
