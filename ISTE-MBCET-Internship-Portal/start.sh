#!/bin/bash
echo "========================================================"
echo "  ISTE MBCET - Internship Launchpad Local Server"
echo "========================================================"
echo ""

if [ ! -d "node_modules" ]; then
    echo "[1/2] Installing required dependencies..."
    npm install
fi

echo ""
echo "[2/2] Launching local Vite server..."
echo "Access in your browser: http://localhost:5173"
echo ""
npm run dev -- --host --open
