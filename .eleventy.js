// .eleventy.js
module.exports = function(eleventyConfig) {
  
    // Add passthrough copy for CSS file
    eleventyConfig.addPassthroughCopy("style.css");
  
    eleventyConfig.addCollection("portfolio", function (collection) {
      return collection.getFilteredByGlob("_portfolio/*.md");
    });
  
    // copy the assets folder to the output directory
    eleventyConfig.addPassthroughCopy("assets");
  
    // Return the Eleventy options object
    return {
      // set the output directory to docs
      dir: {
        output: "docs"
      },
      // set the template engine to Nunjucks
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk"
    };
  };
  