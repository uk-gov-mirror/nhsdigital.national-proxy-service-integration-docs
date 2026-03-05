import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import pluginMermaid from '@kevingimbel/eleventy-plugin-mermaid';

export default async function (eleventyConfig) {
  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'base.njk');

  // add support for syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // add support for mermaid diagrams
  eleventyConfig.addPlugin(pluginMermaid);

  // pass static assets through
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    pathPrefix: '/national-proxy-service-integration-docs/',
  };
}
