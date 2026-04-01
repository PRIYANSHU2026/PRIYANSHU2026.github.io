const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace arbitrary color codes with theme tokens
      // Used globally
      const orig = content;
      content = content.replace(/\[#060d0b\]/g, 'background');
      content = content.replace(/\[#0a1612\]/g, 'card');
      
      // We also need to add ThemeToggle to Header.tsx
      if (fullPath.includes('Header.tsx')) {
        if (!content.includes('ThemeToggle')) {
          content = content.replace(
            `import { Menu, X } from "lucide-react";`,
            `import { Menu, X } from "lucide-react";\nimport { ThemeToggle } from "@/components/ThemeToggle";`
          );
          
          content = content.replace(
            `<span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />\n            </Link>\n          </Button>`,
            `<span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />\n            </Link>\n          </Button>\n          <ThemeToggle />`
          );
        }
      }

      if (content !== orig) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}
replaceInDir('/Users/priyanshutiwari/Desktop/Portfolio/PRIYANSHU2026.github.io/src');
