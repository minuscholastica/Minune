import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { Plugin } from 'unified';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

const preserveCalloutBox: Plugin = () => {
  return (tree: Node) => {
    visit(tree, 'html', (node: any) => {
      if (node.value.startsWith('<CalloutBox')) {
        node.type = 'text';
      }
    });
  };
};

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(preserveCalloutBox)
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .use(gfm) // GitHub Flavored Markdown
    .process(markdown);
  return result.toString();
}
