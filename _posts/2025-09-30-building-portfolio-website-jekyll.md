---
layout: post
title: "Building a Modern Portfolio Website with Jekyll"
date: 2025-09-30 10:00:00 -0600
categories: [web-development, jekyll]
tags: [jekyll, github-pages, portfolio, web-design]
author: Winston Spencer
---

Creating a portfolio website is one of the most important steps in establishing your online presence as a developer. In this post, I'll walk through the process of building a modern, responsive portfolio website using Jekyll and GitHub Pages.

## Why Jekyll?

Jekyll is a fantastic choice for portfolio websites because it offers:

- **Static Site Generation**: Fast, secure, and easy to host
- **GitHub Pages Integration**: Free hosting with automatic deployment
- **Markdown Support**: Write content in a developer-friendly format
- **Templating System**: Reusable layouts and components
- **No Database Required**: Content is stored in files, not databases

## Key Features of My Template

### Responsive Design

The template uses CSS Grid and Flexbox to create layouts that work seamlessly across all device sizes. The navigation automatically collapses into a mobile-friendly menu on smaller screens.

```css
.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    flex-direction: column;
  }
  
  .nav-menu.active {
    display: flex;
  }
}
```

### Dark Mode Support

One of the most requested features in modern websites is dark mode. I implemented this using CSS custom properties and JavaScript:

```javascript
function setTheme(theme) {
  if (theme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
}
```

### Modular Architecture

The template follows Jekyll best practices with separate layouts for different content types:

- `default.html`: Base template with header, footer, and common elements
- `page.html`: For static pages like About and Contact
- `post.html`: For blog posts with metadata and related posts
- `home.html`: Custom layout for the homepage

## Performance Considerations

Performance is crucial for user experience and SEO. The template includes several optimizations:

1. **Minimal Dependencies**: No heavy frameworks or libraries
2. **Optimized Assets**: Compressed CSS and JavaScript
3. **Lazy Loading**: Images load only when needed
4. **Caching Headers**: Proper cache control for static assets

## SEO and Accessibility

The template is built with SEO and accessibility in mind:

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Meta descriptions and Open Graph tags
- Fast loading times
- Mobile-friendly design

## Getting Started

If you want to use this template for your own portfolio:

1. Fork the repository from GitHub
2. Update `_config.yml` with your information
3. Replace the sample content with your own
4. Customize the colors and styling to match your brand
5. Deploy to GitHub Pages

## Conclusion

Building a portfolio website doesn't have to be complicated. With Jekyll and this template, you can have a professional-looking site up and running in no time. The key is to focus on showcasing your work clearly and making it easy for visitors to get in touch.

What features would you like to see in a portfolio template? Let me know in the comments or [reach out directly](/contact/)!

---

*This post is part of my series on web development best practices. Stay tuned for more technical deep-dives and tutorials.*