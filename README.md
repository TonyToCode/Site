# RSM Competition Program Website

A modern, responsive website for the Russian School of Mathematics Competition Program, showcasing elite math competition training and coaching services.

![RSM Competition Program](https://placehold.co/800x400/005dab/ffffff?text=RSM+Competition+Program)

## 🎯 Project Overview

This website serves as the digital gateway for RSM's mathematics competition programs, designed to attract and inform students and parents about elite mathematical training opportunities. The site features information about two main programs:

- **MCP (Math Competition Preparation)** - Foundation program for students beginning their competitive journey
- **NMCP (National Math Competition Preparation)** - Elite, invitation-only program for advanced competitors

## ✨ Features

### 🎨 Design & User Experience
- **Modern, Responsive Design** - Fully responsive layout optimized for all devices
- **RSM Brand Integration** - Consistent color scheme and typography matching RSM standards
- **Interactive 3D Logo** - Three.js powered 3D logo animation
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Accessibility Features** - ARIA labels, keyboard navigation, and screen reader support

### 🛠️ Technical Features
- **Static Site Architecture** - Fast-loading HTML/CSS/JavaScript implementation
- **Tailwind CSS Framework** - Utility-first CSS for rapid development
- **Progressive Enhancement** - Works without JavaScript, enhanced with it
- **FAQ System** - Interactive accordion-style FAQ section
- **Problem Generation** - AI-powered math problem generation using Gemini API
- **Mobile-First Design** - Optimized for mobile devices with desktop enhancements

### 📋 Content Sections
- **Hero Section** - Compelling value proposition and call-to-action
- **Why Competitions** - Benefits of mathematical competition training
- **Pathway Overview** - Four-stage progression from elementary to olympiad level
- **Program Details** - Comprehensive information about MCP and NMCP programs
- **Coach Profiles** - Information about expert mathematics educators
- **Testimonials** - Success stories from students and parents
- **FAQ Section** - Common questions and detailed answers
- **Contact Information** - Multiple ways to connect with RSM advisors

## 🚀 Quick Start

### Prerequisites
- Modern web browser with JavaScript enabled
- Web server (for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TonyToCode/Site.git
   cd Site
   ```

2. **Serve locally** (choose one method)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Project Structure
```
├── index.html              # Main homepage
├── assets/
│   ├── css/
│   │   └── styles.css       # Custom CSS styles and animations
│   └── js/
│       ├── main.js          # Main JavaScript functionality
│       └── logo3d.js        # 3D logo component
├── pages/
│   ├── faq.html            # Dedicated FAQ page
│   └── nmcp-program.html   # NMCP program details
├── rsm.stl                 # 3D model file for logo
├── README.md               # This file
├── IMPROVEMENT_PLAN.md     # Website enhancement roadmap
└── LICENSE                 # Project license
```

## 🎨 Design System

### Color Palette
- **RSM Blue**: `#005dab` - Primary brand color
- **RSM Gold**: `#ffc72c` - Accent and call-to-action color
- **RSM Dark Blue**: `#003e7a` - Text and contrast color
- **RSM Light Gray**: `#f8f9fa` - Background and subtle elements

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif for excellent readability
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technical Implementation

### Dependencies
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Three.js** - 3D graphics library for logo animation
- **Feather Icons** - Beautiful, customizable icon set
- **Inter Font** - Modern typography from Google Fonts
- **Gemini API** - AI-powered math problem generation

### Browser Support
- Chrome 80+
- Firefox 74+
- Safari 13+
- Edge 80+

### Performance Features
- **Optimized Images** - Properly sized placeholder images
- **Lazy Loading** - Deferred loading of non-critical resources
- **Minified Assets** - Compressed CSS and JavaScript
- **Efficient Animations** - CSS transforms and GPU acceleration

## 📈 SEO & Analytics

### SEO Features
- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags for social sharing
- Structured data markup
- Mobile-friendly design
- Fast loading times

### Analytics Ready
- Google Analytics integration points
- Conversion tracking setup
- Core Web Vitals monitoring
- User behavior tracking capabilities

## 🛡️ Security

### Current Security Measures
- HTTPS enforcement
- Input sanitization for API calls
- CSP headers preparation
- Secure external resource loading

### Security Considerations
- API key management (environment variables recommended)
- Rate limiting for API calls
- Content Security Policy implementation
- Regular dependency updates

## 🚀 Deployment Options

### Static Hosting Platforms
- **Netlify** - Recommended for ease of use and automatic deployments
- **Vercel** - Great for modern web projects with Git integration
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3 + CloudFront** - Scalable enterprise solution

### Deployment Commands
```bash
# Build for production (if using build tools)
npm run build

# Deploy to Netlify
netlify deploy --prod

# Deploy to Vercel
vercel --prod
```

## 🤝 Contributing

We welcome contributions to improve the RSM Competition Program website! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Test your changes across different browsers and devices
- Update documentation for any new features
- Ensure accessibility standards are maintained
- Add comments for complex functionality

### Areas for Contribution
- Performance optimizations
- Accessibility improvements
- SEO enhancements
- Additional interactive features
- Bug fixes and improvements
- Documentation updates

## 📊 Improvement Roadmap

See [IMPROVEMENT_PLAN.md](./IMPROVEMENT_PLAN.md) for a comprehensive roadmap of planned enhancements including:

- Performance optimization strategies
- Accessibility compliance improvements
- SEO optimization recommendations
- Security vulnerability fixes
- Code quality enhancements
- User experience improvements

## 📞 Support & Contact

### For Technical Issues
- Create an issue in this repository
- Include browser information and steps to reproduce
- Provide screenshots if applicable

### For Content or Business Inquiries
- **Email**: online.competition@mathschool.com
- **Phone**: 1-800-555-6284
- **Website**: [Russian School of Mathematics](https://www.russianschool.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **RSM Team** - For providing educational content and program information
- **Tony** - Original website creator and maintainer
- **Three.js Community** - For the excellent 3D graphics library
- **Tailwind CSS Team** - For the utility-first CSS framework
- **Feather Icons** - For the beautiful icon set

## 🔮 Future Enhancements

### Planned Features
- [ ] Student portal integration
- [ ] Online assessment system
- [ ] Video testimonials section
- [ ] Multi-language support
- [ ] Progressive Web App features
- [ ] Advanced analytics dashboard
- [ ] Content management system
- [ ] E-commerce integration for program enrollment

### Long-term Vision
Transform this static website into a comprehensive educational platform that serves as the central hub for RSM's competition program community, enabling students, parents, and coaches to interact, track progress, and access resources seamlessly.

---

**Built with ❤️ for mathematical excellence**

*Last updated: January 2025*