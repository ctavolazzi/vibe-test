/**
 * Vibe Test Configuration
 *
 * Customize your testing setup here
 */

export default {
  // Default URL to test (can be overridden with CLI arg)
  url: 'http://localhost:5173',

  // Exclude certain domains from link checking
  exclude: {
    links: [
      'linkedin.com',
      'twitter.com',
      'facebook.com',
      'instagram.com',
      'x.com',
    ],
  },

  // Performance thresholds (tests will warn if below these)
  thresholds: {
    performance: 90, // Lighthouse performance score
    accessibility: 100, // Lighthouse accessibility score
    bestPractices: 90, // Lighthouse best practices score
    seo: 90, // Lighthouse SEO score
    maxImageSize: '500KB', // Max size for individual images
    maxTotalImages: '5MB', // Max total image size
  },

  // File paths (relative to project root)
  paths: {
    images: 'public/images',
    css: 'src/style.css',
    dist: 'dist',
    public: 'public',
  },

  // Load testing configuration
  loadTest: {
    requests: 1000, // Total requests to make
    concurrency: 10, // Concurrent requests
    timeout: 30, // Timeout in seconds
  },

  // Lighthouse configuration
  lighthouse: {
    chromeFlags: ['--headless', '--no-sandbox'],
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  },

  // Pa11y configuration
  pa11y: {
    standard: 'WCAG2AA',
    level: 'error', // or 'warning', 'notice'
    ignore: [
      // Add specific issues to ignore
      // 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail'
    ],
  },

  // Custom tests (coming soon!)
  custom: {
    // Add your own test scripts here
  },
};

