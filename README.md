# Winston Spencer - Personal Website

A clean, simple portfolio website built with Jekyll.

## Features

- Clean, minimal design
- Responsive layout
- Simple navigation
- Project showcase
- Contact page
- **Accessible**: Following WCAG guidelines for web accessibility
- **GitHub Pages Ready**: Deploy directly to GitHub Pages

## 🛠️ Tech Stack

- **Jekyll**: Static site generator
- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with custom properties
- **JavaScript**: Vanilla JS for interactions
- **Markdown**: Content creation

## 📁 Project Structure

```
├── _layouts/           # HTML templates
│   ├── default.html    # Base template
│   ├── home.html       # Homepage layout
│   ├── page.html       # Static pages
│   └── post.html       # Blog posts
├── _includes/          # Reusable components
│   ├── header.html     # Site header
│   └── footer.html     # Site footer
├── _posts/             # Blog posts
├── _projects/          # Project collection
├── assets/             # Static assets
│   ├── css/
│   └── js/
├── _config.yml         # Jekyll configuration
└── index.md            # Homepage content
```

## 🎨 Customization

### Colors and Theme
Modify CSS custom properties in `assets/css/main.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #212529;
  --accent-primary: #0d6efd;
  /* ... more variables */
}
```

### Site Configuration
Update `_config.yml` with your information:

```yaml
title: Your Name
email: your.email@example.com
description: Your site description
github_username: yourusername
linkedin_username: yourusername
```

### Navigation
Edit the navigation menu in `_includes/header.html`.

## 📝 Content Management

### Adding Projects
Create new files in `_projects/` directory:

```yaml
---
title: Project Name
description: Project description
technologies: [Jekyll, CSS, JavaScript]
github_url: https://github.com/user/repo
---

Project content goes here...
```

## 🚀 Deployment

### GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://yourusername.github.io`

### Local Development
```bash
# Install Jekyll
gem install jekyll bundler

# Clone the repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Optimized assets and minimal dependencies
- **SEO Ready**: Proper meta tags and structured data
- **Mobile Optimized**: Perfect mobile experience

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Jekyll community for the amazing static site generator
- GitHub Pages for free hosting
- Contributors and users of this template

---

**[Live Demo](https://winston-spencer.github.io)** | **[Documentation](../../wiki)** | **[Issues](../../issues)**

## Projects
- **Recursive Hierarchical LLM Architecture:** A Framework for Scalable Task-Specific Language Model Organization. This project explores advanced architectures for large language models that utilize recursive and hierarchical structures to improve reasoning, scalability, and task specialization.
- **Resource Allocation Optimization:** A project dedicated to solving complex resource allocation problems using modern algorithms and computational techniques. This includes optimizing the distribution of limited resources across tasks, projects, or systems to maximize efficiency and effectiveness.
- **Home Cloud Solution:** Integrating file sharing, media streaming, remote access, and IoT device management into a unified home cloud platform. This project focuses on building a secure, flexible, and user-friendly personal cloud using open-source tools and custom hardware.

## Skills
- **Languages:** Kotlin, Python, JavaScript  
- **Frameworks & Tools:** Node.js · K3S · Hugging Face Transformers
- **Infrastructure:** Linux · Milvus · Tuya Smart · Home Assistant

## Contact
- [LinkedIn](https://www.linkedin.com/in/winston-spencer)
- [Instagram](https://www.instagram.com/dr_winston_spencer)
- [GitHub](https://github.com/winston-spencer)
- [Email](mailto:winston.spencer@ndsu.edu)

---
Feel free to explore my projects and reach out if you'd like to collaborate!
