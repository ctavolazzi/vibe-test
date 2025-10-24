# 🛠️ Vibe Test - Development Guide

## Project Structure

```
vibe-test/
├── bin/
│   └── cli.js              # CLI entry point
├── src/
│   ├── index.js            # Main test orchestrator
│   ├── tests/              # Individual test modules (future)
│   └── utils/              # Helper functions (future)
├── examples/
│   └── johnny-autoseed-test.sh  # Example usage
├── docs/
│   └── DEVELOPMENT.md      # This file
├── package.json
├── README.md
├── GETTING-STARTED.md
└── vibe-test.config.js     # Example configuration
```

## How It Works

### CLI Flow

1. **Entry Point** (`bin/cli.js`)
   - Parses command-line arguments
   - Displays banner
   - Calls main test runner

2. **Test Orchestrator** (`src/index.js`)
   - Determines which tests to run
   - Executes tests in sequence
   - Displays results with spinners

3. **Test Execution**
   - Each test runs as a shell command via `npx`
   - Results are captured and formatted
   - Spinners show progress

## Adding New Tests

### 1. Add Test Function

In `src/index.js`:

```javascript
async function runNewTest(url) {
  console.log(chalk.cyan.bold('\n🎯 New Test\n'));

  await runCommand(
    `npx your-tool ${url}`,
    'Running new test'
  );
}
```

### 2. Add CLI Option

In `bin/cli.js`:

```javascript
program
  .option('--new', 'Run new test')
  // ... other options
```

### 3. Wire It Up

In `src/index.js`, add to the test runner:

```javascript
if (options.new) await runNewTest(url);
```

## Available Tools

### Dependencies

- **chalk** - Terminal colors
- **ora** - Spinners and progress
- **boxen** - Terminal boxes
- **commander** - CLI argument parsing

### External Tools (via npx)

- **lighthouse** - Performance audits
- **unlighthouse** - Multi-page scanning
- **pa11y** - Accessibility testing
- **broken-link-checker** - Link validation
- **cssstats** - CSS analysis
- **seo-analyzer** - SEO testing
- **source-map-explorer** - Bundle analysis
- **ab** (Apache Bench) - Load testing

## Configuration System

The `vibe-test.config.js` file allows users to customize:

- Default URL
- Excluded domains
- Performance thresholds
- File paths
- Tool-specific settings

### Future: Load Config

```javascript
import config from './vibe-test.config.js';

// Use config values
const url = options.url || config.url;
const threshold = config.thresholds.performance;
```

## Testing the Tool

```bash
# Test CLI parsing
node bin/cli.js --help

# Test with default options
node bin/cli.js

# Test specific flags
node bin/cli.js --perf
node bin/cli.js --all --quick

# Test with custom URL
node bin/cli.js https://example.com --a11y
```

## Future Enhancements

### Phase 1: Core Features
- [x] CLI interface
- [x] Basic test runners
- [x] Configuration file
- [ ] Load and use config
- [ ] Better error handling
- [ ] Test result caching

### Phase 2: Advanced Features
- [ ] Custom test scripts
- [ ] Test result comparison
- [ ] HTML report generation
- [ ] CI/CD integration templates
- [ ] Watch mode
- [ ] Parallel test execution

### Phase 3: Polish
- [ ] Progress bars for long tests
- [ ] Test result history
- [ ] Recommendations engine
- [ ] Auto-fix suggestions
- [ ] VS Code extension
- [ ] GitHub Action

## Code Style

- Use ES modules
- Async/await for async code
- Descriptive function names
- Comments for complex logic
- Keep functions focused

## Publishing

To publish as npm package:

```bash
# Update version
npm version patch

# Test locally
npm link

# Publish
npm publish
```

## Common Tasks

### Link for Development
```bash
cd /Users/ctavolazzi/Code/vibe-test
npm link
vibe --help
```

### Unlink
```bash
npm unlink -g vibe-test
```

### Update Dependencies
```bash
npm update
npm audit fix
```

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

## Debugging

### Enable Verbose Output

Add to any test function:

```javascript
const result = await runCommand(command, description);
console.log('Debug:', result);
```

### Test Individual Commands

```bash
# Test a single tool directly
npx lighthouse http://localhost:5173 --view
npx pa11y http://localhost:5173
```

## Contributing

1. Create feature branch
2. Make changes
3. Test locally with `npm link`
4. Update documentation
5. Submit PR

## Resources

- [Commander.js Docs](https://github.com/tj/commander.js)
- [Chalk Docs](https://github.com/chalk/chalk)
- [Ora Docs](https://github.com/sindresorhus/ora)
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse)

---

**Happy hacking! 🎉**

