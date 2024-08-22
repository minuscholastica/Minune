// import { remark } from "remark";
// import html from "remark-html";
// import gfm from "remark-gfm";
import highlight from "remark-highlight.js";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import remarkCallout from "@r4ai/remark-callout";

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse, { fragment: true }) // Convert into markdown AST
    .use(remarkCallout)
    .use(remarkRehype) // Transform to HTML AST
    // .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeHighlight) // Highlight code blocks
    .use(rehypeHighlightCodeLines, {
      showLineNumbers: true,
      lineContainerTagName: "div",
    })
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(markdown);

  return String(file);

  // const result = String(file);

  // // Preserve CalloutBox tags
  // let content = result.toString();
  // content = content.replace(/<p><CalloutBox/g, "<CalloutBox");
  // content = content.replace(/<\/CalloutBox><\/p>/g, "</CalloutBox>");

  // return content;
}
