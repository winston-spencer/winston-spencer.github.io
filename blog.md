---
layout: page
title: Blog
subtitle: Thoughts, tutorials, and insights
---

Welcome to my blog! Here I share my thoughts on web development, programming challenges, new technologies, and lessons learned from various projects.

## Recent Posts

<div class="posts-list">
  {% for post in site.posts %}
    <article class="card post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%B %d, %Y" }}
        </time>
        
        {% if post.categories.size > 0 %}
          <span class="post-categories">
            in 
            {% for category in post.categories %}
              <a href="/categories/{{ category }}" class="category-link">{{ category }}</a>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </span>
        {% endif %}
      </div>
      
      <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
      
      {% if post.tags.size > 0 %}
        <div class="post-tags">
          {% for tag in post.tags limit:5 %}
            <span class="tag-link">{{ tag }}</span>{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </div>
      {% endif %}
      
      <a href="{{ post.url | relative_url }}" class="btn btn-outline">Read More</a>
    </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="card">
  <h3>Coming Soon</h3>
  <p>I'm working on some interesting blog posts about web development, programming challenges, and technology insights. Check back soon for the first posts!</p>
</div>
{% endif %}

## Topics I Write About

- **Web Development**: Modern frameworks, best practices, and tutorials
- **Programming**: Problem-solving approaches and code optimization
- **Technology**: New tools, languages, and industry trends
- **Project Insights**: Lessons learned from real-world projects
- **Career Development**: Tips for developers and tech professionals

## Stay Updated

Want to be notified when I publish new posts? You can:

- Subscribe to the [RSS feed](/feed.xml)
- Follow me on [GitHub](https://github.com/{{ site.github_username }}) for project updates
- Connect with me on [LinkedIn](https://linkedin.com/in/{{ site.linkedin_username }})

<style>
.posts-list {
  margin: var(--spacing-xl) 0;
}

.post-preview {
  margin-bottom: var(--spacing-lg);
}

.post-preview h3 {
  margin-bottom: var(--spacing-sm);
}

.post-preview h3 a {
  color: var(--text-primary);
  text-decoration: none;
}

.post-preview h3 a:hover {
  color: var(--accent-primary);
}

.post-preview .post-meta {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--text-muted);
}

.post-preview .post-tags {
  margin: var(--spacing-sm) 0;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.post-preview .btn {
  margin-top: var(--spacing-md);
}
</style>