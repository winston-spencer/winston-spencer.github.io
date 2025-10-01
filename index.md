---
layout: home
title: Welcome to My Portfolio
---

<div class="intro-section">
  <div class="card">
    <h2>About Me</h2>
    <p>I'm a passionate developer and creative thinker who loves building innovative solutions and exploring new technologies. This is my digital playground where I share my latest projects, ideas, and experiments.</p>
    <p><a href="/about/" class="btn">Learn More About Me</a></p>
  </div>
</div>

<div class="featured-sections">
  <div class="card">
    <h2>Latest Projects</h2>
    <p>Check out some of my recent work and creative endeavors.</p>
    <ul>
      <li><a href="/projects/">View All Projects</a></li>
      <li><a href="/blog/">Read My Blog</a></li>
    </ul>
    <p><a href="/projects/" class="btn btn-outline">View Projects</a></p>
  </div>

  <div class="card">
    <h2>Get in Touch</h2>
    <p>I'm always interested in collaborating on exciting projects or discussing new opportunities.</p>
    <div class="contact">
      <a href="mailto:{{ site.email }}">Email</a>
      {% if site.github_username %}
        <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
      {% endif %}
      {% if site.linkedin_username %}
        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener">LinkedIn</a>
      {% endif %}
    </div>
    <p><a href="/contact/" class="btn btn-outline">Contact Me</a></p>
  </div>
</div>