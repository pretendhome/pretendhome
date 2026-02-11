#!/bin/bash
# Setup script for live demo

echo "==================================="
echo "Live Demo Setup"
echo "==================================="
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 not found. Install Python 3.8+"
    exit 1
fi
echo "✅ Python 3 found"

# Check anthropic package
if ! python3 -c "import anthropic" 2>/dev/null; then
    echo "⚠️  anthropic package not found. Installing..."
    pip3 install anthropic
fi
echo "✅ anthropic package installed"

# Check API key
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo ""
    echo "⚠️  ANTHROPIC_API_KEY not set"
    echo ""
    echo "Set it with:"
    echo "  export ANTHROPIC_API_KEY='sk-ant-...'"
    echo ""
    echo "Or add to ~/.bashrc:"
    echo "  echo 'export ANTHROPIC_API_KEY=\"sk-ant-...\"' >> ~/.bashrc"
    echo "  source ~/.bashrc"
    echo ""
    exit 1
fi
echo "✅ ANTHROPIC_API_KEY set"

# Test run
echo ""
echo "Running test..."
echo ""
python3 demo_job_fit.py > demo_output_backup.txt 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Demo script works!"
    echo ""
    echo "Backup output saved to: demo_output_backup.txt"
    echo ""
    echo "You're ready for the live demo!"
else
    echo "❌ Demo script failed. Check demo_output_backup.txt for errors"
    exit 1
fi
