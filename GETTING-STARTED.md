# 🚀 Getting Started with Vibe Test

## Installation

### Method 1: Link Globally (Recommended)
```bash
cd /Users/ctavolazzi/Code/vibe-test
npm install
npm link

# Now you can use 'vibe' anywhere!
cd ~/your-project
vibe http://localhost:3000
```

### Method 2: Use Directly
```bash
cd /Users/ctavolazzi/Code/vibe-test
npm install
node bin/cli.js http://localhost:3000
```

### Method 3: Run from any project
```bash
npx /Users/ctavolazzi/Code/vibe-test/bin/cli.js http://localhost:5173
```

## Quick Examples

### Test your Johnny Autoseed project
```bash
# Start your server first
cd /Users/ctavolazzi/Code/johnnyautoseed
npm run preview

# In another terminal:
vibe http://localhost:5173 --all
```

### Run specific tests
```bash
# Just performance
vibe --perf

# Just accessibility
vibe --a11y

# Performance + accessibility + security
vibe --perf --a11y --security
```

### Quick development checks
```bash
# Fast scan (good for during development)
vibe --quick

# Full analysis (before deployment)
vibe --all
```

## Common Workflows

### 🏃‍♂️ During Development
```bash
# Quick checks every few commits
vibe --a11y --quick
```

### 🔍 Before Committing
```bash
# Run security and accessibility
vibe --security --a11y
```

### 🚢 Before Deployment
```bash
# Full test suite
vibe --all

# Or if you're in a hurry
vibe --all --quick
```

### 📊 Performance Deep Dive
```bash
# Performance + images + CSS
vibe --perf --images --css
```

## Understanding the Output

### ✅ Green = Passed
Everything is good!

### ⚠️ Yellow = Warning
Something to look at, but not critical

### ❌ Red = Failed
Needs attention before shipping

## Next Steps

1. **Read the full README.md** for all available options
2. **Customize vibe-test.config.js** for your project
3. **Add to CI/CD** to run on every push
4. **Share with your team** - everyone can use it!

## Tips

- Run with `--quick` during development
- Run full tests before pushing to main
- Use specific flags to debug issues
- Check the config file to customize behavior
- Reports are saved in the current directory

## Troubleshooting

**"Command not found: vibe"**
Run `npm link` again in the vibe-test directory

**"Port already in use"**
Make sure your dev server is running on the expected port

**"Tests taking too long"**
Use `--quick` flag to skip slower tests

**"Permission denied"**
Run `chmod +x bin/cli.js` in the vibe-test directory

## Examples

```bash
# Test production site
vibe https://johnnyautoseed.com --all

# Test local dev server
vibe http://localhost:5173 --perf --a11y

# Quick check for broken links
vibe --links

# Analyze bundle size
vibe --bundle

# Everything but skip slow tests
vibe --all --quick

# Custom URL from config
vibe --config ./my-config.js
```

---

**Happy testing! 🎉**

