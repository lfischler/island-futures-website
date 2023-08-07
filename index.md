---
title: My Portfolio
layout: base.njk
permalink: index.html
---
# My Portfolio

Hello, world! This is my portfolio website built with Eleventy.

## About Me

I'm a web developer who loves to create beautiful and functional websites.

## My Projects

Here are some of the projects I've worked on:

<div class="portfolio-grid">
  {% for project in collections.portfolio %}
    <div class="portfolio-item">
      <h2>{{ project.data.title }}</h2>
      <p>{{ project.data.description }}</p>
      <pre>{{ project | dump }}</pre> <!-- Debug output -->
    </div>
  {% endfor %}
</div>
