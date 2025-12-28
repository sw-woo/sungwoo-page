# Sungwoo's Portfolio & Tech Blog

Modern portfolio and technical blog built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Portfolio Showcase**: Display of featured projects with GitHub integration
- **Tech Blog**: Markdown-based blog system for technical writing
- **Contact Form**: Integrated email contact form using EmailJS
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode Ready**: Support for dark/light themes
- **SEO Optimized**: Meta tags and OpenGraph support
- **GitHub Pages**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Markdown**: gray-matter, remark, remark-html
- **Email**: EmailJS
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Writing Blog Posts

Create markdown files in the `posts/` directory:

```markdown
---
title: "Your Post Title"
date: "2024-12-20"
excerpt: "Brief description of your post"
tags: ["Tag1", "Tag2"]
author: "Sungwoo"
---

Your content here...
```

## 🎨 Customization

### Update Personal Info

1. Edit contact information in `components/Contact.tsx`
2. Update social links in `components/Footer.tsx`
3. Modify tech stack in `components/Hero.tsx`
4. Update projects in `components/Projects.tsx`

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update credentials in `components/Contact.tsx`:
   - `serviceId`
   - `templateId`
   - `publicKey`

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions"

Your site will be available at: `https://sw-woo.github.io/sungwoo-page/`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- GitHub: [@sw-woo](https://github.com/sw-woo)
- Email: your.email@example.com

---

Built with ❤️ using Next.js
