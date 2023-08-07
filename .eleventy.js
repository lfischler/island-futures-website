module.exports = {
    // set the output directory to docs
    dir: {
      output: "docs"
    },
    // set the template engine to Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // copy the assets folder to the output directory
    addPassthroughCopy: "assets"
  };
  