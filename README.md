# 🎵 VIBE TEST

> A sick-as-fuck testing suite for web projects. Run all the tests, find all the issues, ship with confidence.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🔥 What is This?

Vibe Test is a comprehensive, zero-config testing toolkit that runs **all** the important tests on your web project:

- ⚡ **Performance** - Lighthouse audits, bundle analysis
- ♿ **Accessibility** - WCAG compliance, a11y checks
- 🔒 **Security** - Dependency audits, vulnerability scans
- 🖼️ **Images** - Size analysis, optimization opportunities
- 🔗 **Links** - Broken link detection
- 🎨 **CSS** - Complexity analysis, unused code detection
- 📈 **SEO** - Meta tags, schema, optimization
- 💪 **Load Testing** - Stress tests, performance under load

## 🚀 Quick Start

### Installation

```bash
# Clone or copy this directory
cd /Users/ctavolazzi/Code/vibe-test

# Install dependencies
npm install

# Link globally (makes 'vibe' command available everywhere)
npm link
```

### Usage

```bash
# Test a local server
vibe http://localhost:5173

# Test any URL
vibe https://yoursite.com

# Run all tests
vibe --all

# Run specific tests
vibe --perf               # Performance only
vibe --a11y               # Accessibility only
vibe --security           # Security only
vibe --images             # Image analysis only
vibe --links              # Link checking only
vibe --css                # CSS analysis only
vibe --seo                # SEO only
vibe --load               # Load testing only

# Quick mode (skip slow tests)
vibe --all --quick
```

## 📋 Available Tests

### Performance Tests (`--perf`)
- Full Lighthouse audit
- Core Web Vitals
- Time to Interactive
- First Contentful Paint
- Cumulative Layout Shift

**Quick mode:** Runs single-page Lighthouse scan
**Full mode:** Scans entire site with Unlighthouse

### Accessibility Tests (`--a11y`)
- WCAG 2.1 compliance
- Color contrast ratios
- ARIA label validation
- Keyboard navigation
- Screen reader compatibility

### Security Tests (`--security`)
- npm dependency vulnerabilities
- Known CVEs in packages
- Outdated dependencies
- Security best practices

### Image Analysis (`--images`)
- Lists all images by size
- Identifies optimization opportunities
- Suggests format conversions
- Detects oversized images

### Link Checking (`--links`)
- Validates all internal links
- Checks external links
- Reports 404s and redirects
- Identifies broken anchors

### CSS Analysis (`--css`)
- File size metrics
- Complexity analysis
- Unused selectors
- Color palette usage
- Font stack analysis

### SEO Analysis (`--seo`)
- Meta tag validation
- Open Graph tags
- Schema markup
- Heading hierarchy
- Image alt attributes
- Robots.txt validation

### Load Testing (`--load`)
- Simulates 1000 requests
- 10 concurrent users
- Response time metrics
- Throughput analysis
- Error rate tracking

## 🎨 Example Output

```bash
$ vibe http://localhost:5173 --all

╦  ╦╦╔╗ ╔═╗  ╔╦╗╔═╗╔═╗╔╦╗
╚╗╔╝║╠╩╗║╣    ║ ║╣ ╚═╗ ║
 ╚╝ ╩╚═╝╚═╝   ╩ ╚═╝╚═╝ ╩
  Testing suite that actually vibes

┌────────────────────────────────────┐
│                                    │
│  Testing: http://localhost:5173    │
│  Mode: Complete                    │
│                                    │
└────────────────────────────────────┘

🚀 Performance Tests

✔ Complete performance scan
  Score: 98/100

♿ Accessibility Tests

✔ WCAG compliance check
  0 errors, 2 warnings

🔒 Security Tests

✔ NPM dependency audit
  0 vulnerabilities

🖼️  Image Analysis

✔ Analyzing image sizes
  Top 3 images: 1.2MB, 800KB, 650KB

✨ All tests complete! ✨

Completed in 45.32s
```

## 🛠️ Configuration

Create a `vibe-test.config.js` in your project root:

```javascript
export default {
  url: 'http://localhost:5173',
  exclude: {
    links: ['linkedin.com', 'twitter.com'],
  },
  thresholds: {
    performance: 90,
    accessibility: 100,
    maxImageSize: '500KB',
  },
  paths: {
    images: 'public/images',
    css: 'src/style.css',
    dist: 'dist',
  },
};
```

## 📁 Project Structure

```
vibe-test/
├── bin/
│   └── cli.js           # CLI entry point
├── src/
│   ├── index.js         # Main test orchestrator
│   ├── tests/           # Individual test modules
│   └── utils/           # Helper functions
├── package.json
└── README.md
```

## 🎯 Integration with CI/CD

Add to your GitHub Actions workflow:

```yaml
name: Vibe Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: npx vibe-test http://localhost:5173 --all
```

## 🔧 Development

```bash
# Run tests locally
npm test

# Run in dev mode
npm run dev

# Link for global use
npm link
```

## 📦 What's Inside?

This tool uses these awesome open-source projects:

- [Lighthouse](https://github.com/GoogleChrome/lighthouse) - Performance auditing
- [Pa11y](https://pa11y.org/) - Accessibility testing
- [Unlighthouse](https://unlighthouse.dev/) - Multi-page scanning
- [broken-link-checker](https://github.com/stevenvachon/broken-link-checker) - Link validation
- [cssstats](https://cssstats.com/) - CSS analysis
- [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html) - Load testing
- [chalk](https://github.com/chalk/chalk) - Terminal colors
- [ora](https://github.com/sindresorhus/ora) - Spinners
- [boxen](https://github.com/sindresorhus/boxen) - Boxes in terminal

## 🎨 Philosophy

We believe testing should be:
- **Easy** - One command to run everything
- **Fast** - Skip what you don't need
- **Beautiful** - Output that doesn't suck
- **Actionable** - Clear recommendations, not just scores
- **Fun** - Testing should vibe, not bore

## 🤝 Contributing

Found a bug? Want to add a test? PRs welcome!

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -am 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Create a Pull Request

## 📝 License

MIT - Go wild, build cool stuff

## 🙏 Credits

Built with love for developers who ship quality.

---

**Made with ☕ and vibes**

For questions or issues, open an issue on GitHub or hit me up!

