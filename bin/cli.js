#!/usr/bin/env node

import { Command } from 'commander';
import { runTests } from '../src/index.js';
import chalk from 'chalk';
import boxen from 'boxen';

const program = new Command();

// ASCII Art Banner
const banner = `
╦  ╦╦╔╗ ╔═╗  ╔╦╗╔═╗╔═╗╔╦╗
╚╗╔╝║╠╩╗║╣    ║ ║╣ ╚═╗ ║
 ╚╝ ╩╚═╝╚═╝   ╩ ╚═╝╚═╝ ╩
`;

console.log(chalk.cyan.bold(banner));
console.log(chalk.gray('  Testing suite that actually vibes\n'));

program
  .name('vibe-test')
  .description('A comprehensive testing suite for web projects')
  .version('1.0.0')
  .argument('[url]', 'URL to test', 'http://localhost:5173')
  .option('-a, --all', 'Run all tests')
  .option('-p, --perf', 'Performance tests only')
  .option('-a11y, --accessibility', 'Accessibility tests only')
  .option('-s, --security', 'Security tests only')
  .option('-i, --images', 'Image analysis only')
  .option('-l, --links', 'Link checking only')
  .option('-c, --css', 'CSS analysis only')
  .option('--seo', 'SEO analysis only')
  .option('--load', 'Load testing only')
  .option('--bundle', 'Bundle analysis only')
  .option('-q, --quick', 'Quick scan (skip slow tests)')
  .option('--config <path>', 'Path to config file', './vibe-test.config.js')
  .action(async (url, options) => {
    try {
      console.log(
        boxen(
          chalk.white.bold(`Testing: ${chalk.cyan(url)}\n`) +
            chalk.gray(`Mode: ${options.all ? 'Complete' : 'Custom'}`),
          {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'cyan',
          }
        )
      );

      await runTests(url, options);

      console.log('\n' + chalk.green.bold('✨ All tests complete! ✨') + '\n');
    } catch (error) {
      console.error(chalk.red.bold('\n❌ Error:'), error.message);
      process.exit(1);
    }
  });

program.parse();

