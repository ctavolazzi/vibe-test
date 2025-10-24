#!/bin/bash

# Example: Testing Johnny Autoseed Project
# This script shows how to run comprehensive tests on the Johnny Autoseed website

echo "🎵 Vibe Test - Johnny Autoseed Example"
echo "========================================"
echo ""

# Navigate to project
cd /Users/ctavolazzi/Code/johnnyautoseed

# Check if preview server is running
if ! curl -s http://localhost:5173 > /dev/null; then
    echo "⚠️  Preview server not running. Starting..."
    npm run preview &
    sleep 5
fi

# Run tests from vibe-test directory
cd /Users/ctavolazzi/Code/vibe-test

echo "Running quick scan..."
node bin/cli.js http://localhost:5173 --quick

echo ""
echo "For full analysis, run:"
echo "  node bin/cli.js http://localhost:5173 --all"
echo ""
echo "For specific tests, try:"
echo "  node bin/cli.js http://localhost:5173 --perf"
echo "  node bin/cli.js http://localhost:5173 --a11y"
echo "  node bin/cli.js http://localhost:5173 --images"

