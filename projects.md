---
layout: page
title: My Projects
subtitle: A showcase of my work and creative endeavors
---

Welcome to my project portfolio! Here you'll find a collection of my work, ranging from web development projects to creative experiments. Each project represents a learning journey and an opportunity to explore new technologies and ideas.

## Featured Projects

<div class="projects-grid">
  {% for project in site.projects limit:6 %}
    <div class="card project-card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
      {% endif %}
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p>{{ project.description | truncate: 120 }}</p>
      
      {% if project.technologies %}
        <div class="project-tech">
          {% for tech in project.technologies %}
            <span class="tech-tag">{{ tech }}</span>
          {% endfor %}
        </div>
      {% endif %}
      
      <div class="project-links">
        <a href="{{ project.url | relative_url }}" class="btn btn-outline">Learn More</a>
        {% if project.github_url %}
          <a href="{{ project.github_url }}" class="btn" target="_blank" rel="noopener">View Code</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

{% if site.projects.size == 0 %}
<div class="card">
  <h3>Coming Soon</h3>
  <p>I'm currently working on some exciting projects that will be showcased here soon. Check back later to see what I've been building!</p>
</div>
{% endif %}

## Project Categories

- **Web Applications**: Full-stack web applications built with modern frameworks
- **Open Source**: Contributions to open-source projects and community tools
- **Experiments**: Creative coding experiments and proof-of-concepts
- **Client Work**: Selected client projects (where permission allows)

## Want to Collaborate?

I'm always open to collaborating on interesting projects. If you have an idea you'd like to explore together, or if you'd like to contribute to any of my open-source projects, please [get in touch](/contact/)!

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-md);
}

.project-tech {
  margin: var(--spacing-sm) 0;
}

.tech-tag {
  display: inline-block;
  background-color: var(--bg-tertiary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

.project-links {
  margin-top: auto;
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.project-links .btn {
  flex: 1;
  text-align: center;
  min-width: 120px;
}
</style>