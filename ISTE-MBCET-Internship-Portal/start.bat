@echo off
title ISTE MBCET - Internship Launchpad
echo ========================================================
echo   ISTE MBCET - Internship Launchpad Local Server
echo ========================================================
echo.

if not exist node_modules (
    echo [1/2] Installing required dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install npm packages. Ensure Node.js is installed.
        pause
        exit /b %errorlevel%
    )
) else (
    echo [1/2] Dependencies already installed.
)

echo.
echo [2/2] Launching local Vite server...
echo Access in your browser: http://localhost:5173
echo.
call npm run dev -- --host --open
pause
