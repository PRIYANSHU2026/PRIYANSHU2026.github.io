const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const orig = content;

      // Bulk color replacements from the base template -> GSoC/Google theme
      content = content.replace(/indigo/g, 'emerald');
      content = content.replace(/purple/g, 'teal');
      content = content.replace(/violet/g, 'teal');
      content = content.replace(/fuchsia/g, 'orange');
      content = content.replace(/rose/g, 'red');

      // specific background replacements
      content = content.replace(/bg-\[#060d0b\]/g, 'bg-background');
      content = content.replace(/bg-\[#0a1612\]/g, 'bg-card');
      content = content.replace(/bg-slate-900/g, 'bg-card');
      content = content.replace(/border-slate-800/g, 'border-emerald-800');

      // ThemeToggle in Header
      if (fullPath.includes('Header.tsx')) {
        if (!content.includes('ThemeToggle')) {
          content = content.replace(
            `import { Menu, X } from "lucide-react";`,
            `import { Menu, X } from "lucide-react";\nimport { ThemeToggle } from "@/components/ThemeToggle";`
          );
          content = content.replace(
            `</Link>\n          </Button>\n        </motion.div>`,
            `</Link>\n          </Button>\n          <ThemeToggle />\n        </motion.div>`
          );
        }
      }

      // layout.tsx ThemeProvider
      if (fullPath.includes('layout.tsx')) {
        if (!content.includes('ThemeProvider')) {
          content = content.replace(
            `import "./globals.css";`,
            `import { ThemeProvider } from "@/components/ThemeProvider";\nimport "./globals.css";`
          );
          content = content.replace(
            `<ClientBody>`,
            `<ClientBody>\n        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>`
          );
          content = content.replace(
            `</ClientBody>`,
            `</ThemeProvider>\n      </ClientBody>`
          );
        }
      }

      // AboutSection fixes
      if (fullPath.includes('AboutSection.tsx')) {
         content = content.replace(/className="py-12 md:py-20 overflow-hidden"/g, 'className="py-12 md:py-20 overflow-hidden scroll-mt-20"');
      }

      if (content !== orig) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir('/Users/priyanshutiwari/Desktop/Portfolio/PRIYANSHU2026.github.io/src');
console.log("Replaced colors and restored layout/header components.");
