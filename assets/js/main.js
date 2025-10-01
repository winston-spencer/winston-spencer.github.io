/**
 * Portfolio Site JavaScript
 * Handles theme switching, navigation, and other interactive features
 */

(function() {
  'use strict';

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initNavigation();
    initScrollEffects();
    initFormValidation();
  });

  /**
   * Theme Toggle Functionality
   */
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle?.querySelector('.theme-icon');

    if (!themeToggle) return;

    // Function to set theme
    function setTheme(theme) {
      if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        body.removeAttribute('data-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    }

    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
      const currentTheme = body.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /**
   * Mobile Navigation
   */
  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Update aria-expanded attribute
      const isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
      
      // Toggle hamburger animation
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking on links (mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /**
   * Scroll Effects
   */
  function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should fade in
    document.querySelectorAll('.card, .post, .page-content > *').forEach(function(el) {
      observer.observe(el);
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.site-header');
    
    if (header) {
      window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down
          header.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      });
    }
  }

  /**
   * Form Validation (if forms exist)
   */
  function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(function(field) {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            
            // Remove error class after user starts typing
            field.addEventListener('input', function() {
              this.classList.remove('error');
            }, { once: true });
          }
        });

        // Validate email fields
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(function(field) {
          if (field.value && !isValidEmail(field.value)) {
            isValid = false;
            field.classList.add('error');
            
            field.addEventListener('input', function() {
              this.classList.remove('error');
            }, { once: true });
          }
        });

        if (!isValid) {
          e.preventDefault();
          
          // Show error message
          showMessage('Please fill in all required fields correctly.', 'error');
          
          // Focus first error field
          const firstError = form.querySelector('.error');
          if (firstError) {
            firstError.focus();
          }
        }
      });
    });
  }

  /**
   * Utility Functions
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(function(msg) {
      msg.remove();
    });

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message message--${type}`;
    messageEl.textContent = message;
    
    // Style the message
    Object.assign(messageEl.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      borderRadius: '6px',
      zIndex: '9999',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      transform: 'translateX(100%)',
      opacity: '0'
    });

    // Set colors based on type
    if (type === 'error') {
      messageEl.style.backgroundColor = '#dc3545';
      messageEl.style.color = 'white';
    } else if (type === 'success') {
      messageEl.style.backgroundColor = '#28a745';
      messageEl.style.color = 'white';
    } else {
      messageEl.style.backgroundColor = '#17a2b8';
      messageEl.style.color = 'white';
    }

    document.body.appendChild(messageEl);

    // Animate in
    setTimeout(function() {
      messageEl.style.transform = 'translateX(0)';
      messageEl.style.opacity = '1';
    }, 10);

    // Auto remove after 5 seconds
    setTimeout(function() {
      messageEl.style.transform = 'translateX(100%)';
      messageEl.style.opacity = '0';
      setTimeout(function() {
        if (messageEl.parentNode) {
          messageEl.parentNode.removeChild(messageEl);
        }
      }, 300);
    }, 5000);

    // Click to dismiss
    messageEl.addEventListener('click', function() {
      this.style.transform = 'translateX(100%)';
      this.style.opacity = '0';
      setTimeout(function() {
        if (messageEl.parentNode) {
          messageEl.parentNode.removeChild(messageEl);
        }
      }, 300);
    });
  }

  /**
   * Copy to clipboard functionality
   */
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        showMessage('Copied to clipboard!', 'success');
      }).catch(function() {
        showMessage('Failed to copy to clipboard.', 'error');
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        showMessage('Copied to clipboard!', 'success');
      } catch (err) {
        showMessage('Failed to copy to clipboard.', 'error');
      }
      
      document.body.removeChild(textArea);
    }
  }

  // Add copy buttons to code blocks
  document.querySelectorAll('pre code').forEach(function(codeBlock) {
    const pre = codeBlock.parentNode;
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.className = 'copy-button';
    button.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: var(--accent-primary);
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;
    `;
    
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    pre.addEventListener('mouseenter', function() {
      button.style.opacity = '1';
    });
    
    pre.addEventListener('mouseleave', function() {
      button.style.opacity = '0';
    });
    
    button.addEventListener('click', function() {
      copyToClipboard(codeBlock.textContent);
    });
  });

  // Make functions available globally if needed
  window.portfolioSite = {
    showMessage: showMessage,
    copyToClipboard: copyToClipboard
  };

})();