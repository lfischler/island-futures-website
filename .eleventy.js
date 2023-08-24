const Image = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");
const config = require("./config"); // Path to my config file containing: DO_SPACE_NAME, DO_API_KEY, DO_ENDPOINT

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg"],
    urlPath: "/images/",
    outputDir: "./public/images/"
  });

  // Modify the image URL to point to your DigitalOcean Space
  let imageUrl = metadata.jpeg[0].url.replace("/images/", `${config.DO_ENDPOINT}/${config.DO_API_KEY}/${config.DO_SPACE_NAME}`);

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    src: imageUrl // Use the modified image URL
  };

  return `<img ${Object.entries(imageAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")}>`;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
};







const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); // for side nav

const { EleventyRenderPlugin } = require("@11ty/eleventy"); // for rendering md sections

const embeds = require("eleventy-plugin-embed-everything");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin); //for side navigation
  
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(embeds);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
