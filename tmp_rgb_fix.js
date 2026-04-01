const fs = require('fs');
const path = require('path');

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r} ${g} ${b}`;
}

const cssPath = path.join(__dirname, 'src/app/globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace hex codes in var definitions
cssContent = cssContent.replace(/(--[\w-]+):\s*#([0-9a-fA-F]{3,6})/g, (match, prefix, hex) => {
    return `${prefix}: ${hexToRgb(hex)}`;
});

// Fix linear-gradients and box shadows where var() is used directly
cssContent = cssContent.replace(/var\((--[\w-]+)\)/g, (match, p1) => {
    // We already replaced the definitions with raw RGB.
    // If it's used directly in CSS properties (not via tailwind), it needs rgb() wrap, EXCEPT in rgba().
    // Actually, just let tailwind config use rgb(var(--X) / <alpha>). 
    // Wait, what about hand-written CSS in globals.css doing `rgba(var(--c-emerald-500), 0.2)`?
    // That works perfectly with raw space-separated RGB numbers in standard CSS level 4!
    // But CSS var(--bg-color) in `background: var(--bg-color);` needs `rgb()`.
    return match;
});

// Manually fix known CSS usages
cssContent = cssContent.replace(/background: var\(--bg-color\);/g, 'background: rgb(var(--bg-color));');
cssContent = cssContent.replace(/background: linear-gradient\(180deg, var\((--c-emerald-\d+)\), var\((--c-teal-\d+)\)\);/g, 'background: linear-gradient(180deg, rgb(var($1)), rgb(var($2)));');
cssContent = cssContent.replace(/box-shadow: 0 0 20px rgba\(var\(--c-emerald-500\), 0.2\), 0 0 40px rgba\(var\(--c-teal-500\), 0.1\);/g, 'box-shadow: 0 0 20px rgb(var(--c-emerald-500) / 0.2), 0 0 40px rgb(var(--c-teal-500) / 0.1);');
cssContent = cssContent.replace(/box-shadow: 0 0 30px rgba\(var\(--c-emerald-500\), 0.4\), 0 0 60px rgba\(var\(--c-teal-500\), 0.2\);/g, 'box-shadow: 0 0 30px rgb(var(--c-emerald-500) / 0.4), 0 0 60px rgb(var(--c-teal-500) / 0.2);');

fs.writeFileSync(cssPath, cssContent);

// Fix tailwind.config.ts
const twPath = path.join(__dirname, 'tailwind.config.ts');
let twContent = fs.readFileSync(twPath, 'utf8');

twContent = twContent.replace(/'var\((--[\w-]+)\)'/g, "'rgb(var($1) / <alpha-value>)'");

fs.writeFileSync(twPath, twContent);

// Fix scrolling issue in AboutSection.tsx
const aboutPath = path.join(__dirname, 'src/components/sections/AboutSection.tsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(/className="py-12 md:py-20 overflow-hidden"/g, 'className="py-12 md:py-20 overflow-hidden scroll-mt-20"');
fs.writeFileSync(aboutPath, aboutContent);

console.log("Fixes applied successfully!");
