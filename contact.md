---
layout: page
title: Contact Me
subtitle: Let's start a conversation
---

I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in discussing technology and creative projects.

## Get in Touch

<div class="contact-methods">
  <div class="card">
    <h3>📧 Email</h3>
    <p>The best way to reach me for professional inquiries or collaboration opportunities.</p>
    <p><a href="mailto:{{ site.email }}" class="btn">{{ site.email }}</a></p>
  </div>

  {% if site.github_username %}
  <div class="card">
    <h3>💻 GitHub</h3>
    <p>Check out my code, contribute to my projects, or start a discussion.</p>
    <p><a href="https://github.com/{{ site.github_username }}" class="btn btn-outline" target="_blank" rel="noopener">github.com/{{ site.github_username }}</a></p>
  </div>
  {% endif %}

  {% if site.linkedin_username %}
  <div class="card">
    <h3>🔗 LinkedIn</h3>
    <p>Connect with me professionally and stay updated on my career journey.</p>
    <p><a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="btn btn-outline" target="_blank" rel="noopener">linkedin.com/in/{{ site.linkedin_username }}</a></p>
  </div>
  {% endif %}
</div>

## What I'm Looking For

I'm particularly interested in:

- **Collaboration opportunities** on open-source projects
- **Technical discussions** about web development and software engineering
- **Creative projects** that challenge conventional thinking
- **Learning opportunities** in new technologies and methodologies

## Response Time

I typically respond to emails within 24-48 hours. For urgent matters, please mention it in your subject line.

---

*Thank you for your interest in connecting! I look forward to hearing from you.*