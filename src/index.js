import chalk from 'chalk';
import ora from 'ora';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Run a command and return the output
 */
async function runCommand(command, description, showOutput = true) {
  const spinner = ora(description).start();

  try {
    const { stdout, stderr } = await execAsync(command, { maxBuffer: 10 * 1024 * 1024 });
    spinner.succeed(chalk.green(description));
    
    // Show output if requested
    if (showOutput && stdout) {
      console.log(chalk.gray(stdout.trim()));
    }
    
    if (stderr && stderr.trim()) {
      console.log(chalk.yellow('⚠️  Warnings:'));
      console.log(chalk.gray(stderr.trim()));
    }
    
    return { success: true, output: stdout, error: stderr };
  } catch (error) {
    spinner.fail(chalk.red(description));
    
    // Always show error output
    if (error.stdout) {
      console.log(chalk.gray(error.stdout.trim()));
    }
    if (error.stderr) {
      console.log(chalk.red(error.stderr.trim()));
    }
    
    return { success: false, output: error.stdout, error: error.stderr };
  }
}

/**
 * Performance tests
 */
async function runPerformanceTests(url, quick = false) {
  console.log(chalk.cyan.bold('\n🚀 Performance Tests\n'));

  if (quick) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = `./vibe-lighthouse-${timestamp}.html`;
    
    const result = await runCommand(
      `npx lighthouse ${url} --output=html --output-path=${reportPath} --chrome-flags="--headless"`,
      'Quick Lighthouse scan',
      false
    );
    
    if (result.success) {
      console.log(chalk.green(`\n📊 Report saved: ${reportPath}`));
      console.log(chalk.gray(`   Open with: open ${reportPath}`));
    }
  } else {
    await runCommand(
      `npx unlighthouse --site ${url}`,
      'Complete performance scan (this may take a while...)',
      false
    );
    console.log(chalk.green('\n📊 Report saved to: .lighthouseci/ directory'));
  }
}

/**
 * Accessibility tests
 */
async function runAccessibilityTests(url) {
  console.log(chalk.cyan.bold('\n♿ Accessibility Tests\n'));

  await runCommand(`npx pa11y ${url}`, 'WCAG compliance check');
}

/**
 * Security tests
 */
async function runSecurityTests() {
  console.log(chalk.cyan.bold('\n🔒 Security Tests\n'));

  await runCommand('npm audit --omit=dev', 'NPM dependency audit');
}

/**
 * Image analysis
 */
async function runImageAnalysis() {
  console.log(chalk.cyan.bold('\n🖼️  Image Analysis\n'));

  const command = `find public/images -type f \\( -name '*.jpg' -o -name '*.png' -o -name '*.webp' -o -name '*.gif' \\) -exec du -h {} \\; 2>/dev/null | sort -rh | head -10`;

  const result = await runCommand(command, 'Analyzing image sizes');

  if (result.success && result.output) {
    console.log(chalk.cyan('\n📊 Top 10 largest images:'));
  }
}

/**
 * Link checking
 */
async function runLinkCheck(url) {
  console.log(chalk.cyan.bold('\n🔗 Link Validation\n'));

  await runCommand(
    `npx broken-link-checker ${url} -ro --exclude linkedin.com --exclude twitter.com --exclude facebook.com`,
    'Checking for broken links'
  );
}

/**
 * CSS analysis
 */
async function runCSSAnalysis() {
  console.log(chalk.cyan.bold('\n🎨 CSS Analysis\n'));

  await runCommand('npx cssstats src/style.css', 'Analyzing CSS complexity');
}

/**
 * SEO analysis
 */
async function runSEOAnalysis(url) {
  console.log(chalk.cyan.bold('\n📈 SEO Analysis\n'));

  await runCommand(`npx seo-analyzer ${url}`, 'Checking SEO optimization');
}

/**
 * Load testing
 */
async function runLoadTest(url) {
  console.log(chalk.cyan.bold('\n⚡ Load Testing\n'));

  const command = `ab -n 1000 -c 10 ${url} 2>&1 | tail -20`;

  await runCommand(command, 'Running stress test (1000 requests, 10 concurrent)');
}

/**
 * Bundle analysis
 */
async function runBundleAnalysis() {
  console.log(chalk.cyan.bold('\n📦 Bundle Analysis\n'));

  await runCommand(
    `npx source-map-explorer 'dist/assets/*.js' --html bundle-report.html`,
    'Analyzing JavaScript bundles'
  );

  console.log(chalk.gray('  Report saved to: bundle-report.html'));
}

/**
 * Main test runner
 */
export async function runTests(url, options) {
  const startTime = Date.now();

  console.log(chalk.gray(`\nStarting tests at ${new Date().toLocaleTimeString()}\n`));

  // Run all tests if --all flag is used
  if (options.all) {
    await runPerformanceTests(url, options.quick);
    await runAccessibilityTests(url);
    await runSecurityTests();
    await runImageAnalysis();
    await runLinkCheck(url);
    await runCSSAnalysis();
    await runSEOAnalysis(url);
    if (!options.quick) {
      await runLoadTest(url);
    }
  } else {
    // Run selected tests
    if (options.perf) await runPerformanceTests(url, options.quick);
    if (options.accessibility) await runAccessibilityTests(url);
    if (options.security) await runSecurityTests();
    if (options.images) await runImageAnalysis();
    if (options.links) await runLinkCheck(url);
    if (options.css) await runCSSAnalysis();
    if (options.seo) await runSEOAnalysis(url);
    if (options.load) await runLoadTest(url);
    if (options.bundle) await runBundleAnalysis();

    // If no specific test is selected, run a quick default suite
    if (
      !options.perf &&
      !options.accessibility &&
      !options.security &&
      !options.images &&
      !options.links &&
      !options.css &&
      !options.seo &&
      !options.load &&
      !options.bundle
    ) {
      console.log(chalk.yellow('No tests specified. Running quick default suite...\n'));
      await runPerformanceTests(url, true);
      await runAccessibilityTests(url);
      await runSecurityTests();
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(chalk.gray(`\nCompleted in ${duration}s`));
}

