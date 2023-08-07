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

<ul>
{% for project in projects %}
  <li>
    <a href="{{ project.url }}">{{ project.name }}</a>: {{ project.description }}
  </li>
{% endfor %}
</ul>